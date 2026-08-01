import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { resolveSiteOrigin } from "./scripts/site-origin.mjs";

const site = resolveSiteOrigin({
  value: process.env.KOKAGE_SITE_URL,
  command: process.argv.includes("build") ? "build" : "development",
  allowTestOrigin: process.env.KOKAGE_ALLOW_TEST_SITE_ORIGIN === "1",
});

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "always",
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          ja: "ja",
        },
      },
    }),
  ],
});
