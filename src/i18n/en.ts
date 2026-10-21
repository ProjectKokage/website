import { storeListings } from "./routes";
import type { SiteCopy } from "./types";

export const en = {
  locale: "en",
  htmlLang: "en",
  ogLocale: "en_US",
  brandLabel: "Kokage",
  meta: {
    title: "Kokage | Talk with a 3D AI character",
    description:
      "Kokage is an app for talking with a 3D AI character on iPhone, iPad, and Android. Chat for free on your device, or use Kokage Cloud on iPhone and iPad for instant chat, custom voices, 3D avatars, and Cloud Motion.",
  },
  skipLink: "Skip to content",
  navigation: {
    label: "Main navigation",
    homeLabel: "home",
    items: [
      { href: "#features", label: "Features" },
      { href: "#cloud", label: "Kokage Cloud" },
      { href: "#how", label: "How it works" },
      { href: "#privacy", label: "Privacy" },
    ],
    languageLabel: "Language",
  },
  hero: {
    eyebrow: "AI character chat",
    titleLead: "Talk with a 3D AI character",
    titleAccentLines: ["on your device or in the cloud."],
    lede: "Kokage is an app for chatting with a 3D AI character by voice or text. Hear replies spoken aloud and watch your character respond with expressions and gestures. You can chat for free on your device, or start talking right away on iPhone and iPad with Kokage Cloud.",
    appStoreAction: "Download on the App Store",
    googlePlayAction: "Get it on Google Play",
    cloudAction: "Explore Kokage Cloud",
    notice:
      "Free to download, and on-device chat is always free. On iPhone and iPad, you can also use Kokage Cloud features with Leaf.",
    imageAlt: "Kokage app icon, a mint speech bubble with two leaves",
  },
  cloud: {
    eyebrow: "Kokage Cloud",
    title: "What you can do with Kokage Cloud",
    lede: "On iPhone and iPad, you can use Kokage Cloud to start chatting without downloading a model, design a custom voice, create a new 3D avatar, or generate live body movement. Cloud voices, new looks, and Cloud Motion also work when replies are made on your device.",
    items: [
      {
        label: "Cloud chat",
        title: "Start talking without a download",
        body: "Start chatting right after installing the app, without waiting for a model download. You can add the free on-device model later, even from an open chat. When both are set up, Kokage automatically switches to on-device replies if you run out of Leaf.",
      },
      {
        label: "Cloud voices",
        title: "Make a voice that fits your character",
        body: "Describe the voice you have in mind and preview three candidates, or clone a voice from a recording of yourself or someone who has given permission. Saved voices speak Japanese, English, or Chinese in expressive tones such as happy, whispered, or sleepy.",
      },
      {
        label: "Create a new look",
        title: "Create a 3D avatar from words or a picture",
        body: "Describe how your character looks, add a picture, or combine both to make a 3D VRM avatar with an expressive face. Preview the result, apply it to your character, or download the VRM file.",
      },
      {
        label: "Cloud Motion",
        title: "Movement matched to the conversation",
        body: "Alongside built-in animations and gestures, Cloud Motion generates body movement matched to what your character is doing in the conversation. It works with both on-device and cloud replies and can be turned on or off anytime.",
      },
    ],
    leafLabel: "Leaf (言の葉)",
    leafBody:
      "Kokage Cloud features use Leaf so you only pay for what you use. Leaf packs never expire, and nothing is charged if a request fails before finishing. In Settings on iPhone and iPad, the wallet shows your balance and history, lets you buy Leaf packs or redeem an App Store offer code, and lets you move your account to a new device with a transfer code.",
    policyLink: "How Kokage Cloud handles your data",
  },
  flow: {
    eyebrow: "How it works",
    title: "From your message to your character's reply",
    lede: "Speak or type a message, and your character answers with voice and movement.",
    stages: [
      {
        label: "Send",
        title: "Type, speak, or share a photo",
        detail:
          "Type a message or speak into the microphone. With a model that supports images, you can also attach a photo from your camera.",
      },
      {
        label: "Think",
        title: "On your device or in the cloud",
        detail:
          "A model on your device creates a reply for free, or Kokage Cloud answers using your recent conversation and saved memories.",
      },
      {
        label: "Speak",
        title: "Hear it read aloud",
        detail:
          "An on-device voice or a custom cloud voice reads the reply aloud, pronouncing names, dates, times, and numbers naturally.",
      },
      {
        label: "Move",
        title: "Respond with expressions and gestures",
        detail:
          "Your character's mouth moves in time with the voice while animations, gestures, and Cloud Motion match what it is saying.",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "A 3D character who talks, listens, remembers, and moves",
    lede: "Each character keeps its own conversation history, memories, voice, and 3D look.",
    items: [
      {
        title: "Free on your device, or instant with Kokage Cloud",
        body: "Download a language model once to chat on your device for free, even offline. Kokage recommends a model that fits your device, or you can add a compatible public Hugging Face model. On iPhone and iPad, you can also start with Kokage Cloud and download the free on-device model later.",
      },
      {
        title: "Keep multiple characters",
        body: "Register as many characters as you like, each with its own chat history, memories, voice, and 3D avatar. Start with the included character or your own VRM file, import character cards from a file or link, and export the cards you create to share or use on another device.",
      },
      {
        title: "Customize personality, style, and language",
        body: "Adjust your character's personality, tone, reply length, how often it starts a conversation, and how expressive its voice sounds. Characters can talk in Japanese, English, or Chinese (Simplified or Traditional), or match the language of your latest message, with reading marks so names are pronounced properly.",
      },
      {
        title: "Talk by voice and share camera photos",
        body: "What you say into the microphone is transcribed right on your device. Hear replies from an on-device voice (Japanese or English) or a cloud voice (Japanese, English, or Chinese). With an image-capable model, share a camera photo—and when you switch to the rear camera, your character turns around too.",
      },
      {
        title: "Memories and notes you can review and edit",
        body: "Your character remembers useful details from your conversations and shows an Undo notice whenever a new memory is saved. Open the Memory page anytime to view, edit, or delete entries, or add shared notes that all of your characters can reference.",
      },
      {
        title: "Mouth and body movement in sync with speech",
        body: "Your character changes posture as it listens, thinks, and speaks, moving its mouth in time with the voice. It can nod, shake its head, bow, or cheer, and enabling Cloud Motion adds live movement matched to the action.",
      },
      {
        title: "Chat invitations and Apple Home",
        body: "Turn on invitations to chat to receive a daily greeting or a message after time away. On iPhone and iPad, you can also connect Apple Home so your character can check device statuses and operate them when you ask.",
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Built to keep your conversations in your hands",
    lede: "When replies are made on your device, your conversations stay on your device. Voice input is transcribed on your device, so your everyday spoken audio is never uploaded, and the app contains no advertising or analytics. When you use Kokage Cloud, the app explains what is sent beforehand, and you can manage or delete your memories, notes, and cloud account at any time.",
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
    lede: "This page explains what the Kokage app saves on your device, what it sends to Kokage Cloud and external services, when that happens, and how you can manage or delete your data.",
    updatedLabel: "Last updated",
    updatedDate: "2026-10-02",
    updatedDateDisplay: "October 2, 2026",
    highlightsLabel: "Policy summary",
    highlights: [
      "When replies are made on your device, your conversation stays on your device",
      "When you use Kokage Cloud, it sends only the data described in this policy, and the app explains cloud chat before you start using it",
      "Speech recognition runs on your device; conversation audio is never logged or uploaded",
      "The app includes no advertising, analytics, or automatic crash reporting",
    ],
    contentsLabel: "On this page",
    sections: [
      {
        id: "scope",
        title: "Scope",
        paragraphs: [
          "This policy describes how data is handled by the Kokage app, Kokage Cloud, and this website as of October 2, 2026.",
          "The sections about Kokage Cloud apply to versions of the app that include Kokage Cloud (such as the App Store version for iPhone and iPad).",
          "External websites and download hosts that you connect to from the app handle requests under their own privacy policies.",
        ],
      },
      {
        id: "chat",
        title: "On-device and cloud chat",
        paragraphs: [
          "Kokage lets you chat using a model on your device or, on supported versions, Kokage Cloud. When replies are made on your device, what you type or say stays on your device.",
          "Before your first cloud reply, the app explains that conversation text, character settings, recent history, conversation summaries, attached photos, and relevant memories or notes are sent to Kokage Cloud and its AI model providers. In-chat hints, character chat invitations, and memory extraction also use the selected cloud service and may spend Leaf from your balance.",
          "When both Kokage Cloud and an on-device model are set up, 'Reply on this device when Leaf runs out' (on by default) automatically switches to your on-device model if your Leaf balance cannot cover a reply. Replies made on your device are not sent to the cloud.",
          "Automatic cloud summary updates have a separate switch in Settings (off by default) and their own explanation, because summarizing older messages sends prior conversation turns to the cloud model and can use more Leaf than a single reply.",
        ],
        items: [
          {
            title: "Using voice tone as a reply hint",
            body: "By default, when you speak a message, the app may attach a single simple tone label to the reply request (including in cloud chat). This is used only to help match the tone of the reply, never for diagnosis or saved memories, and you can turn it off in Settings. Your microphone audio is never sent.",
          },
        ],
      },
      {
        id: "cloud-motion",
        title: "Cloud Motion",
        paragraphs: [
          "Cloud Motion is on by default when Kokage Cloud is available, including when replies are made on your device. When a reply includes a generated action, the app sends only a short action description, duration, and movement bounds to Kokage Cloud in Singapore; it never sends your conversation history or avatar. The action description and generated motion are processed temporarily in memory and are not stored.",
          "Built-in animations and preset gestures are free. Generated motion uses Leaf and, once movement begins, charges for the motion duration sent by the server (which can include buffered motion if stopped early). Motion that never starts costs no Leaf.",
          "You can turn Cloud Motion off in Settings at any time, which cancels any active or queued generated movement. Character cards set to on-device only never use Cloud Motion.",
          "While a chat is open in the foreground with Cloud Motion enabled, the app keeps a connection to Kokage Cloud ready so movement can start quickly. This standby connection sends no conversation content, action text, or avatar data, and closes two minutes after your last activity or when you leave the chat.",
        ],
      },
      {
        id: "cloud-voices",
        title: "Cloud voices and speech",
        paragraphs: [
          "On supported versions, you can create private voices in Japanese, English, or Chinese in your Kokage Cloud account and use them to read your character's replies.",
        ],
        items: [
          {
            title: "Voice design",
            body: "Voice design sends your text description and chosen language to Kokage Cloud in Singapore and creates three previewable candidates. The price shown on screen indicates when your account's first design is free. A designed voice may happen to sound like a real person, but describing someone's voice does not count as their consent, and impersonation is prohibited. You can report voice misuse from the voice creation screen; a report sends only a fixed subject line, your chosen reason, and an optional short note, with no voice, audio, or account ID.",
          },
          {
            title: "Voice cloning",
            body: "Voice cloning uploads only the audio files you select or a recording you make on the cloning screen. Files such as M4A or MP3 are converted to WAV on your device first, and everyday conversation audio is never used. A recording made on the cloning screen stays in memory until you confirm the upload and is discarded if you close the screen. Before uploading, you confirm whether the voice is yours or someone who gave permission and choose how the original file should be kept. Kokage Cloud records these choices and processes the audio in Singapore.",
          },
          {
            title: "Saving and deleting voices",
            body: "Voice candidates you do not save and unsubmitted uploads are automatically deleted after 24 hours. When you save a voice, its reference audio, voice data, and preview sample stay in your private account until you delete it (voice data is not anonymous because speech can be generated from it). Saved designed voices also keep their text description. For cloned voices, the original uploaded audio is kept for seven days for recovery, or for as long as the voice stays saved if you chose to keep it for migration. Deleting a saved voice disables it immediately and schedules its audio and data for deletion. Already-issued download links may remain valid for up to 60 seconds, and audio already downloaded to a device cannot be recalled. Purchase and consent records remain with your account.",
          },
          {
            title: "Reading replies with a cloud voice",
            body: "When you select a cloud voice—even if replies are made on your device—the spoken text (including reading marks), selected voice, speaking speed, and delivery style are sent to Kokage Cloud in Singapore. Conversation history, character settings, and avatars are not sent. The text and generated audio are handled in memory and are not stored as recordings or written to ordinary logs. Cloud speech uses Leaf based on audio length. While a chat is open with a cloud voice selected, the app periodically sends a lightweight keep-ready request naming only the voice, stopping two minutes after your last activity or when you close the chat. You can also turn on a setting to read replies with your on-device voice while a cloud voice is warming up. Character cards set to on-device only never use cloud speech.",
          },
        ],
      },
      {
        id: "avatar-creation",
        title: "Avatar creation",
        paragraphs: [
          "From 'Create a new look' in Settings, you can use Kokage Cloud to generate a 3D avatar from a text description, a picture you choose or take, or both. The description and picture are sent to Kokage Cloud in Singapore to build the 3D avatar.",
        ],
        items: [
          {
            title: "Safety check",
            body: "Before 3D generation starts, an external AI service checks the picture (or the concept image generated from your description) and the description once for safety. Because this step uses an external service, avatar creation is unavailable to accounts restricted from external processing.",
          },
          {
            title: "Pictures you send",
            body: "Before sending a picture, you confirm that you have the right to use it and permission from any real person shown. The app resizes and re-encodes the image on your device, stripping camera and location metadata (such as Exif). Photos of real people are redrawn in an illustrated style unless you choose to keep a realistic look.",
          },
          {
            title: "What Kokage Cloud keeps",
            body: "Once processing and the retry window finish, Kokage Cloud deletes the description, uploaded picture, and intermediate images. It keeps a safety-check record (image fingerprint, policy and model versions, and decision result) without keeping the picture itself. A completed avatar stays in your private Kokage Cloud account until you delete it, and you can delete it from the cloud right on the creation screen. Starting a new avatar clears the screen without deleting earlier avatars from your account.",
          },
          {
            title: "Downloading and using an avatar",
            body: "Previewing, downloading the VRM file, and applying a finished avatar to your character cost no extra Leaf, and reserved Leaf is returned in full if an avatar cannot be completed. 'Use character' saves a copy on your device for that character, so deleting the avatar from Kokage Cloud later does not remove your local copy. Temporary preview files are deleted when you close the screen.",
          },
        ],
      },
      {
        id: "local-data",
        title: "Saved conversations and inputs",
        paragraphs: [
          "Conversations shown on screen, including transcribed voice messages that you send, are saved on your device. Each character keeps its own separate history and summary even if you change models or voices.",
          "Deleting a character's data removes its conversation history, summary, saved photos, and memories from your device. Archiving a character card hides it from your active list without deleting its data. Deleting an individual memory on the Memory page does not alter past messages in the chat log.",
        ],
        items: [
          {
            title: "Photos",
            body: "Saving attached photos on your device is on by default. Turning it off deletes previously saved photos from your device and stops saving new ones (message text and attachment indicators remain). When using an image-capable cloud model, a photo attached to a new message is still sent to the cloud service as explained in the cloud chat notice.",
          },
          {
            title: "Microphone",
            body: "Speech recognition runs on your device. Microphone audio and in-progress transcription drafts are discarded immediately and are never saved, logged, or uploaded. Only the final text you send is saved as part of your conversation (only recordings you explicitly make and confirm on the voice cloning screen are uploaded, as described under Cloud voices and speech).",
          },
        ],
      },
      {
        id: "memory",
        title: "Memory and notes (Local Knowledge)",
        paragraphs: [
          "Memory is on by default and saves helpful details from your conversations on your device.",
        ],
        items: [
          {
            title: "What memory saves",
            body: "From messages you send, Memory can save up to one useful detail per turn—such as preferences, plans, people, or places. The model is instructed not to save passwords, PINs, API keys, transfer codes, or anything you ask it not to remember, though automated selection cannot guarantee that unwanted details will never be saved.",
          },
          {
            title: "Viewing, editing, and deleting memories",
            body: "Whenever a memory is saved, a notice appears with an Undo button so you can remove it right away. You can also open the Memory page anytime to view, edit, delete single entries, clear all entries, or turn Memory off. Turning it off stops new memories from being saved or looked up while keeping existing entries editable. Memories are created only from words you submit yourself, never automatically from photos or notes.",
          },
          {
            title: "Notes (Local Knowledge)",
            body: "Notes store only the text you add yourself. Chat messages, microphone audio, photos, character card lore, and AI replies are never added to your notes automatically. When using cloud chat, relevant excerpts from your saved memories and notes may be included in requests to help your character reply.",
          },
        ],
      },
      {
        id: "smart-home",
        title: "Smart home (optional)",
        paragraphs: [
          "On iPhone and iPad, Smart home is off by default. Turning it on asks for Apple Home permission so Kokage can check device statuses and run actions you ask for while the app is open. If your character suggests an action, it waits for your confirmation first. Apple HomeKit handles communication with your devices, and this feature is not available on Android.",
          "When using cloud chat with Smart home enabled, home, room, and device names, identifiers, sensor readings, device states, and action results may be sent to Kokage Cloud and its AI model providers (the app explains this before you turn Smart home on). Temporary device state snapshots are not logged, while smart-home messages shown in chat are saved like regular conversation.",
          "Turning Smart home off stops future access, though it cannot undo actions already carried out or erase past chat messages.",
        ],
      },
      {
        id: "notifications",
        title: "Chat invitations and notifications (optional)",
        paragraphs: [
          "Invitations to chat (notifications) are off by default. When turned on, the app prepares only the single next notification while the app is open, using your selected model and recent conversation and memories. When cloud chat is selected, preparing that notification sends relevant context to Kokage Cloud and uses Leaf. No AI model runs in the background while the app is closed; the next notification is prepared the next time you open the app.",
          "At most one scheduled notification is held on your device and by the operating system. A short lock-screen preview is also generated; because automated checks cannot guarantee that no personal detail appears in a preview, you can control lock-screen preview visibility in your device's notification settings. Turning invitations off, opening the chat, or passing the scheduled time cancels old notifications (on iOS, an alert scheduled just before closing the app may still appear).",
        ],
      },
      {
        id: "characters",
        title: "Importing and sharing character cards",
        paragraphs: [
          "Character cards you create or import, along with their avatars and portraits, are saved on your device. Previewing a card before importing does not activate the character or grant any permissions. Each character's data is kept separate, and character card lore is never copied into your notes automatically.",
        ],
        items: [
          {
            title: "Importing from a URL",
            body: "When you enter a public character card URL, the app connects to that host, which receives the URL and standard connection data such as your IP address. No account credentials, chat history, or memories are sent, and external linked media is not fetched automatically.",
          },
          {
            title: "Cards set to on-device only",
            body: "A character card marked for on-device inference only always uses an on-device model. Even if Kokage Cloud is enabled, cloud chat, cloud summaries, cloud voices, and Cloud Motion are disabled for that character.",
          },
          {
            title: "Exporting and sharing cards",
            body: "Before exporting a character card, you can review what is included and choose which images or avatars to attach. Your private chat history, summaries, memories, and permissions are never included. Temporary export files are cleaned up after sharing (though Android's share sheet or an unexpected close may leave a cached file until the OS clears cache). Any copy saved by a recipient is managed by that recipient.",
          },
        ],
      },
      {
        id: "cloud-account",
        title: "Kokage Cloud account, providers, and purchases",
        paragraphs: [
          "Kokage Cloud creates an account tied to your device automatically, without requiring an email address or password. Opening the Leaf wallet or cloud settings may connect to your account before you start cloud chat. To move to a new device, you can generate a single-use transfer code (valid for seven days, with an optional six-digit PIN) to transfer your Leaf balance, saved voices, created avatars, and consent records while signing out the old device.",
        ],
        items: [
          {
            title: "How Kokage Cloud is operated",
            body: "Kokage Cloud is operated by Orcalogy LLC on Google Cloud. Its gateway and database run in Tokyo, while voice, motion, and avatar processing—as well as private storage for saved voices and avatars—run in Singapore.",
          },
          {
            title: "AI model providers (OpenRouter)",
            body: "Cloud chat requests and avatar safety checks are routed through OpenRouter to third-party AI model providers (which provider responds depends on the model and may change). Kokage Cloud does not store the text or images of cloud chat requests as conversation history; it records only usage amounts, timestamps, model routes, and Leaf charges for billing. OpenRouter and the model providers handle requests under their own terms and privacy policies.",
            link: {
              href: "https://openrouter.ai/privacy",
              label: "OpenRouter privacy policy",
            },
          },
          {
            title: "Purchases and offer codes (Apple and RevenueCat)",
            body: "On iPhone and iPad, in-app purchases are processed through Apple and RevenueCat under their respective policies. RevenueCat receives purchase records and a random account identifier, never your conversations or media. Tapping 'Redeem a code' in the Leaf wallet opens the App Store offer-code redemption sheet.",
            link: {
              href: "https://www.revenuecat.com/privacy",
              label: "RevenueCat privacy policy",
            },
          },
        ],
      },
      {
        id: "retention",
        title: "Account deletion and data retention",
        paragraphs: [
          "You can delete your cloud account at any time from 'Delete Kokage Cloud account' in Settings. Confirming deletion immediately signs out all devices, invalidates unused transfer codes, and erases your saved cloud voices, created avatars, and uploaded files from the server.",
          "When you delete your account, any remaining Leaf is forfeited without refund, and past store purchases are not refunded. Your device removes the cloud account info, selected cloud voice setting, and cached balance, while keeping your characters, conversations, memories, notes, and avatars already applied to your characters on your device. If you use Kokage Cloud again later, a new empty account is created.",
          "After account deletion, Kokage Cloud retains only administrative records that contain no conversation, voice, or image content: the closed account ID, Leaf balance and usage history, store purchase records, voice consent records, safety-check records for refused or failed avatar requests, and audit logs. These are kept for accounting, fraud prevention, and legal obligations and have no fixed deletion date.",
          "Data held by AI model providers, the App Store, RevenueCat, and submitted reports follows each service's own retention rules.",
        ],
      },
      {
        id: "network",
        title: "Model downloads and external connections",
        paragraphs: [
          "When you download a model or check a public model, the download host receives the requested file path and standard connection information such as your IP address, with no conversation or media content. Canceling a download deletes any partial files.",
          "The app includes no advertising, analytics, or automatic crash reporting.",
        ],
        items: [
          {
            title: "Models from Hugging Face",
            body: "Checking or downloading a public model fetches repository details and model or speech files from Hugging Face and its delivery servers.",
            link: {
              href: "https://huggingface.co/privacy",
              label: "Hugging Face privacy policy",
            },
          },
          {
            title: "Voice and dictionary files from GitHub",
            body: "During setup, the app may download on-device voice and dictionary files from public GitHub releases, which receive standard connection data like any other download host.",
            link: {
              href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
              label: "GitHub privacy statement",
            },
          },
          {
            title: "VRM files",
            body: "The included character and VRM files imported from your device require no network connection. Importing a VRM from an HTTPS link connects only to the host you specify. Kokage saves a verified copy in private app storage without recording the original file path or URL.",
          },
        ],
      },
      {
        id: "reports",
        title: "Reporting inappropriate replies or misuse",
        paragraphs: [
          "Using the in-app Report option, you can report an offensive AI reply or voice misuse on the voice creation screen after reviewing what will be sent, choosing a reason, and optionally adding a short note. Reports are submitted through Formspark.",
          "A report sends only the catalog model or template ID, app version, format version, a random Reference ID generated for that report, your chosen reason, the selected reply (or a fixed subject line for voice misuse), and your optional note. The Reference ID identifies the report itself—not your device or account—and no prompts, chat history, audio, or images are attached (though the reported reply text itself may contain details from your conversation).",
        ],
        items: [
          {
            title: "Report storage and deletion requests",
            body: "Submitted reports are kept in Formspark and our support mailbox until we delete them; there is no fixed retention period, and uninstalling the app does not remove a submitted report. To request deletion, email contact@orcalogy.com with the Reference ID shown in the app, and we will delete the report from Formspark and our mailbox (copies in provider backups follow each provider's backup schedule).",
            link: {
              href: "https://formspark.io/legal/privacy-policy/",
              label: "Formspark privacy policy",
            },
          },
        ],
      },
      {
        id: "permissions",
        title: "Device permissions and local storage protection",
        paragraphs: [
          "Camera, microphone, Apple Home, and notification permissions are requested only when you use the corresponding feature.",
          "Kokage asks for camera access when you attach a photo to a message or take a picture for a new avatar, and you can continue chatting by text without granting it.",
          "Kokage asks for microphone access before voice input or voice-clone recording. If you decline, typed chat remains available and the app offers a retry or a link to system settings.",
          "Local data is stored in app-private storage protected by the operating system (without a separate in-app encryption password).",
          "To protect your privacy, app data is excluded from OS backups and device-to-device transfers on Android, and private storage is excluded from backups on iPhone and iPad (this does not restrict third-party computer backup tools).",
          "To erase all remaining app data from your device, uninstall Kokage from your device's settings.",
        ],
      },
      {
        id: "website",
        title: "About this website",
        paragraphs: [
          "This website uses no user accounts, contact forms, analytics, advertising, or tracking cookies.",
        ],
        items: [
          {
            title: "Language setting",
            body: "On your first visit, the site checks your browser's language setting, and saves the chosen language code ('en', 'ja', 'zh-hans', or 'zh-hant') under kokage-language in local storage only if you manually switch languages. Clearing your browser's site data removes it.",
          },
          {
            title: "Page delivery",
            body: "When you view this site, the hosting server receives standard request information such as your IP address, requested page, timestamp, and browser headers, and may keep operational or security logs under the host's terms.",
          },
          {
            title: "Google Fonts",
            body: "This site loads the Zen Maru Gothic font from Google Fonts, which receives standard request data needed to serve the font.",
            link: {
              href: "https://developers.google.com/fonts/faq/privacy",
              label: "Google Fonts privacy information",
            },
          },
        ],
      },
      {
        id: "changes",
        title: "Updates and contact",
        paragraphs: [
          "If our data practices change, we will update this page and the last-updated date above.",
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
        "How to download Kokage, helpful tips when something is not working, managing Kokage Cloud and Leaf, your data on device, and how to contact us.",
    },
    eyebrow: "Kokage support",
    title: "Support for Kokage",
    lede: "Find download links, simple tips when something is not working as expected, and how to reach us safely.",
    highlightsLabel: "Quick guide",
    highlights: [
      "Download Kokage for free on the App Store for iPhone and iPad, or on Google Play for Android",
      "You can always keep chatting by typing if voice, camera, 3D view, or cloud features are unavailable",
      "Please do not include private conversations, recordings, photos, or VRM files when emailing support",
      "Our support team cannot remotely view, restore, or erase conversations or memories stored on your device",
    ],
    contentsLabel: "On this page",
    sections: [
      {
        id: "availability",
        title: "Downloading Kokage",
        paragraphs: [
          "Kokage is free to download from the official app stores. We do not offer direct file downloads from this website.",
          "Kokage Cloud features and Leaf packs are available in the App Store version for iPhone and iPad. The Android version on Google Play makes replies on your device.",
        ],
        items: [
          {
            title: "iPhone and iPad",
            body: "Download Kokage from the App Store.",
            link: {
              href: storeListings.appStore,
              label: "Kokage on the App Store",
            },
          },
          {
            title: "Android",
            body: "Download Kokage from Google Play.",
            link: {
              href: storeListings.googlePlay,
              label: "Kokage on Google Play",
            },
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "When something is not working",
        paragraphs: [
          "If something goes wrong during a chat, Kokage shows a short tip above the message box and keeps what you were typing in place so you can send it again right away. For on-device replies, make sure the initial model and voice download has finished and that your device has enough free storage.",
        ],
        items: [
          {
            title: "An on-device model does not start",
            body: "Check the message shown in the app and make sure the model download is complete in Settings. If your device is low on memory, switching to the recommended model for your device helps it run smoothly.",
          },
          {
            title: "Voice, camera, or 3D view is unavailable",
            body: "Whenever voice, camera, or 3D display is temporarily unavailable, you can keep chatting by typing. Retry voice input or check that microphone and camera permissions are enabled for Kokage in your device's system settings.",
          },
          {
            title: "A Kokage Cloud feature pauses or takes a moment",
            body: "Check your internet connection and your Leaf balance in the wallet in Settings. On iPhone and iPad, you can add Leaf packs or tap 'Redeem a code' in the wallet. If Leaf runs out while an on-device model is installed, Kokage automatically switches to on-device replies. Cloud voice and motion servers also rest when idle, so the first request after a quiet period can take about a minute to warm up while you continue chatting by text. If an avatar or voice creation cannot be completed, no Leaf is spent.",
          },
        ],
      },
      {
        id: "kokage-cloud",
        title: "Kokage Cloud account and Leaf",
        paragraphs: [
          "Kokage Cloud creates an account for you automatically without asking for an email address or password. Your saved cloud voices, created avatars, and Leaf balance stay with that account. When moving to a new device, open the wallet in Settings to create a single-use transfer code.",
          "If you ever wish to remove your cloud account, use 'Delete Kokage Cloud account' in Settings. Deleting the account forfeits any remaining Leaf without refund, while keeping your characters, conversations, memories, notes, and avatars already in use on your device.",
        ],
      },
      {
        id: "permissions",
        title: "Camera and microphone settings",
        paragraphs: [
          "Kokage asks for camera access only when you attach a photo or take a picture for a new avatar look, and asks for microphone access before voice input or voice cloning. If you prefer not to grant them, you can still enjoy typed conversation.",
          "If a permission prompt no longer appears, check Kokage's permissions in your device's system settings before reinstalling the app.",
        ],
      },
      {
        id: "local-data",
        title: "Your data and privacy",
        paragraphs: [
          "Your on-device conversations, memories, notes, characters, and downloaded models or VRM files stay on your device, and cloud features send only what the privacy policy describes. Support cannot remotely view, recover, or delete data stored on your device.",
          "You can review, edit, or delete memories, notes, and characters right inside the app at any time. Uninstalling Kokage removes all remaining app data from your device.",
        ],
      },
      {
        id: "contact",
        title: "Contact us",
        paragraphs: [
          "If you have a question or run into an issue, email contact@orcalogy.com with your device model, OS version, app version, the message shown on screen (or the summary from Settings → Show details), and a brief description of what happened.",
          "To protect your privacy, please do not send private conversations, voice recordings, photos, VRM files, or transfer codes by email. Please note that we cannot promise a specific response time.",
          "To report an offensive AI reply or voice misuse, use the in-app Report option. You can review what will be sent before confirming, and if you later want the report deleted, email contact@orcalogy.com with the Reference ID shown in the app.",
        ],
      },
    ],
    contactLabel: "Email Kokage support",
    contactEmail: "contact@orcalogy.com",
    privacyLinkLabel: "Read the privacy policy",
    backHomeLabel: "Back to Kokage",
  },
  status: {
    eyebrow: "Platforms",
    title: "Get Kokage",
    lede: "Download Kokage for free on the App Store for iPhone and iPad, or on Google Play for Android.",
    platforms: [
      {
        name: "iPhone and iPad",
        state: "Available on the App Store",
        detail:
          "Includes free on-device chat and all optional Kokage Cloud features (cloud chat, cloud voices, 3D avatar creation, and Cloud Motion), plus voice input and speech, camera photo sharing, daily greetings, and Apple Home support.",
        link: {
          href: storeListings.appStore,
          label: "View on the App Store",
        },
      },
      {
        name: "Android",
        state: "Available on Google Play",
        detail:
          "Includes free on-device chat, voice input and speech, camera photo sharing, daily greetings, and 3D VRM characters (the Android version does not include Kokage Cloud).",
        link: {
          href: storeListings.googlePlay,
          label: "View on Google Play",
        },
      },
    ],
  },
  footer: {
    descriptor: "AI character chat",
    statusLink: "Platforms",
    privacyLink: "Privacy policy",
    supportLink: "Support",
    navigationLabel: "Footer navigation",
  },
} satisfies SiteCopy;
