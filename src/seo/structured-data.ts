// schema.org data for each page, which search engines and AI assistants read beside the
// page. Every value comes from the page's own copy or the facts in ../i18n/routes.ts.
import type { SiteCopy } from "../i18n";
import {
  communityLinks,
  localizedRoutes,
  publisher,
  siteLocales,
  storeListings,
} from "../i18n/routes";
import { translations } from "../i18n";

export type PageKind = "home" | "privacy" | "support";
type JsonLd = Record<string, unknown>;

export function structuredData(copy: SiteCopy, kind: PageKind, site: URL): JsonLd {
  const home = new URL(localizedRoutes[copy.locale].home, site);
  const websiteId = new URL("/#website", site).href;
  const appId = new URL("/#app", site).href;
  const organization = {
    "@type": "Organization",
    "@id": publisher.id,
    name: publisher.name,
    legalName: publisher.legalName,
    url: publisher.url,
    email: copy.support.contactEmail,
  };

  if (kind === "home") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": websiteId,
          name: copy.brandLabel,
          url: home.href,
          description: copy.meta.description,
          inLanguage: copy.htmlLang,
          publisher: { "@id": publisher.id },
          about: { "@id": appId },
        },
        {
          "@type": "MobileApplication",
          "@id": appId,
          name: copy.brandLabel,
          url: home.href,
          description: copy.hero.lede,
          image: new URL("/brand/kokage-app-icon.png", site).href,
          applicationCategory: "EntertainmentApplication",
          operatingSystem: "iOS, iPadOS, Android",
          availableLanguage: siteLocales.map((l) => translations[l].htmlLang),
          featureList: copy.features.items.map((item) => item.title),
          isAccessibleForFree: true,
          installUrl: [storeListings.appStore, storeListings.googlePlay],
          sameAs: [
            storeListings.appStore,
            storeListings.googlePlay,
            communityLinks.x.href,
            communityLinks.discord.href,
          ],
          publisher: { "@id": publisher.id },
        },
        organization,
      ],
    };
  }

  const page = kind === "privacy" ? copy.privacyPolicy : copy.support;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.meta.title,
    url: new URL(localizedRoutes[copy.locale][kind], site).href,
    description: page.meta.description,
    inLanguage: copy.htmlLang,
    isPartOf: {
      "@type": "WebSite",
      name: copy.brandLabel,
      url: home.href,
      "@id": websiteId,
    },
    about: { "@id": appId },
    ...(kind === "privacy" ? { dateModified: copy.privacyPolicy.updatedDate } : {}),
    publisher: organization,
  };
}

// The element's text: no `<` is left in it, so nothing in the data can end the element.
export function jsonLdText(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
