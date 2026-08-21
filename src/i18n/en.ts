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
      "Kokage is an AI companion app that pairs an on-device language model with a bundled or user-selected 3D companion.",
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
    lede: "Kokage pairs an on-device language model with a 3D AI companion. AvatarSample_A is included, and you can use one Custom VRM. Choose Japanese or English chat, the adaptive built-in catalog or a checked public Hugging Face model, Standard or experimental Extended context, experimental thinking controls, and any listed Japanese speech-output voice. On mobile, a vision-capable model can receive one camera still.",
    primaryAction: "Explore the features",
    secondaryAction: "View development status",
    notice: "Kokage is under active development.",
    imageAlt: "Kokage app icon, a mint speech bubble with two leaves",
  },
  flow: {
    eyebrow: "A conversation in Kokage",
    title: "From your message to your companion’s reply",
    lede: "Each turn moves from your message to an on-device reply, optional speech, and companion animation.",
    stages: [
      {
        label: "Input",
        title: "Type a message",
        detail: "Type a message and, on supported mobile setups, attach one camera still.",
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
          "During playback, Kokage syncs your companion’s mouth to the audio it actually plays. Expressions and motions can respond to the reply, and between turns your companion keeps up a gentle idle motion.",
      },
    ],
    footnote:
      "If the camera or 3D rendering is unavailable, you can continue the conversation by typing.",
  },
  features: {
    eyebrow: "What Kokage does",
    title: "On-device companion chat with an included 3D companion, Japanese speech, and memory",
    lede: "Kokage connects local text generation with a bundled VRM companion, optional Japanese speech, local memory, and knowledge you add.",
    items: [
      {
        title: "Replies generated on your device",
        body: "After setup, the selected language model generates replies on your device. If generation fails, Kokage keeps your message so you can try again.",
      },
      {
        title: "A companion included, or bring your own VRM",
        body: "Fresh setup starts with the bundled AvatarSample_A. Custom VRM can replace it with one self-contained VRM 0.x or 1.0 file up to 128 MiB, from a local file or HTTPS URL, that you have permission to use.",
      },
      {
        title: "Shape how your companion replies",
        body: "Set chat to Japanese or English, then adjust your companion’s role, tone, reply length, initiative, and expressiveness. The interface locale remains a separate setting.",
      },
      {
        title: "Hear replies, speak, or attach one image",
        body: "Any listed Japanese speech-output voice can read replies aloud. Voice input accepts one bounded Japanese or English turn and processes it on the device. On mobile, a model with a compatible image projector can receive one camera still with a message.",
      },
      {
        title: "Memory you can inspect and control",
        body: "Memory stays on your device. When enabled, retained entries can be recalled for replies, and the Memory screen lets you inspect, edit, delete, clear, or disable them. Automatic capture from incidental typed turns is unavailable in this release.",
      },
      {
        title: "Add text for Kokage to reference",
        body: "Paste text you want Kokage to search while composing future replies. Chat, images, and model output are never added to this local knowledge automatically.",
      },
    ],
  },
  privacy: {
    eyebrow: "App data and privacy",
    title: "Conversation processing stays on your device",
    lede: "Replies are generated on your device. Kokage does not use remote inference, analytics, or telemetry. A release-configured report that you confirm may send only a schema version, a random report ID, one closed reason, one selected displayed reply, an optional bounded note, the catalog model/template ID, and the app version through Formspark.",
    items: [
      {
        title: "Conversation",
        body: "Kokage holds messages and prompts only while the conversation is active. It does not save conversation content to logs or persistent history.",
      },
      {
        title: "Camera",
        body: "Kokage keeps one camera image only for the current message or a failed message awaiting retry. It is not logged or added to completed chat history. Voice input processes bounded microphone audio and recognition results on the device without retaining, logging, or uploading them.",
      },
      {
        title: "Memory",
        body: "Retained memory stays on the device and can be recalled while memory is enabled. The Memory screen lets you inspect, edit, delete, clear, or disable it. Automatic incidental capture is unavailable in this release.",
      },
      {
        title: "Local knowledge",
        body: "Only text you explicitly add, plus its local search index, is saved. Conversation content, audio, images, files, tool results, and model output stay outside that index.",
      },
      {
        title: "Models and VRMs",
        body: "Downloaded model data, selected speech data, and an imported VRM stay in app-private storage. AvatarSample_A needs no network access, and Kokage does not retain an imported VRM’s original path, URL, or filename.",
      },
    ],
    networkLabel: "When Kokage uses the network",
    networkBody:
      "Network access covers provisioning that you direct and, only in a release with an approved Formspark form, an offensive-output report that you confirm in the app. Reporting remains unavailable until the form, provider approval, retention and deletion procedure, public disclosure, and signed-release checks are complete.",
    policyLink: "Read the full privacy policy",
  },
  privacyPolicy: {
    meta: {
      title: "Privacy Policy | Kokage",
      description:
        "How Kokage handles conversations, on-device voice input, reports, camera input, local data, model downloads, and website data.",
    },
    eyebrow: "Kokage privacy policy",
    title: "Kokage processes conversations on your device.",
    lede: "This policy explains what the app keeps, when it connects to other services, and how you can remove local data.",
    updatedLabel: "Last updated",
    updatedDate: "2026-08-21",
    updatedDateDisplay: "August 21, 2026",
    highlightsLabel: "Policy summary",
    highlights: [
      "No Kokage account or developer-operated inference server",
      "No analytics, advertising, telemetry, or tracking in the app",
      "Prompts, conversation history, microphone audio, camera images, and saved memory stay on your device",
      "A release-configured report you confirm may send one selected displayed reply through Formspark",
    ],
    contentsLabel: "On this page",
    sections: [
      {
        id: "scope",
        title: "Scope",
        paragraphs: [
          "This policy describes data handling in the Kokage app and the Kokage project website as of August 21, 2026.",
          "Websites and download services that Kokage contacts at your direction apply their own privacy policies.",
          "Kokage is a local-first app with no Kokage account system or developer-operated inference service.",
          "Fresh setup offers Japanese and English chat profiles, the adaptive built-in catalog, a checked public Hugging Face model, Standard and experimental Extended context, experimental thinking controls, every listed speech-output voice, bounded on-device voice input, AvatarSample_A, and Custom VRM. Release evidence remains open for several paths.",
        ],
      },
      {
        id: "collection",
        title: "Data not sent during ordinary use",
        paragraphs: [
          "The Kokage developer does not receive your prompts, conversation history, microphone audio or recognition results, camera images, local knowledge, memories, profiles, generated speech, or imported VRM files during ordinary use.",
          "A report that you confirm is the sole generated-content exception. Kokage can send its schema version, a random report ID, one selected displayed reply, a closed reason, an optional bounded note, the catalog model/template ID, and the app version only after the release includes an approved Formspark form.",
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
            title: "No inference, analytics, or advertising recipients",
            body: "Kokage does not send prompts, conversation history, or media to analytics tools, advertising networks, third-party inference services, or related companies. Provisioning hosts receive the connection metadata described below, and an approved Formspark report receives only its disclosed payload.",
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
            title: "Conversation, camera, and speech",
            body: "Messages and prompts remain in the active conversation without a persistent chat log; one camera image may remain for the current or failed turn; and generated speech is not persisted.",
          },
          {
            title: "Voice input",
            body: "Voice input uses record for bounded microphone capture and sherpa_onnx for Silero VAD, SenseVoice recognition, and optional diarization. It recognizes the selected Japanese or English chat language, suppresses Kokage's own playback, and does not retain, log, upload, or send microphone audio or recognition results to a remote service. Platform validation remains part of the release evidence matrix.",
          },
          {
            title: "Local knowledge",
            body: "Kokage stores text you add, its title, an optional source URL, its creation time, and a derived search index; it does not add chat, camera, file, tool, or model content to that index on its own.",
          },
          {
            title: "Models, VRMs, profile, and setup",
            body: "Verified model files, bounded partial transfers, a selected speech-output voice, an installed Custom VRM, your typed profile, settings, and setup metadata stay in app-private storage; AvatarSample_A is a read-only packaged asset. A custom public-model selection also stores its canonical repository, full commit, selected filenames, sizes, and digests for repair.",
          },
          {
            title: "Device capacity",
            body: "During fresh setup, Kokage reads the total physical memory reported by the operating system to recommend a model size. It does not persist or transmit that value.",
          },
          {
            title: "Memory",
            body: "Memory is a separate, local-only store. When memory is enabled, retained entries can be recalled for local replies; the Memory screen lets you inspect, edit, delete, clear, disable, and re-enable them. Disabling memory stops recall without erasing retained entries. Automatic incidental capture from typed turns is unavailable in this release.",
          },
          {
            title: "Automatic first-conversation guidance",
            body: "After a successfully initialized local model passes Kokage's first-question preflight, Kokage may show a bounded fallback question written into the app in the selected chat language. An unqualified model does not generate that question. Kokage persists at most 256 encoded bytes of progress for the companion introduction and app walkthrough: each state is eligible, completed, or dismissed. The progress marker contains no user or model text, tool data, memory value, identity, timestamp, counter, capability snapshot, or telemetry.",
          },
        ],
      },
      {
        id: "network",
        title: "Network connections and third-party services",
        paragraphs: [
          "Kokage uses the network for provisioning that you direct and, in a release configured with an approved form, a report that you confirm. Conversation generation stays on your device.",
          "A provider can receive standard connection data such as your IP address, request time, requested URL, and HTTP headers. Formspark may infer location from an IP address.",
          "Each provider controls its logs and retention under its policy. Reporting will remain unavailable until Kokage publishes an approved Formspark and developer-mailbox retention and deletion procedure.",
        ],
        items: [
          {
            title: "Protection by providers",
            body: "GitHub, Hugging Face, their redirect hosts, and a user-selected Custom VRM HTTPS host apply their policies to request metadata. In a release that enables reporting, Formspark processes the submitted report for the Kokage developer and the developer's mailbox provider stores the emailed or forwarded copy. Kokage will not enable that path until its provider and release reviews pass.",
          },
          {
            title: "Optional offensive-output report",
            body: "After you preview and confirm a report in the app, Kokage makes one HTTPS request to Formspark. It sends only the report schema version (schema_version), a random report ID (report_id), one closed reason, the exact selected displayed generated reply, an optional note, the catalog model/template ID (model_template_id), and the app version. It does not add your prompt, other turns, history, citations, retrieved passages, local knowledge, memory, profile, audio, images, any other device, account, or model identifier, diagnostics, a timestamp, or arbitrary metadata as separate fields. The selected reply may itself repeat information from one of those inputs; the preview lets you cancel before sending it. The reply is limited to 16,384 Unicode scalar values and 64 KiB; the note is limited to 1,000 scalar values and 4 KiB. Kokage does not persist, queue, log, send in the background, or automatically retry the report. Formspark stores an accepted submission and sends or forwards a copy to the developer mailbox.",
            link: {
              href: "https://formspark.io/legal/privacy-policy/",
              label: "Formspark privacy policy",
            },
          },
          {
            title: "Public model information and files",
            body: "A Hugging Face Check requests public repository metadata, and a confirmed install downloads selected model and voice files from Hugging Face plus its redirect or delivery hosts. Kokage supports no private repository token and does not retain a temporary signed delivery URL.",
            link: {
              href: "https://huggingface.co/privacy",
              label: "Hugging Face privacy policy",
            },
          },
          {
            title: "Voice and dictionary files from GitHub",
            body: "A confirmed setup can also download voice and dictionary artifacts from GitHub-hosted release endpoints and their redirect destinations, which receive the same standard connection data as other download hosts.",
            link: {
              href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
              label: "GitHub privacy statement",
            },
          },
          {
            title: "VRM files from HTTPS",
            body: "AvatarSample_A needs no download. A confirmed Custom VRM import contacts the HTTPS host you select and any redirect destination; importing a local file makes no host request.",
          },
          {
            title: "Confirmed transfer resume and background continuation",
            body: "Kokage may keep one bounded, checksum-keyed partial model transfer across launches and resume the same confirmed request. After you confirm a download, iOS, Android, or macOS may continue that transfer through the operating system's background-transfer service when the system reports support, and the system may hold the request URL, expected length, destination, and progress until completion or cancellation. A new installation or download action still needs your confirmation.",
          },
        ],
      },
      {
        id: "retention",
        title: "Retention and deletion",
        paragraphs: [
          "The Kokage developer has no server-side copy of your ordinary app data. A submitted report is the exception: Formspark and the developer mailbox may each retain a copy.",
          "Local knowledge, profiles, settings, saved memories, installed artifacts, and setup metadata can persist across launches because Kokage applies no time-based expiration to them.",
        ],
        items: [
          {
            title: "Short-lived turn data",
            body: "Kokage removes the temporary native camera file after reading it and retires in-memory camera and conversation data when its turn or conversation no longer owns that data.",
          },
          {
            title: "Local knowledge",
            body: "The Local Knowledge screen lets you delete one saved document or clear all saved documents and their search index.",
          },
          {
            title: "Memory",
            body: "The Memory screen lets you inspect, edit, delete one, or clear all retained entries even while memory is disabled; turning memory off stops recall but does not erase retained entries by itself. Automatic incidental capture is unavailable in this release.",
          },
          {
            title: "Downloads and remaining app files",
            body: "Canceling an incomplete model download removes its partial transfer; to ask the operating system to remove the remaining app-private files, use its app-removal controls, with final removal and device backups controlled by the operating system.",
          },
          {
            title: "Submitted reports",
            body: "The app keeps no report after its request settles, but clearing app data or uninstalling cannot delete the Formspark or mailbox copies. Reporting remains unavailable until Kokage publishes a maximum retention period, deletion steps for both copies, and the providers' backup behavior. After reporting is enabled, you can request deletion by emailing contact@orcalogy.com with the report ID shown by the app. Kokage will not promise a response time or backup erasure until the approved procedure supports it.",
          },
        ],
      },
      {
        id: "permissions",
        title: "Permissions and local protection",
        paragraphs: [
          "Kokage asks for camera access when you attach one still to a message. You can deny or revoke that permission in system settings and continue with typed chat.",
          "Kokage asks for microphone access before voice capture. If you deny or revoke access, typed chat remains available and the app offers retry or system-settings guidance where the platform supports it.",
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
          "Kokage will update this page with the approved retention and deletion schedule before a release enables content reporting. A version that adds network inference, analytics, telemetry, another upload, or new persistence must update its user-facing privacy information and request consent where law or platform rules require it.",
        ],
      },
    ],
    backHomeLabel: "Back to Kokage",
  },
  support: {
    meta: {
      title: "Support | Kokage",
      description:
        "Kokage troubleshooting, local-data guidance, and a privacy-conscious way to ask questions and contact the project.",
    },
    eyebrow: "Kokage support",
    title: "Support for Kokage",
    lede: "Ask a question, report a problem, and find troubleshooting steps for Kokage.",
    highlightsLabel: "Support summary",
    highlights: [
      "Initial setup downloads the selected model data before the first conversation",
      "Typed chat remains the fallback when an optional device feature fails",
      "Private conversation or media content should never be sent by email",
      "Local app data cannot be viewed or restored by project support",
    ],
    contentsLabel: "On this page",
    sections: [
      {
        id: "availability",
        title: "Availability",
        paragraphs: [
          "Kokage releases are distributed through each platform's app store. This site does not provide a direct app download.",
          "Platform notes on the home page describe development evidence only. They are not release, compatibility, or distribution promises.",
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        paragraphs: [
          "Kokage needs compatible local model and speech data before the related features can run. Keep enough free storage for the selected files and use the in-app controls to retry or cancel an interrupted transfer.",
        ],
        items: [
          {
            title: "A local model does not start",
            body: "Use the exact error category shown by the app, confirm that setup completed, and retry from the app. Do not email a model file, private repository token, prompt, or native stack trace that contains a private path.",
          },
          {
            title: "Camera, voice, or 3D presentation fails",
            body: "Continue with typed chat where it remains available. Retry voice input or review microphone access in system settings; do not send a recording or transcript for support. A camera, playback, or presentation failure should not require sharing the captured image, generated reply, or imported VRM.",
          },
        ],
      },
      {
        id: "permissions",
        title: "Camera and microphone permissions",
        paragraphs: [
          "Kokage asks for camera access when you attach one still and microphone access before voice capture. You can deny or revoke either permission in system settings and continue by typing.",
          "If a permission prompt does not appear, review Kokage's permission state in the operating system before reinstalling or clearing app data.",
        ],
      },
      {
        id: "local-data",
        title: "Local data and privacy",
        paragraphs: [
          "Conversation processing and the app's memory, knowledge, profile, model, and VRM data stay on the device under the behavior described in the privacy policy. Project support cannot remotely inspect, recover, export, or erase that local data.",
          "Use the in-app Memory and Local Knowledge controls for those stores. Use the operating system's app-removal controls to request removal of remaining app-private data; final removal and device backups are controlled by the operating system.",
        ],
      },
      {
        id: "contact",
        title: "Contact the project",
        paragraphs: [
          "For a question or problem with Kokage, email contact@orcalogy.com with the platform, app version or source revision, the visible error category, and short steps that reproduce the issue.",
          "Email is handled outside Kokage by the sender's and recipient's email providers. Do not include prompts, replies, memory values, recordings, photos, model or VRM files, credentials, or other confidential content. No response time is promised.",
          "The optional in-app offensive-output report remains unavailable unless an approved release explicitly enables it. Email is not a substitute for that bounded report flow and should not include generated conversation content.",
        ],
      },
    ],
    contactLabel: "Email Kokage project support",
    contactEmail: "contact@orcalogy.com",
    privacyLinkLabel: "Read the privacy policy",
    backHomeLabel: "Back to Kokage",
  },
  stack: {
    eyebrow: "Technology",
    title: "The local runtimes behind Kokage",
    lede: "Kokage uses separate libraries for language generation, speech, and VRM rendering.",
    items: [
      {
        title: "Language model and embeddings",
        body: "Kokage runs llama.cpp through fllamer, both for replies and for the embeddings behind memory and knowledge search.",
      },
      {
        title: "On-device voice input",
        body: "Kokage uses record for bounded microphone capture and sherpa_onnx for Silero VAD, SenseVoice ASR, and optional diarization. The recognizer handles Japanese or English input on the device and excludes Kokage's own playback.",
      },
      {
        title: "Japanese speech",
        body: "Open JTalk prepares the reading through misakid, and Kokoro generates the audio through fonix.",
      },
      {
        title: "VRM presentation",
        body: "Flutter Scene renders the companion, and flvtterm handles its presentation.",
      },
    ],
  },
  status: {
    eyebrow: "Development status",
    title: "Current platform coverage",
    lede: "Kokage is under active development, and validated coverage still differs by platform.",
    platforms: [
      {
        name: "macOS",
        state: "Primary development environment",
        detail:
          "After the required data is installed, local chat, memory management and recall, knowledge search, Japanese speech, and VRM presentation run on macOS. Voice-input qualification remains in progress.",
      },
      {
        name: "iOS",
        state: "App Store release in preparation",
        detail:
          "The iPhone and iPad product scope includes bounded Japanese and English voice input through the record, Silero VAD, and SenseVoice pipeline. Physical permission, recognition, lifecycle, and signed-release validation of the full exposed feature set is still in progress.",
      },
      {
        name: "Android",
        state: "Emulator-validated",
        detail:
          "Local inference and speech tests pass on Android emulators. Physical-device coverage is still in progress.",
      },
      {
        name: "Linux",
        state: "Configured in source",
        detail:
          "Native x64 and arm64 code paths, including Japanese speech, are configured but have not been validated on their target systems.",
      },
      {
        name: "Windows",
        state: "Configured in source",
        detail:
          "A native x64 code path, including Japanese speech, is configured but has not been validated on its target system.",
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
    supportLink: "Support",
    navigationLabel: "Footer navigation",
  },
} satisfies SiteCopy;
