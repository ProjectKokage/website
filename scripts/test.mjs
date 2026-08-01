import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { TEST_SITE_ORIGIN } from "./site-origin.mjs";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const env = {
  ...process.env,
  KOKAGE_SITE_URL:
    process.env.KOKAGE_SITE_URL ?? TEST_SITE_ORIGIN,
  KOKAGE_ALLOW_TEST_SITE_ORIGIN: "1",
};

for (const script of ["build", "test:static"]) {
  const result = spawnSync(npmCommand, ["run", script], {
    cwd: projectRoot,
    env,
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
