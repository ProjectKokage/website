// /llms.txt (https://llmstxt.org): what Kokage is and where the site's pages are, for AI
// assistants. Every line comes from the English copy and the facts in ../i18n/routes.ts,
// so it follows any change to them.
import { translations } from "../i18n";
import {
  communityLinks,
  kokageCloudUrls,
  localeNames,
  localizedRoutes,
  publisher,
  siteLocales,
} from "../i18n/routes";

export function llmsText(site: URL): string {
  const en = translations.en;
  const url = (path: string) => new URL(path, site).href;
  const pages = siteLocales.flatMap((locale) => {
    const copy = translations[locale];
    const routes = localizedRoutes[locale];
    return [
      `### ${localeNames[locale]}`,
      "",
      `- [${copy.meta.title}](${url(routes.home)}): ${copy.meta.description}`,
      `- [${copy.privacyPolicy.meta.title}](${url(routes.privacy)}): ${copy.privacyPolicy.meta.description}`,
      `- [${copy.support.meta.title}](${url(routes.support)}): ${copy.support.meta.description}`,
      "",
    ];
  });

  return [
    `# ${en.brandLabel}`,
    "",
    `> ${en.meta.description}`,
    "",
    `${en.brandLabel} is published by ${publisher.name} (${publisher.url}).`,
    "",
    `## ${en.status.title}`,
    "",
    ...en.status.platforms.map(
      (p) => `- [${p.link.label}](${p.link.href}): ${p.name}.`,
    ),
    "",
    "## Community",
    "",
    `- [${en.footer.xLink}](${communityLinks.x.href}): ${communityLinks.x.handle}`,
    `- [${en.footer.discordLink}](${communityLinks.discord.href})`,
    "",
    `## ${en.features.title}`,
    "",
    ...en.features.items.map((item) => `- ${item.title}: ${item.body}`),
    "",
    `## ${en.cloud.title}`,
    "",
    en.cloud.lede,
    "",
    ...en.cloud.items.map((item) => `- ${item.title}: ${item.body}`),
    `- [${en.cloud.accountLink}](${kokageCloudUrls.en})`,
    "",
    `## ${en.privacy.title}`,
    "",
    ...en.privacy.points.map((point) => `- ${point}`),
    "",
    "## Pages",
    "",
    ...pages,
  ].join("\n");
}
