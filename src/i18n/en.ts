import type { SiteCopy } from "./types";

export const en = {
  locale: "en",
  htmlLang: "en",
  ogLocale: "en_US",
  alternateOgLocale: "ja_JP",
  brandLabel: "Kokage",
  meta: {
    title: "Kokage | Local-first companion chat",
    description:
      "Kokage is an experimental AI companion app that combines an on-device language model with a VRM avatar you choose.",
  },
  skipLink: "Skip to content",
  navigation: {
    label: "Main navigation",
    homeLabel: "home",
    items: [
      { href: "#features", label: "Features" },
      { href: "#how", label: "How it works" },
      { href: "#privacy", label: "Data" },
    ],
    languageLabel: "Language",
  },
  hero: {
    eyebrow: "Local-first companion chat",
    titleLead: "Talk with your companion",
    titleAccentLines: ["on your own device."],
    lede: "Kokage brings an on-device language model together with a VRM avatar you choose. Add the optional voice features to speak and hear replies in Japanese. On mobile, when the selected model supports image input, you can attach one camera still to a message.",
    primaryAction: "Explore the features",
    secondaryAction: "View development status",
    notice: "Kokage is an experimental prototype.",
    imageAlt: "Kokage app icon, a mint speech bubble with two leaves",
  },
  flow: {
    eyebrow: "A conversation in Kokage",
    title: "From your message to your companion’s reply",
    lede: "Each turn moves from your message to an on-device reply, optional speech, and companion animation.",
    stages: [
      {
        label: "Input",
        title: "Type or speak",
        detail: "Type a message or use the microphone.",
      },
      {
        label: "Reply",
        title: "Generate on the device",
        detail:
          "The language model selected during setup generates a reply on your device.",
      },
      {
        label: "Speech",
        title: "Hear the reply in Japanese",
        detail:
          "When speech is set up, Kokage can read the reply aloud in Japanese.",
      },
      {
        label: "Companion",
        title: "Animate your companion",
        detail:
          "During playback, Kokage can sync your companion’s mouth to the audio. When available, expressions and motions can also respond to the reply.",
      },
    ],
    footnote:
      "If voice input, the camera, or 3D rendering is unavailable, you can continue the conversation by typing.",
  },
  features: {
    eyebrow: "What Kokage does",
    title: "On-device companion chat with optional voice and a VRM avatar",
    lede: "Kokage connects local text generation with optional Japanese speech and a VRM avatar you provide.",
    items: [
      {
        title: "Replies generated on your device",
        body: "After setup, the selected language model generates replies on your device. If generation fails, Kokage keeps your message so you can try again.",
      },
      {
        title: "A VRM avatar you choose",
        body: "Kokage can import a self-contained VRM 0.x or 1.0 file up to 128 MiB. It does not include a VRM, so choose a file you have permission to use.",
      },
      {
        title: "Speak or attach one image",
        body: "After you set up voice input, Kokage converts microphone speech to text on your device. On mobile, a model that supports image input can receive one camera still with a message.",
      },
      {
        title: "Add text for Kokage to reference",
        body: "Paste text you want Kokage to search while composing future replies. Chat, microphone audio, images, and model output are never added to this local knowledge automatically.",
      },
    ],
  },
  privacy: {
    eyebrow: "App data and privacy",
    title: "Conversation processing stays on your device",
    lede: "Replies are generated on your device. Kokage does not use remote inference, analytics, or telemetry, and it does not send conversation content to a server.",
    items: [
      {
        title: "Conversation",
        body: "Kokage holds messages and prompts only while the conversation is active. It does not save conversation content to logs or persistent history.",
      },
      {
        title: "Microphone and camera",
        body: "Kokage keeps microphone audio only while recognizing speech. It keeps one camera image only for the current message or a failed message awaiting retry. Neither is logged or added to completed chat history.",
      },
      {
        title: "Local knowledge",
        body: "Only text you explicitly add, plus its local search index, is saved. Conversation content, audio, images, files, tool results, and model output stay outside that index.",
      },
      {
        title: "Models and imported VRMs",
        body: "Downloaded model data and an imported VRM stay in app-private storage. Kokage does not retain the VRM’s original path, URL, or filename after import.",
      },
    ],
    networkLabel: "When Kokage uses the network",
    networkBody:
      "Network access is limited to provisioning that you direct: downloading model data, importing a VRM from an HTTPS URL, or checking public Hugging Face model information. You confirm each new installation or download action before it begins, and a confirmed partial model transfer may resume across launches.",
    policyLink: "Read the full privacy policy",
  },
  privacyPolicy: {
    meta: {
      title: "Privacy Policy | Kokage",
      description:
        "How Kokage handles conversations, microphone and camera input, local data, model downloads, and website data.",
    },
    eyebrow: "Kokage privacy policy",
    title: "Kokage processes conversations on your device.",
    lede: "This policy explains what the app keeps, when it connects to other services, and how you can remove local data.",
    updatedLabel: "Last updated",
    updatedDate: "2026-08-03",
    updatedDateDisplay: "August 3, 2026",
    highlightsLabel: "Policy summary",
    highlights: [
      "No Kokage account or developer-operated inference server",
      "No analytics, advertising, telemetry, or tracking in the app",
      "Conversation, microphone, and camera content stays on your device",
      "In the app, network access is limited to setup and downloads that you direct",
    ],
    contentsLabel: "On this page",
    sections: [
      {
        id: "scope",
        title: "Scope",
        paragraphs: [
          "This policy describes data handling in the Kokage app and the Kokage project website as of August 3, 2026.",
          "Websites and download services that Kokage contacts at your direction apply their own privacy policies.",
          "Kokage is an experimental local-first app with no Kokage account system or developer-operated inference service.",
        ],
      },
      {
        id: "collection",
        title: "Data the Kokage developer does not collect",
        paragraphs: [
          "The Kokage developer does not receive your conversations, prompts, microphone audio, transcripts, camera images, local knowledge, memories, profiles, model output, generated speech, or imported VRM files.",
        ],
        items: [
          {
            title: "No account or developer cloud",
            body: "The app has no Kokage login, cloud conversation history, remote inference endpoint, or developer database of app content.",
          },
          {
            title: "No analytics or advertising",
            body: "The app contains no analytics, telemetry, advertising, or tracking service, and the Kokage developer does not sell or rent app data.",
          },
          {
            title: "No app-content recipients",
            body: "Kokage does not send conversation or media content to analytics tools, advertising networks, third-party inference services, or related companies; provisioning hosts still receive the connection metadata described below.",
          },
          {
            title: "Content-free diagnostics",
            body: "Local diagnostics may contain error categories, redacted artifact identities, turn IDs, durations, counters, and queue sizes, but they exclude raw private content and are not sent to the developer by the app.",
          },
        ],
      },
      {
        id: "local-data",
        title: "Data handled on your device",
        paragraphs: [
          "Kokage keeps the following data for app functions on the device where you use it.",
        ],
        items: [
          {
            title: "Conversation, microphone, camera, and speech",
            body: "Messages and prompts remain in the active conversation without a persistent chat log; microphone PCM lasts through recognition and its transcript joins that active conversation; one camera image may remain for the current or failed turn; and generated speech is not persisted.",
          },
          {
            title: "Local knowledge",
            body: "Kokage stores text you add, its title, an optional source URL, its creation time, and a derived search index; it does not add chat, microphone, camera, file, tool, or model content to that index on its own.",
          },
          {
            title: "Models, VRM, profile, and setup",
            body: "Verified model files, bounded partial model transfers, an imported VRM, your typed profile, settings, and setup metadata stay in app-private storage; a custom public-model selection also stores its canonical repository, full commit, selected filenames, sizes, and digests for repair, while Kokage does not retain the imported VRM's original name, path, or URL.",
          },
          {
            title: "Device capacity",
            body: "During fresh setup, Kokage reads the total physical memory reported by the operating system to recommend a model size, without persisting or transmitting that value.",
          },
          {
            title: "Memory, when available",
            body: "If your version offers the memory feature, it starts off. After you opt in, an eligible typed message may produce one temporary save proposal without a save request. Kokage writes nothing until you approve the exact key and value, requires separate approval for each delete, and stores approved entries, timestamps, search data, and the consent-policy setting on your device. Its instruction to propose non-sensitive facts is not a content classifier, so review each proposal before approval.",
          },
        ],
      },
      {
        id: "network",
        title: "Network connections and third-party services",
        paragraphs: [
          "Kokage uses the network for provisioning that you direct, not for conversation generation.",
          "A download host can receive standard connection data such as your IP address, request time, requested URL, and HTTP headers, while Kokage keeps conversation and media content out of those requests.",
          "The host controls its own logs and retention under its privacy policy, so review the policy of any custom host before using it.",
        ],
        items: [
          {
            title: "Protection by providers",
            body: "No outside provider currently processes app content on the Kokage developer's behalf. Before a future provider can receive user data on that basis, it must protect the data to the same or greater standard as this policy. GitHub, Hugging Face, redirects, and a custom HTTPS host are independent download destinations whose policies govern the request metadata they receive.",
          },
          {
            title: "Public model information and files",
            body: "A Hugging Face Check requests public repository metadata, and a confirmed install can contact Hugging Face plus its redirect or delivery hosts; Kokage supports no private repository token and does not retain a temporary signed delivery URL.",
            link: {
              href: "https://huggingface.co/privacy",
              label: "Hugging Face privacy policy",
            },
          },
          {
            title: "VRM files from HTTPS",
            body: "A confirmed VRM import contacts GitHub for the prefilled source or the HTTPS host you select and any redirect destination; importing a local file makes no host request.",
            link: {
              href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
              label: "GitHub privacy statement",
            },
          },
          {
            title: "Confirmed transfer resume",
            body: "Kokage may keep one bounded, checksum-keyed partial model transfer across launches and resume the same confirmed request, while a new installation or download action still needs your confirmation.",
          },
        ],
      },
      {
        id: "retention",
        title: "Retention and deletion",
        paragraphs: [
          "The Kokage developer has no server-side copy of your app data to access, export, correct, or delete for you.",
          "Local knowledge, profiles, settings, approved memories, installed artifacts, and setup metadata can persist across launches because Kokage applies no time-based expiration to them.",
        ],
        items: [
          {
            title: "Short-lived turn data",
            body: "Kokage releases microphone PCM after recognition, removes the temporary native camera file after reading it, and retires in-memory camera and conversation data when its turn or conversation no longer owns that data.",
          },
          {
            title: "Local knowledge",
            body: "The Local Knowledge screen lets you delete one saved document or clear all saved documents and their search index.",
          },
          {
            title: "Memory, when available",
            body: "The Memory screen lets you inspect entries, delete one entry, or clear all entries even while model access is disabled; turning access off does not erase retained entries by itself.",
          },
          {
            title: "Downloads and remaining app files",
            body: "Canceling an incomplete model download removes its partial transfer; to ask the operating system to remove the remaining app-private files, use its app-removal controls, with final removal and device backups controlled by the operating system.",
          },
        ],
      },
      {
        id: "permissions",
        title: "Permissions and local protection",
        paragraphs: [
          "Kokage asks for microphone access when you start local voice input and for camera access when you attach one still to a message.",
          "You can deny or revoke either permission in system settings and continue with typed chat.",
          "Kokage uses app-private storage and operating-system protections, but it does not add application-layer encryption to saved content.",
          "Kokage configures Android app data not to be backed up and marks its iOS app-owned support directory as excluded from backup, while the operating system enforces those settings.",
        ],
      },
      {
        id: "website",
        title: "This website",
        paragraphs: [
          "The Kokage website code creates no account, contact form, analytics, advertising, tracking script, or tracking cookie.",
        ],
        items: [
          {
            title: "Language preference",
            body: "The site reads browser language settings and stores the value en or ja under kokage-language in local browser storage after you choose a language; you can remove it by clearing site data in your browser.",
          },
          {
            title: "Website delivery",
            body: "The server that delivers this public site receives standard request data such as an IP address, requested path, time, and HTTP headers, and its hosting provider may keep operational or security logs under the provider's terms.",
          },
          {
            title: "Google Fonts",
            body: "The site loads Zen Maru Gothic from Google Fonts, which gives Google the standard request data needed to deliver the font under Google's privacy terms.",
            link: {
              href: "https://developers.google.com/fonts/faq/privacy",
              label: "Google Fonts privacy information",
            },
          },
        ],
      },
      {
        id: "changes",
        title: "Changes to this policy",
        paragraphs: [
          "The project will update this page and its last-updated date when Kokage's data practices change.",
          "A version that adds network inference, analytics, telemetry, uploads, content reporting, or new persistence must update its user-facing privacy information and request consent where law or platform rules require it.",
        ],
      },
    ],
    backHomeLabel: "Back to Kokage",
  },
  stack: {
    eyebrow: "Technology",
    title: "The local runtimes behind Kokage",
    lede: "Kokage uses separate libraries for language generation, speech, and VRM rendering.",
    items: [
      {
        title: "Language model",
        body: "Kokage runs llama.cpp through fllamer.",
      },
      {
        title: "Voice input",
        body: "Through sherpa_onnx, Silero VAD detects spoken segments and SenseVoice transcribes them.",
      },
      {
        title: "Japanese speech",
        body: "Open JTalk prepares the reading, and Kokoro generates the audio.",
      },
      {
        title: "VRM presentation",
        body: "Flutter Scene renders the imported VRM, and flvtterm handles its presentation.",
      },
    ],
  },
  status: {
    eyebrow: "Development status",
    title: "Current platform coverage",
    lede: "macOS is the primary development environment. Other targets have code paths, but not the same level of validation.",
    platforms: [
      {
        name: "macOS",
        state: "Primary development environment",
        detail:
          "After the required data is installed, local chat, knowledge search, voice input, Japanese speech, and VRM presentation can run on macOS.",
      },
      {
        name: "Other native targets",
        state: "Validation incomplete",
        detail:
          "iOS has not been validated for inference or on a physical device. Android’s native inference path is unvalidated and may not run. Linux and Windows have not been built or run on their target systems.",
      },
      {
        name: "Web",
        state: "Model-free viewer mode",
        detail: "The web target runs without language-model inference.",
      },
    ],
  },
  footer: {
    descriptor: "Local-first companion chat",
    statusLink: "Development status",
    privacyLink: "Privacy policy",
    navigationLabel: "Footer navigation",
  },
} satisfies SiteCopy;
