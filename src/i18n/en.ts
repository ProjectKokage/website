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
        "How Kokage handles on-device and cloud chat, Kokage Cloud motion, voices, speech and avatars, saved conversations, memory, reports, accounts, downloads, and website data.",
    },
    eyebrow: "Kokage privacy policy",
    title: "What Kokage keeps on your device and what its cloud features send",
    lede: "This policy explains what the app saves on your device, what it sends to Kokage Cloud and other services and when, and how you can delete it.",
    updatedLabel: "Last updated",
    updatedDate: "2026-10-02",
    updatedDateDisplay: "October 2, 2026",
    highlightsLabel: "Policy summary",
    highlights: [
      "On-device replies keep their generation context on your device",
      "In a configured build, Kokage Cloud features send the data this policy lists, and the app explains cloud chat before you use it",
      "Microphone recognition runs on your device; conversation audio is not logged or uploaded",
      "Kokage's own source code includes no advertising, analytics or remote crash-reporting feature",
    ],
    contentsLabel: "On this page",
    sections: [
      {
        id: "scope",
        title: "Scope",
        paragraphs: [
          "This policy describes data handling in the Kokage app, Kokage Cloud and the Kokage project website as of October 2, 2026.",
          "The parts of this policy about Kokage Cloud apply to a build configured for Kokage Cloud.",
          "Websites and download services that Kokage contacts at your direction apply their own privacy policies.",
        ],
      },
      {
        id: "chat",
        title: "On-device and cloud chat",
        paragraphs: [
          "Kokage lets you choose on-device replies or, in a configured build, cloud chat. On-device replies keep their generation context on your device.",
          "Before you use cloud chat, the app explains that selected conversation text, character content, history, recap, images and recalled context can reach Kokage Cloud and its AI providers. Automatic guidance, initiative and enabled memory work can also use that service and spend Leaves from your Kokage Cloud balance.",
          "Automatic cloud recap refresh has a separate setting, off by default, and its own disclosure, because reading older exchanges can cost more than a short reply.",
        ],
        items: [
          {
            title: "Voice-emotion reply hint",
            body: "An optional voice-emotion reply hint is enabled by default. When eligible, one coarse normalized label may accompany the current request, including a cloud request. It is an uncertain tone hint, not a diagnosis or memory source; you can turn it off. Raw audio and recognizer metadata are not sent.",
          },
        ],
      },
      {
        id: "cloud-motion",
        title: "Cloud Motion",
        paragraphs: [
          "Cloud Motion is on by default when cloud access is configured, including with on-device replies. It sends the derived action description, duration and stage bounds to Kokage Cloud in Singapore; it does not upload the conversation transcript or avatar. Descriptions, poses and embeddings are transient.",
          "Local presets are free. Generated motion reserves Leaves separately and, once it starts, charges for the motion time the server sends, which can include buffered motion that is never displayed. Motion that does not start is free.",
          "You can turn Cloud Motion off in Settings; this cancels current and prefetched generated actions. For a character card that requires local inference, the action description is not sent to Kokage Cloud either.",
          "While you are chatting in the foreground with Cloud Motion on, the app keeps an authenticated connection to Kokage Cloud so motion generation is ready; the connection itself carries no conversation content or action. It closes two minutes after you last open the chat, type or have a reply under way, and when the app goes to the background or the chat closes; waiting with the microphone open does not keep it.",
        ],
      },
      {
        id: "cloud-voices",
        title: "Cloud voices and speech",
        paragraphs: [
          "In a configured build you can create private voices in your Kokage Cloud account and choose one to read replies.",
        ],
        items: [
          {
            title: "Voice design",
            body: "Voice design sends the description you type to Kokage Cloud for processing in Singapore. One purchase creates three candidate voices; the price shown tells you when your account's first design is free. A designed voice may resemble a real person. Describing someone's voice is not their consent, and using a voice to impersonate anyone is not allowed. In a build configured for Report, you can report voice misuse from the voice creation page; that report contains a fixed subject line, your chosen reason and optional note, and no voice, audio or account identifier.",
          },
          {
            title: "Voice cloning",
            body: "Voice cloning uploads only audio files you choose, or a recording you make on that page for this purpose. On iPhone, iPad, Mac and Android, a file in another format, such as M4A or MP3, is first converted to WAV on your device, and only the converted audio is uploaded. Ordinary conversation audio is never used. A recording stays in memory on your device until you confirm the upload, and it is discarded if you leave the app or close the page. Before uploading, you state whether the voice is yours or an authorized speaker's, confirm that you have permission, and choose whether to keep the original files; Kokage Cloud records these choices with the upload and processes the audio in Singapore.",
          },
          {
            title: "Keeping and deleting voices",
            body: "Candidates you do not save expire 24 hours after they are ready, and their audio and inputs are then deleted; uploads that were never submitted are removed after 24 hours. Saving a voice keeps its reference audio, derived voice data and preview in your private account until you delete the voice. The derived data is not anonymous: speech can be recovered from it. A saved designed voice also keeps the description used to create it. For a cloned voice, the original uploads are kept for seven days after saving for recovery, or while the voice stays saved if you chose to keep them for migration. Deleting a voice revokes it immediately, cancels speech that is using it and schedules deletion of its audio and data. A download link that was already issued can work for up to 60 seconds, and copies you downloaded cannot be recalled. Purchase and consent records remain with your account.",
          },
          {
            title: "Reading replies with a cloud voice",
            body: "When you choose a cloud voice for replies, including on-device replies, the clean text of each part of a reply that is spoken is sent with that voice's identity, the speaking rate and, for expressive replies, the chosen delivery preset and strength to Kokage Cloud and processed in Singapore. The conversation history, character data and avatar are not sent for speech. Speech text and generated audio are processed in memory and are not stored as recordings or written to ordinary logs. Cloud speech spends Leaves for the audio produced. Opening a chat with a cloud voice selected, and a periodic keep-warm while you keep chatting, sends a request that names only the voice; it stops two minutes after your last activity in the chat, and when the app goes to the background or the chat closes. The voice installed on your device stays available. An optional setting, off by default, reads replies with it while a cloud voice is getting ready; that text then stays on your device. Character cards requiring local inference cannot use cloud speech.",
          },
        ],
      },
      {
        id: "avatar-creation",
        title: "Avatar creation",
        paragraphs: [
          "Avatar creation is an optional Kokage Cloud feature in Settings. You describe how a character looks, add a picture you choose or take for this purpose, or both. Kokage sends the description and the picture to Kokage Cloud, where the avatar is made on GPUs in Singapore.",
        ],
        items: [
          {
            title: "Safety check",
            body: "Before any 3D work, an outside AI service checks the picture once for safety, together with the description; a request without a picture has the picture drawn from its description checked instead. Because of that check, avatar creation needs outside processing and is not available to accounts limited to in-house processing.",
          },
          {
            title: "Pictures you send",
            body: "Before a picture is sent, you confirm that you may use it and that any real person shown has given permission. The app re-encodes the picture without camera or location metadata. A photo of a real person is redrawn in the app's style unless you keep realism.",
          },
          {
            title: "What Kokage Cloud keeps",
            body: "Kokage Cloud deletes the description, the picture and intermediate drawings after the job and its retry window. It keeps a record of the safety check (the picture's hash, policy and model versions, the decision and flags) without the picture. A finished avatar stays in your private Kokage Cloud account until you delete it. The creation screen offers deletion while it shows that avatar; starting a new one removes it from the screen, not from your account.",
          },
          {
            title: "Downloading and using an avatar",
            body: "Previewing, downloading and using a finished avatar cost no more Leaves; if no avatar is made, the reserved Leaves are returned. The Download VRM option saves or shares the file with the destination you choose. The Use character option keeps a verified copy on this device for the current character; deleting the avatar from Kokage Cloud does not remove that copy. The app remembers only which request it is following, so the screen can resume after you leave; preview copies are temporary and removed when the screen closes.",
          },
        ],
      },
      {
        id: "local-data",
        title: "Your saved conversation and inputs",
        paragraphs: [
          "On native devices, Kokage saves the conversation as displayed, including final voice text you submit. Each relationship keeps its own records across model, backend and setup changes.",
          "Deleting a relationship removes its local conversation, recap, retained photos and memory; if cleanup fails, the app offers a retry. Archiving a card leaves that private state intact. Removing an individual memory does not remove the same information from conversation or recap.",
        ],
        items: [
          {
            title: "Photos",
            body: "Photo retention starts on. Turning it off removes saved photo bytes and stops retaining future photos, while keeping text and image markers. Turning it back on affects future photos. A current photo you choose to submit may still reach the selected cloud vision service after its disclosure.",
          },
          {
            title: "Microphone",
            body: "Microphone recognition runs on-device. Conversation microphone audio, recognition drafts, intermediate results and voice metadata are transient and are not logged or uploaded. Only final text you actually submit follows the ordinary conversation storage and selected reply-backend rules. A voice-clone recording that you explicitly make and confirm is uploaded as described under Cloud voices and speech.",
          },
        ],
      },
      {
        id: "memory",
        title: "Memory and Knowledge",
        paragraphs: [
          "Memory starts on when its local services are available.",
        ],
        items: [
          {
            title: "What memory saves",
            body: "Memory can save at most one useful detail from text you submit, including information about you, other people, plans, events, health, finances or locations. It must preserve attribution, uncertainty, negation and time qualifiers. The model is instructed to exclude passwords, access PINs, API keys, recovery codes and information you ask it not to remember. Selection can be wrong; these instructions do not guarantee that unwanted information will never be saved.",
          },
          {
            title: "Memory controls",
            body: "There is no initial memory consent prompt or per-entry approval. A save notice offers temporary Undo, and you can inspect, edit, delete, clear or turn memory off. Turning memory off stops automatic access while retaining editable records. Memory has no reminder or automatic-expiry feature. Your own submitted words can supply a memory even when a turn includes a photo or retrieved text; those other sources cannot supply the saved quote.",
          },
          {
            title: "Knowledge",
            body: "Knowledge indexes only text you explicitly add. It does not automatically index chat, microphone, camera or model output. In a build that includes those services, selected Knowledge excerpts and saved memory can enter a cloud request you have consented to.",
          },
        ],
      },
      {
        id: "smart-home",
        title: "Optional smart home",
        paragraphs: [
          "On iOS and iPadOS, Smart home starts off. Enabling it requests Apple Home access and lets Kokage read supported state across accessible homes and carry out requested, validated device actions while the app is in the foreground. Suggestions wait for your reply. HomeKit handles platform traffic; Android smart home is disabled.",
          "Selected home, room and device names and identifiers, sensor readings, states, and action outcomes can reach Kokage Cloud and its AI providers when you use cloud replies. The app explains this before enabling. Raw snapshots and structured tool data remain transient and unlogged. Visible home-related dialogue is saved and summarized like ordinary conversation.",
          "Turning Smart home off stops future access and retires pending work, but cannot undo an already-submitted device action or remove past visible dialogue.",
        ],
      },
      {
        id: "notifications",
        title: "Optional notifications",
        paragraphs: [
          "Nudges, the app's optional notifications, start off. The app prepares only the next notification while open, using the selected model and permitted conversation and memory context. With cloud selected, preparation sends that context and spends ordinary Leaves. A new message waits for another foreground opening; the model does not run while the app is closed.",
          "One private record on your device and the operating system retain the scheduled notification. The model prepares a full line and a reduced preview, but automatic checks cannot guarantee that the preview omits every private detail. Your operating system controls how previews and notification history are displayed. Turning Nudges off, a replacement, opening the chat or an expiry check retires the old notification; an already scheduled iOS alert can still appear late while the app is closed.",
        ],
      },
      {
        id: "characters",
        title: "Character imports and sharing",
        paragraphs: [
          "Cards you create or explicitly import, their media, and inert original source fields are saved locally. Import preview does not activate a character or grant it access to tools. Separate relationships keep their own local state. Card lore is not automatically added to your Knowledge index.",
        ],
        items: [
          {
            title: "Importing from a URL",
            body: "Pasting a public card URL contacts the selected sharing platform or direct file host and its validated redirects. They receive the requested URL and ordinary connection information such as your IP address. Kokage sends no app credentials, chat or memory with that request and does not automatically fetch secondary media.",
          },
          {
            title: "Cards marked for local-only inference",
            body: "A character card marked for local-only inference uses an on-device model. Kokage blocks cloud replies and automatic model rounds for that character even when you previously enabled cloud chat. You can select an on-device model or another character; your saved backend preference remains unchanged.",
          },
          {
            title: "Export and sharing",
            body: "Before export, you review authored card content and choose the media to include. Private relationship state, memory, chats, permissions and quarantined source fields are excluded. Desktop saves to your chosen location; mobile uses the OS share sheet and the recipient you select. App staging files are removed after the share callback. Android's sharing component can keep a temporary delivery copy until the next share or cache reclamation. A crash can leave temporary files for cache reclamation. Copies saved by a recipient are controlled by that recipient.",
          },
        ],
      },
      {
        id: "cloud-account",
        title: "Kokage Cloud account, providers and purchases",
        paragraphs: [
          "Cloud account and wallet actions use a device credential and account state. Opening the wallet can connect before chat consent. Selecting on-device replies keeps your earlier cloud acceptance; the app has no control for revoking that consent.",
        ],
        items: [
          {
            title: "Who runs Kokage Cloud",
            body: "Kokage Cloud is run by Orcalogy LLC on Google Cloud. Its gateway and database are in Tokyo; speech, motion and avatar GPU work and the private files for voices and avatars are in Singapore.",
          },
          {
            title: "AI model providers",
            body: "Cloud chat requests, and the avatar safety check, go through OpenRouter to third-party AI model providers; which provider answers depends on the reply model and can change. Kokage Cloud does not store the text or images of a cloud chat request as conversation history; it keeps the amounts used, timing, the model route and the charge for billing. OpenRouter and the model providers handle requests under their own terms and privacy policies, which decide how long they keep data.",
            link: {
              href: "https://openrouter.ai/privacy",
              label: "OpenRouter privacy policy",
            },
          },
          {
            title: "Purchases",
            body: "Purchases on supported iOS builds also involve RevenueCat and store services. On iOS, purchases go through Apple and RevenueCat under their policies; RevenueCat receives the purchase and a random account identifier, not your conversations.",
            link: {
              href: "https://www.revenuecat.com/privacy",
              label: "RevenueCat privacy policy",
            },
          },
        ],
      },
      {
        id: "retention",
        title: "Account deletion and retention",
        paragraphs: [
          "You can delete your Kokage Cloud account in Settings with the Delete Kokage Cloud account option. After you confirm, Kokage Cloud revokes the account's sign-in on every device at once and accepts no new paid work, then erases the account's saved cloud voices, avatars and uploaded files in the background.",
          "Remaining Leaves are lost and not refunded, and deleting does not refund store purchases. This device forgets the account, the cloud voice you selected, the avatar request it was following and its copy of the balance. Characters, chats, memories, Knowledge and avatars already in use stay on this device. Using Kokage Cloud again creates a new, empty account.",
          "After deletion, Kokage Cloud keeps records that contain no conversation, voice or picture content: the closed account's identifier, the Leaf balance and spending history, store purchase records, voice consent records, safety-check records of avatar requests that were refused or failed, and audit entries. They are kept for accounting, fraud prevention and legal duties and have no fixed deletion date.",
          "Copies held by Kokage Cloud and its providers, by the stores and in submitted reports each have separate retention.",
        ],
      },
      {
        id: "network",
        title: "Downloads and other connections",
        paragraphs: [
          "Downloads you confirm and public-model Check requests contact their hosts and CDNs with source coordinates and normal connection metadata, such as your IP address. They do not include chat or media content. A confirmed transfer may continue through the platform's transfer service and keep a bounded restart checkpoint. Canceling removes partial transfer state. Model activation verifies size and digest.",
          "Kokage's own source code includes no advertising, analytics or remote crash-reporting feature.",
        ],
        items: [
          {
            title: "Public model information and files",
            body: "A Hugging Face Check requests public repository metadata, and a confirmed install downloads selected model and voice files from Hugging Face plus its redirect or delivery hosts.",
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
            title: "Avatar files",
            body: "AvatarSample_A and local Custom VRM import need no host request. A Custom VRM HTTPS import contacts your chosen host. The app retains a validated private-cache copy and its digest and size, not the original locator. Cache loss may require you to select the custom source again.",
          },
        ],
      },
      {
        id: "reports",
        title: "Reports",
        paragraphs: [
          "In a build configured for Report, you review the selected displayed response, choose a reason, optionally add a note, and confirm sending it to Formspark.",
          "The payload includes the catalog model/template ID and app version, a format version, and a random report reference. That reference identifies the submission, not your device or account. No separate prompt, history or media fields and no device or account identifier fields are added. The selected response itself may repeat private context.",
        ],
        items: [
          {
            title: "Retention and deletion of reports",
            body: "Formspark and the developer mailbox may each retain a copy. Clearing local app data does not delete those copies. There is no fixed retention period: Formspark and the Orcalogy mailbox keep a report until Orcalogy deletes it. To ask for deletion, email contact@orcalogy.com with the report reference the app showed you; Orcalogy then deletes the Formspark submission and the mailbox copy. Copies in those providers' backups follow the providers' own schedules.",
            link: {
              href: "https://formspark.io/legal/privacy-policy/",
              label: "Formspark privacy policy",
            },
          },
        ],
      },
      {
        id: "permissions",
        title: "Permissions and local protection",
        paragraphs: [
          "Camera, microphone and notification permissions have separate explicit controls.",
          "Kokage asks for camera access when you attach one still to a message. You can deny or revoke that permission in system settings and continue with typed chat.",
          "Kokage asks for microphone access before voice capture. If you deny or revoke access, typed chat remains available and the app offers retry or system-settings guidance where the platform supports it.",
          "Kokage uses app-private storage and operating-system protections, but it does not add application-layer encryption to saved content.",
          "Android excludes app data from OS backup and device transfer; on Apple platforms, the app's private support storage is excluded from backup. The operating system can reclaim cache. These measures are not a blanket guarantee about Linux, Windows or third-party desktop backups.",
          "To ask the operating system to remove the remaining app-private files, use its app-removal controls; final removal and device backups are controlled by the operating system.",
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
        title: "Changes and contact",
        paragraphs: [
          "The project will update this page and its last-updated date when Kokage's data practices change.",
          "Contact: contact@orcalogy.com.",
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
