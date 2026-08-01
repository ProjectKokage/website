import { isIP } from "node:net";

export const DEVELOPMENT_SITE_ORIGIN = "http://localhost:4321";
export const TEST_SITE_ORIGIN = "https://kokage.invalid";

export function resolveSiteOrigin({
  value,
  command,
  allowTestOrigin = false,
}) {
  const configuredSite = value?.trim();

  if (!configuredSite) {
    if (command === "build") {
      throw new Error(
        "KOKAGE_SITE_URL is required for a production build. Set it to the approved site origin.",
      );
    }

    return DEVELOPMENT_SITE_ORIGIN;
  }

  let url;

  try {
    url = new URL(configuredSite);
  } catch {
    throw new Error("KOKAGE_SITE_URL must be an absolute URL.");
  }

  if (
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "KOKAGE_SITE_URL must contain only the site origin, without credentials, a path, query, or fragment.",
    );
  }

  if (command === "build") {
    if (url.protocol !== "https:") {
      throw new Error("KOKAGE_SITE_URL must use HTTPS for a production build.");
    }

    const isAllowedTestOrigin =
      allowTestOrigin && url.origin === TEST_SITE_ORIGIN;
    if (!isAllowedTestOrigin && isNonPublicHostname(url.hostname)) {
      throw new Error(
        "KOKAGE_SITE_URL must use a public hostname for a production build.",
      );
    }
  } else {
    const isLoopback = isLoopbackHostname(url.hostname);
    if (url.protocol !== "https:" && !(url.protocol === "http:" && isLoopback)) {
      throw new Error(
        "KOKAGE_SITE_URL must use HTTPS unless it points to a local loopback address.",
      );
    }
  }

  return url.origin;
}

function isLoopbackHostname(hostname) {
  const host = hostname.replace(/^\[|\]$/g, "").toLowerCase();
  return host === "localhost" || host === "127.0.0.1" || host === "::1";
}

function isNonPublicHostname(hostname) {
  const host = hostname.replace(/^\[|\]$/g, "").toLowerCase();

  if (isIP(host) !== 0 || host === "localhost" || !host.includes(".")) {
    return true;
  }

  if (
    ["example.com", "example.net", "example.org"].some(
      (domain) => host === domain || host.endsWith(`.${domain}`),
    )
  ) {
    return true;
  }

  return [
    ".invalid",
    ".test",
    ".example",
    ".localhost",
    ".local",
    ".home.arpa",
  ].some((suffix) => host === suffix.slice(1) || host.endsWith(suffix));
}
