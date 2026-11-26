const POSTER_BY_MOTION = {
  idle: "/brand/kokochan-hero.png",
  speaking: "/brand/kokochan-speaking.png",
  nod: "/brand/kokochan-motion.png",
};

const VRMA_BY_MOTION = {
  idle: "/models/idle.vrma",
  speaking: "/models/speaking.vrma",
  nod: "/models/nod.vrma",
};

export function initializeKokochanStage() {
  const stage = document.querySelector("[data-vrm-stage]");
  if (!stage) return;

  const poster = stage.querySelector("[data-vrm-poster]");
  const canvasHost = stage.querySelector("[data-vrm-canvas]");
  const buttons = Array.from(stage.querySelectorAll("[data-vrm-motion]"));
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  let activeMotion = "idle";
  let controller = null;
  let bootStarted = false;

  function setPressed(motion) {
    for (const button of buttons) {
      button.setAttribute(
        "aria-pressed",
        String(button.getAttribute("data-vrm-motion") === motion),
      );
    }
  }

  function selectMotion(motion) {
    if (!POSTER_BY_MOTION[motion]) return;
    activeMotion = motion;
    setPressed(motion);

    if (controller) {
      controller.play(motion);
      return;
    }

    if (poster) {
      poster.src = POSTER_BY_MOTION[motion];
    }
    if (!bootStarted && !reducedMotion) {
      bootWebGL();
    }
  }

  for (const button of buttons) {
    button.addEventListener("click", () => {
      const motion = button.getAttribute("data-vrm-motion");
      if (motion) selectMotion(motion);
    });
  }

  async function bootWebGL() {
    if (bootStarted || !canvasHost) return;
    bootStarted = true;

    try {
      const [THREE, { GLTFLoader }, vrmPkg, vrmaPkg] = await Promise.all([
        import("three"),
        import("three/examples/jsm/loaders/GLTFLoader.js"),
        import("@pixiv/three-vrm"),
        import("@pixiv/three-vrm-animation"),
      ]);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.NoToneMapping;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(25, 4 / 4.65, 0.1, 20);
      camera.position.set(0, 1.28, 1.88);
      camera.lookAt(0, 1.23, 0);

      const ambient = new THREE.AmbientLight(0xfff9f2, 0.72);
      const key = new THREE.DirectionalLight(0xfffaf2, 1.55);
      key.position.set(1.4, 2.2, 2.4);
      const rim = new THREE.DirectionalLight(0xbce4d4, 0.55);
      rim.position.set(-1.6, 1.6, -1.2);
      scene.add(ambient, key, rim);

      const loader = new GLTFLoader();
      loader.register((parser) => new vrmPkg.VRMLoaderPlugin(parser));
      loader.register((parser) => new vrmaPkg.VRMAnimationLoaderPlugin(parser));

      const gltf = await loader.loadAsync("/models/kokochan.vrm");
      const vrm = gltf.userData.vrm;
      if (!vrm) {
        renderer.dispose();
        return;
      }

      if (vrmPkg.VRMUtils?.removeUnnecessaryVertices) {
        vrmPkg.VRMUtils.removeUnnecessaryVertices(gltf.scene);
      }
      if (vrmPkg.VRMUtils?.combineSkeletons) {
        vrmPkg.VRMUtils.combineSkeletons(gltf.scene);
      }
      vrm.scene.traverse((obj) => {
        obj.frustumCulled = false;
      });
      scene.add(vrm.scene);

      const mixer = new THREE.AnimationMixer(vrm.scene);
      const actions = new Map();
      let currentAction = null;

      async function loadAction(motion) {
        if (actions.has(motion)) return actions.get(motion);
        const animGltf = await loader.loadAsync(VRMA_BY_MOTION[motion]);
        const vrmAnim = animGltf.userData.vrmAnimations?.[0];
        if (!vrmAnim) return null;
        const clip = vrmaPkg.createVRMAnimationClip(vrmAnim, vrm);
        const action = mixer.clipAction(clip);
        actions.set(motion, action);
        return action;
      }

      async function play(motion) {
        const nextAction = await loadAction(motion);
        if (!nextAction || nextAction === currentAction) return;
        nextAction.reset();
        nextAction.enabled = true;
        nextAction.setEffectiveWeight(1);
        nextAction.play();
        if (currentAction) {
          currentAction.crossFadeTo(nextAction, 0.35, false);
        }
        currentAction = nextAction;
      }

      await play(activeMotion);

      function syncSize() {
        const rect = canvasHost.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        renderer.setSize(rect.width, rect.height, false);
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
      }

      canvasHost.appendChild(renderer.domElement);
      syncSize();

      const resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvasHost);

      // Gentle pointer tracking
      const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
      const lookTarget = new THREE.Object3D();
      lookTarget.position.set(0, 1.28, 2.0);
      scene.add(lookTarget);
      if (vrm.lookAt) {
        vrm.lookAt.target = lookTarget;
      }

      window.addEventListener(
        "pointermove",
        (event) => {
          const nx = (event.clientX / window.innerWidth) * 2 - 1;
          const ny = -((event.clientY / window.innerHeight) * 2 - 1);
          pointer.targetX = Math.max(-0.45, Math.min(0.45, nx * 0.45));
          pointer.targetY = Math.max(-0.22, Math.min(0.22, ny * 0.22));
        },
        { passive: true },
      );

      // Natural blinking
      let blinkTimer = 2.8 + Math.random() * 2;
      let blinkProgress = -1;

      const clock = new THREE.Clock();
      let visible = true;
      let rafId = 0;
      let firstFrameDone = false;

      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          visible = entries[0]?.isIntersecting ?? true;
          if (visible && !document.hidden && rafId === 0) {
            clock.getDelta();
            rafId = requestAnimationFrame(tick);
          }
        },
        { threshold: 0.05 },
      );
      intersectionObserver.observe(stage);

      document.addEventListener("visibilitychange", () => {
        if (!document.hidden && visible && rafId === 0) {
          clock.getDelta();
          rafId = requestAnimationFrame(tick);
        }
      });

      function tick() {
        rafId = 0;
        if (!visible || document.hidden) return;

        const delta = Math.min(clock.getDelta(), 0.05);
        mixer.update(delta);

        pointer.x += (pointer.targetX - pointer.x) * Math.min(1, delta * 5);
        pointer.y += (pointer.targetY - pointer.y) * Math.min(1, delta * 5);
        lookTarget.position.set(pointer.x * 0.65, 1.28 + pointer.y * 0.45, 2.0);

        if (vrm.expressionManager) {
          const targetHappy =
            activeMotion === "speaking" ? 0.3 : activeMotion === "nod" ? 0.22 : 0.14;
          vrm.expressionManager.setValue("happy", targetHappy);
          if (activeMotion === "speaking") {
            const t = clock.elapsedTime;
            const mouth = Math.max(0, Math.sin(t * 7.5) * 0.18 + Math.sin(t * 13) * 0.12);
            vrm.expressionManager.setValue("aa", mouth);
          } else {
            vrm.expressionManager.setValue("aa", 0);
          }
          blinkTimer -= delta;
          if (blinkTimer <= 0 && blinkProgress < 0) {
            blinkProgress = 0;
            blinkTimer = 3.5 + Math.random() * 2;
          }
          if (blinkProgress >= 0) {
            blinkProgress += delta * 7.5;
            const weight =
              blinkProgress < 1
                ? blinkProgress
                : Math.max(0, 2 - blinkProgress);
            vrm.expressionManager.setValue("blink", weight);
            if (blinkProgress >= 2) {
              vrm.expressionManager.setValue("blink", 0);
              blinkProgress = -1;
            }
          }
        }

        vrm.update(delta);
        renderer.render(scene, camera);

        if (!firstFrameDone) {
          firstFrameDone = true;
          stage.setAttribute("data-vrm-ready", "true");
        }

        rafId = requestAnimationFrame(tick);
      }

      controller = { play };
      rafId = requestAnimationFrame(tick);

      // Preload remaining motions quietly in background
      for (const motion of Object.keys(VRMA_BY_MOTION)) {
        if (motion !== activeMotion) {
          loadAction(motion).catch(() => {});
        }
      }
    } catch {
      // Fall back silently to static high-res 3D PNG renders.
    }
  }

  if (!reducedMotion) {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => bootWebGL(), { timeout: 1200 });
    } else {
      window.setTimeout(() => bootWebGL(), 300);
    }
  }
}
