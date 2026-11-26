const POSTER_BY_MOTION = {
  idle: "/brand/kokochan-hero.png",
  speaking: "/brand/kokochan-speaking.png",
  turn: "/brand/kokochan-motion.png",
};

const VRMA_BY_MOTION = {
  idle: "/models/idle.vrma",
  speaking: "/models/speaking.vrma",
  turn: "/models/turn.vrma",
  tapped: "/models/tapped.vrma",
};

const SKY_PRESETS = {
  day: {
    top: 0xcfe8e4,
    mid: 0xeef6f0,
    horizon: 0xfdf3e2,
    glow: 0xfff8e6,
    glowDir: [0.42, 0.36, -0.83],
    starStrength: 0.0,
    ambientColor: 0xfff9f2,
    ambientIntensity: 0.74,
    keyColor: 0xfffaf0,
    keyIntensity: 1.55,
    keyPos: [1.5, 2.3, 2.4],
    rimColor: 0xbce4d4,
    rimIntensity: 0.55,
    moteColor: 0xfff6dc,
    moteOpacity: 0.55,
  },
  dusk: {
    top: 0x1e2942,
    mid: 0x7a5368,
    horizon: 0xe8a87c,
    glow: 0xffc694,
    glowDir: [0.58, 0.14, -0.8],
    starStrength: 0.22,
    ambientColor: 0xffdfc8,
    ambientIntensity: 0.64,
    keyColor: 0xffd3a8,
    keyIntensity: 1.65,
    keyPos: [2.2, 1.6, 1.9],
    rimColor: 0xffae7a,
    rimIntensity: 0.95,
    moteColor: 0xffc88a,
    moteOpacity: 0.68,
  },
  night: {
    top: 0x081018,
    mid: 0x13262e,
    horizon: 0x1e3b38,
    glow: 0x9ce3ce,
    glowDir: [-0.38, 0.42, -0.82],
    starStrength: 1.0,
    ambientColor: 0xc8ded9,
    ambientIntensity: 0.56,
    keyColor: 0xd6e6ff,
    keyIntensity: 1.25,
    keyPos: [-1.4, 2.2, 2.3],
    rimColor: 0x8ee0c8,
    rimIntensity: 1.05,
    moteColor: 0x9ff0d6,
    moteOpacity: 0.72,
  },
};

const SKY_VERTEX_SHADER = `
varying vec3 vWorldDir;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldDir = normalize(position);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const SKY_FRAGMENT_SHADER = `
uniform vec3 uTopColor;
uniform vec3 uMidColor;
uniform vec3 uHorizonColor;
uniform vec3 uGlowColor;
uniform vec3 uGlowDir;
uniform float uStarStrength;
uniform float uTime;
varying vec3 vWorldDir;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec3 dir = normalize(vWorldDir);
  float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);

  vec3 col = mix(uHorizonColor, uMidColor, smoothstep(0.32, 0.58, h));
  col = mix(col, uTopColor, smoothstep(0.55, 0.92, h));

  float sunDot = max(dot(dir, normalize(uGlowDir)), 0.0);
  float halo = pow(sunDot, 7.0) * 0.34 + pow(sunDot, 42.0) * 0.45;
  col += uGlowColor * halo;

  if (uStarStrength > 0.01 && dir.y > -0.05) {
    vec2 uv = dir.xz / (dir.y + 0.45);
    vec2 grid = floor(uv * 28.0);
    vec2 cell = fract(uv * 28.0) - 0.5;
    float rnd = hash(grid);
    if (rnd > 0.965) {
      float d = length(cell);
      float twinkle = 0.65 + 0.35 * sin(uTime * (1.8 + rnd * 3.0) + rnd * 40.0);
      float star = smoothstep(0.18, 0.02, d) * twinkle * smoothstep(-0.02, 0.25, dir.y);
      col += vec3(0.88, 0.96, 0.94) * star * uStarStrength;
    }
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

function createBokehTexture(THREE) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const grad = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
    grad.addColorStop(0, "rgba(255, 255, 255, 1)");
    grad.addColorStop(0.35, "rgba(255, 255, 255, 0.55)");
    grad.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function initializeKokochanStage() {
  const stage = document.querySelector("[data-vrm-stage]");
  if (!stage) return;

  const poster = stage.querySelector("[data-vrm-poster]");
  const canvasHost = stage.querySelector("[data-vrm-canvas]");
  const motionButtons = Array.from(stage.querySelectorAll("[data-vrm-motion]"));
  const skyButtons = Array.from(stage.querySelectorAll("[data-vrm-sky]"));
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  function themeDefaultSky() {
    return document.documentElement.dataset.theme === "light" ? "day" : "night";
  }

  let activeMotion = "idle";
  let activeSky = themeDefaultSky();
  let userPickedSky = false;
  let controller = null;
  let bootStarted = false;

  function markInteracted() {
    if (stage.getAttribute("data-vrm-interacted") !== "true") {
      stage.setAttribute("data-vrm-interacted", "true");
    }
  }

  function setMotionPressed(motion) {
    for (const button of motionButtons) {
      button.setAttribute(
        "aria-pressed",
        String(button.getAttribute("data-vrm-motion") === motion),
      );
    }
  }

  function setSkyPressed(sky) {
    stage.setAttribute("data-vrm-sky-active", sky);
    for (const button of skyButtons) {
      button.setAttribute(
        "aria-pressed",
        String(button.getAttribute("data-vrm-sky") === sky),
      );
    }
  }

  setSkyPressed(activeSky);

  function selectMotion(motion) {
    if (!VRMA_BY_MOTION[motion]) return;
    markInteracted();
    activeMotion = motion;
    if (motion !== "tapped") {
      setMotionPressed(motion);
    }

    if (controller) {
      controller.play(motion);
      return;
    }

    if (poster && POSTER_BY_MOTION[motion]) {
      poster.src = POSTER_BY_MOTION[motion];
    }
    if (!bootStarted && !reducedMotion) {
      bootWebGL();
    }
  }

  function selectSky(sky, manual = true) {
    if (!SKY_PRESETS[sky]) return;
    if (manual) {
      userPickedSky = true;
      markInteracted();
    }
    activeSky = sky;
    setSkyPressed(sky);
    if (controller) {
      controller.setSky(sky);
    }
  }

  for (const button of motionButtons) {
    button.addEventListener("click", () => {
      const motion = button.getAttribute("data-vrm-motion");
      if (motion) selectMotion(motion);
    });
  }

  for (const button of skyButtons) {
    button.addEventListener("click", () => {
      const sky = button.getAttribute("data-vrm-sky");
      if (sky) selectSky(sky, true);
    });
  }

  const themeObserver = new MutationObserver(() => {
    if (userPickedSky) return;
    selectSky(themeDefaultSky(), false);
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

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
      const camera = new THREE.PerspectiveCamera(25, 4 / 4.65, 0.1, 30);
      const lookCenter = new THREE.Vector3(0, 1.21, 0);
      const orbitRadius = 1.88;
      const basePitch = Math.atan2(1.26 - 1.21, orbitRadius);

      let azimuth = 0;
      let targetAzimuth = 0;
      let pitch = basePitch;
      let targetPitch = basePitch;

      function updateCameraTransform() {
        const horiz = Math.cos(pitch) * orbitRadius;
        camera.position.set(
          Math.sin(azimuth) * horiz,
          lookCenter.y + Math.sin(pitch) * orbitRadius,
          Math.cos(azimuth) * horiz,
        );
        camera.lookAt(lookCenter);
      }
      updateCameraTransform();

      // Real 3D Atmospheric Sky Dome
      const initialPreset = SKY_PRESETS[activeSky];
      const skyUniforms = {
        uTopColor: { value: new THREE.Color(initialPreset.top) },
        uMidColor: { value: new THREE.Color(initialPreset.mid) },
        uHorizonColor: { value: new THREE.Color(initialPreset.horizon) },
        uGlowColor: { value: new THREE.Color(initialPreset.glow) },
        uGlowDir: { value: new THREE.Vector3(...initialPreset.glowDir) },
        uStarStrength: { value: initialPreset.starStrength },
        uTime: { value: 0 },
      };
      const skyDome = new THREE.Mesh(
        new THREE.SphereGeometry(12, 32, 24),
        new THREE.ShaderMaterial({
          vertexShader: SKY_VERTEX_SHADER,
          fragmentShader: SKY_FRAGMENT_SHADER,
          uniforms: skyUniforms,
          side: THREE.BackSide,
          depthWrite: false,
        }),
      );
      scene.add(skyDome);

      // Real 3D Drifting Komorebi Light Motes
      const moteCount = 48;
      const motePositions = new Float32Array(moteCount * 3);
      const moteSeeds = new Float32Array(moteCount * 3);
      for (let i = 0; i < moteCount; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 0.55 + Math.random() * 1.45;
        motePositions[i * 3] = Math.cos(angle) * radius;
        motePositions[i * 3 + 1] = 0.65 + Math.random() * 1.35;
        motePositions[i * 3 + 2] = Math.sin(angle) * radius - 0.35;
        moteSeeds[i * 3] = Math.random() * Math.PI * 2;
        moteSeeds[i * 3 + 1] = 0.04 + Math.random() * 0.07;
        moteSeeds[i * 3 + 2] = 0.35 + Math.random() * 0.55;
      }
      const moteGeom = new THREE.BufferGeometry();
      moteGeom.setAttribute(
        "position",
        new THREE.BufferAttribute(motePositions, 3),
      );
      const moteMaterial = new THREE.PointsMaterial({
        color: new THREE.Color(initialPreset.moteColor),
        map: createBokehTexture(THREE),
        size: 0.068,
        transparent: true,
        opacity: initialPreset.moteOpacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });
      const motes = new THREE.Points(moteGeom, moteMaterial);
      scene.add(motes);

      // Dynamic 3D Studio Lights
      const ambient = new THREE.AmbientLight(
        initialPreset.ambientColor,
        initialPreset.ambientIntensity,
      );
      const key = new THREE.DirectionalLight(
        initialPreset.keyColor,
        initialPreset.keyIntensity,
      );
      key.position.set(...initialPreset.keyPos);
      const rim = new THREE.DirectionalLight(
        initialPreset.rimColor,
        initialPreset.rimIntensity,
      );
      rim.position.set(-1.6, 1.6, -1.2);
      scene.add(ambient, key, rim);

      const targetSkyColors = {
        top: new THREE.Color(initialPreset.top),
        mid: new THREE.Color(initialPreset.mid),
        horizon: new THREE.Color(initialPreset.horizon),
        glow: new THREE.Color(initialPreset.glow),
        glowDir: new THREE.Vector3(...initialPreset.glowDir),
        ambient: new THREE.Color(initialPreset.ambientColor),
        key: new THREE.Color(initialPreset.keyColor),
        keyPos: new THREE.Vector3(...initialPreset.keyPos),
        rim: new THREE.Color(initialPreset.rimColor),
        mote: new THREE.Color(initialPreset.moteColor),
      };
      let targetPreset = initialPreset;

      function setSky(sky) {
        const preset = SKY_PRESETS[sky];
        if (!preset) return;
        targetPreset = preset;
        targetSkyColors.top.setHex(preset.top);
        targetSkyColors.mid.setHex(preset.mid);
        targetSkyColors.horizon.setHex(preset.horizon);
        targetSkyColors.glow.setHex(preset.glow);
        targetSkyColors.glowDir.set(...preset.glowDir);
        targetSkyColors.ambient.setHex(preset.ambientColor);
        targetSkyColors.key.setHex(preset.keyColor);
        targetSkyColors.keyPos.set(...preset.keyPos);
        targetSkyColors.rim.setHex(preset.rimColor);
        targetSkyColors.mote.setHex(preset.moteColor);
      }

      // Load VRM & Animations
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
      let currentMotionName = null;
      let tappedWarmth = 0;

      async function loadAction(motion) {
        if (actions.has(motion)) return actions.get(motion);
        const animGltf = await loader.loadAsync(VRMA_BY_MOTION[motion]);
        const vrmAnim = animGltf.userData.vrmAnimations?.[0];
        if (!vrmAnim) return null;
        const clip = vrmaPkg.createVRMAnimationClip(vrmAnim, vrm);
        const action = mixer.clipAction(clip);
        if (motion === "tapped" || motion === "turn") {
          action.setLoop(THREE.LoopOnce, 1);
          action.clampWhenFinished = false;
        }
        actions.set(motion, action);
        return action;
      }

      async function play(motion) {
        const nextAction = await loadAction(motion);
        if (!nextAction) return;
        if (
          nextAction === currentAction &&
          motion !== "tapped" &&
          motion !== "turn"
        ) {
          return;
        }
        nextAction.reset();
        nextAction.enabled = true;
        nextAction.setEffectiveWeight(1);
        nextAction.play();
        if (currentAction && currentAction !== nextAction) {
          currentAction.crossFadeTo(nextAction, 0.35, false);
        }
        currentAction = nextAction;
        currentMotionName = motion;
        if (motion === "tapped") {
          tappedWarmth = 1;
        }
      }

      mixer.addEventListener("finished", (event) => {
        if (
          event.action === actions.get("tapped") ||
          event.action === actions.get("turn")
        ) {
          activeMotion = "idle";
          setMotionPressed("idle");
          play("idle");
        }
      });

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

      // Drag-to-orbit + Tap-to-react
      let dragging = false;
      let dragStartX = 0;
      let dragStartY = 0;
      let dragStartAzimuth = 0;
      let dragStartPitch = basePitch;
      let dragTravel = 0;
      const maxAzimuth = (52 * Math.PI) / 180;
      const maxPitchDelta = (7 * Math.PI) / 180;

      stage.addEventListener("pointerdown", (event) => {
        if (event.target.closest("button, a")) return;
        dragging = true;
        dragStartX = event.clientX;
        dragStartY = event.clientY;
        dragStartAzimuth = targetAzimuth;
        dragStartPitch = targetPitch;
        dragTravel = 0;
        stage.setAttribute("data-vrm-dragging", "true");
        stage.setPointerCapture?.(event.pointerId);
      });

      stage.addEventListener("pointermove", (event) => {
        if (!dragging) return;
        const dx = event.clientX - dragStartX;
        const dy = event.clientY - dragStartY;
        dragTravel = Math.max(dragTravel, Math.hypot(dx, dy));
        if (dragTravel >= 6) {
          markInteracted();
        }
        targetAzimuth = Math.max(
          -maxAzimuth,
          Math.min(maxAzimuth, dragStartAzimuth - dx * 0.0055),
        );
        targetPitch = Math.max(
          basePitch - maxPitchDelta,
          Math.min(basePitch + maxPitchDelta, dragStartPitch + dy * 0.0022),
        );
      });

      function endDrag(event) {
        if (!dragging) return;
        dragging = false;
        stage.removeAttribute("data-vrm-dragging");
        stage.releasePointerCapture?.(event.pointerId);
        if (dragTravel < 6 && !event.target.closest("button, a")) {
          selectMotion("tapped");
        }
      }

      stage.addEventListener("pointerup", endDrag);
      stage.addEventListener("pointercancel", endDrag);

      // Gentle pointer eye/head tracking
      const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
      const lookTarget = new THREE.Object3D();
      lookTarget.position.set(0, 1.24, 2.0);
      scene.add(lookTarget);
      if (vrm.lookAt) {
        vrm.lookAt.target = lookTarget;
      }

      window.addEventListener(
        "pointermove",
        (event) => {
          const nx = (event.clientX / window.innerWidth) * 2 - 1;
          const ny = -((event.clientY / window.innerHeight) * 2 - 1);
          pointer.targetX = Math.max(-0.42, Math.min(0.42, nx * 0.42));
          pointer.targetY = Math.max(-0.2, Math.min(0.2, ny * 0.2));
        },
        { passive: true },
      );

      // Natural blinking
      let blinkTimer = 2.8 + Math.random() * 2;
      let blinkProgress = -1;
      let elapsed = 0;

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
        elapsed += delta;
        skyUniforms.uTime.value = elapsed;

        // Smooth sky & lighting transition (~0.7s)
        const lerpAlpha = 1 - Math.exp(-delta * 5.2);
        skyUniforms.uTopColor.value.lerp(targetSkyColors.top, lerpAlpha);
        skyUniforms.uMidColor.value.lerp(targetSkyColors.mid, lerpAlpha);
        skyUniforms.uHorizonColor.value.lerp(
          targetSkyColors.horizon,
          lerpAlpha,
        );
        skyUniforms.uGlowColor.value.lerp(targetSkyColors.glow, lerpAlpha);
        skyUniforms.uGlowDir.value.lerp(targetSkyColors.glowDir, lerpAlpha);
        skyUniforms.uStarStrength.value +=
          (targetPreset.starStrength - skyUniforms.uStarStrength.value) *
          lerpAlpha;

        ambient.color.lerp(targetSkyColors.ambient, lerpAlpha);
        ambient.intensity +=
          (targetPreset.ambientIntensity - ambient.intensity) * lerpAlpha;
        key.color.lerp(targetSkyColors.key, lerpAlpha);
        key.intensity +=
          (targetPreset.keyIntensity - key.intensity) * lerpAlpha;
        key.position.lerp(targetSkyColors.keyPos, lerpAlpha);
        rim.color.lerp(targetSkyColors.rim, lerpAlpha);
        rim.intensity +=
          (targetPreset.rimIntensity - rim.intensity) * lerpAlpha;
        moteMaterial.color.lerp(targetSkyColors.mote, lerpAlpha);
        moteMaterial.opacity +=
          (targetPreset.moteOpacity - moteMaterial.opacity) * lerpAlpha;

        // Animate drifting 3D komorebi motes
        const posAttr = moteGeom.getAttribute("position");
        for (let i = 0; i < moteCount; i += 1) {
          const phase = moteSeeds[i * 3];
          const speed = moteSeeds[i * 3 + 1];
          const sway = moteSeeds[i * 3 + 2];
          let y = posAttr.getY(i) + speed * delta;
          if (y > 2.05) y = 0.65;
          posAttr.setY(i, y);
          posAttr.setX(
            i,
            posAttr.getX(i) + Math.sin(elapsed * sway + phase) * 0.0005,
          );
        }
        posAttr.needsUpdate = true;

        // Smooth camera orbit damping
        const camAlpha = 1 - Math.exp(-delta * 9.0);
        azimuth += (targetAzimuth - azimuth) * camAlpha;
        pitch += (targetPitch - pitch) * camAlpha;
        updateCameraTransform();

        mixer.update(delta);

        pointer.x += (pointer.targetX - pointer.x) * Math.min(1, delta * 5);
        pointer.y += (pointer.targetY - pointer.y) * Math.min(1, delta * 5);
        lookTarget.position.set(
          Math.sin(azimuth) * 1.4 + pointer.x * 0.55,
          1.24 + pointer.y * 0.35,
          Math.cos(azimuth) * 1.4 + 0.6,
        );

        // Strictly closed-mouth expression discipline
        if (vrm.expressionManager) {
          vrm.expressionManager.setValue("happy", 0);
          vrm.expressionManager.setValue("aa", 0);
          vrm.expressionManager.setValue("ih", 0);
          vrm.expressionManager.setValue("ee", 0);

          if (currentMotionName === "speaking") {
            const cadence = Math.sin(elapsed * 2.1);
            const envelope = cadence > -0.15 ? (cadence + 0.15) / 1.15 : 0;
            const ohVal =
              envelope * (0.5 + 0.5 * Math.sin(elapsed * 9.5)) * 0.085;
            const ouVal =
              envelope * (0.5 + 0.5 * Math.cos(elapsed * 7.2 + 1.1)) * 0.075;
            vrm.expressionManager.setValue("oh", ohVal);
            vrm.expressionManager.setValue("ou", ouVal);
          } else {
            vrm.expressionManager.setValue("oh", 0);
            vrm.expressionManager.setValue("ou", 0);
          }

          if (tappedWarmth > 0) {
            tappedWarmth = Math.max(0, tappedWarmth - delta * 0.55);
            const curve = Math.sin(tappedWarmth * Math.PI);
            vrm.expressionManager.setValue("relaxed", curve * 0.22);
          } else {
            vrm.expressionManager.setValue("relaxed", 0);
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

      controller = { play, setSky };
      rafId = requestAnimationFrame(tick);

      // Preload remaining full-body ARDY motions quietly in background
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
