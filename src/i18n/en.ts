import type { SiteCopy } from "./types";

export const en = {
  locale: "en",
  htmlLang: "en",
  ogLocale: "en_US",
  alternateOgLocale: "ja_JP",
  brandLabel: "Kokage",
  meta: {
    title: "Kokage | Local-first character chat",
    description:
      "Kokage is an experimental Flutter app that combines an on-device language model with a VRM character you choose.",
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
    eyebrow: "Local-first character chat",
    titleLead: "Talk with a character",
    titleAccentLines: ["on your own device."],
    lede:
      "Kokage brings an on-device language model together with a VRM character you choose. Add the optional voice features to speak and hear replies in Japanese. On mobile, when the selected model supports image input, you can attach one camera still to a message.",
    primaryAction: "Explore the features",
    secondaryAction: "View development status",
    notice: "Kokage is an experimental prototype.",
    imageAlt:
      "Kokage app icon, a mint speech bubble with two leaves",
  },
  flow: {
    eyebrow: "A conversation in Kokage",
    title: "From your message to the character’s reply",
    lede:
      "Each turn moves from your message to an on-device reply, optional speech, and character animation.",
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
        label: "Character",
        title: "Animate the character",
        detail:
          "During playback, Kokage can sync the character’s mouth to the audio. When available, expressions and motions can also respond to the reply.",
      },
    ],
    footnote:
      "If voice input, the camera, or 3D rendering is unavailable, you can continue the conversation by typing.",
  },
  features: {
    eyebrow: "What Kokage does",
    title: "On-device chat with optional voice and a VRM character",
    lede:
      "Kokage connects local text generation with optional Japanese speech and a VRM character you provide.",
    items: [
      {
        title: "Replies generated on your device",
        body:
          "After setup, the selected language model generates replies on your device. If generation fails, Kokage keeps your message so you can try again.",
      },
      {
        title: "A VRM character you choose",
        body:
          "Kokage can import a self-contained VRM 0.x or 1.0 file up to 128 MiB. It does not include a character model, so choose a file you have permission to use.",
      },
      {
        title: "Speak or attach one image",
        body:
          "After you set up voice input, Kokage converts microphone speech to text on your device. On mobile, a model that supports image input can receive one camera still with a message.",
      },
      {
        title: "Add text for Kokage to reference",
        body:
          "Paste text you want Kokage to search while composing future replies. Chat, microphone audio, images, and model output are never added to this local knowledge automatically.",
      },
    ],
  },
  privacy: {
    eyebrow: "App data and privacy",
    title: "Conversation processing stays on your device",
    lede:
      "Replies are generated on your device. Kokage does not use remote inference, analytics, or telemetry, and it does not send conversation content to a server.",
    items: [
      {
        title: "Conversation",
        body:
          "Kokage holds messages and prompts only while the conversation is active. It does not save conversation content to logs or persistent history.",
      },
      {
        title: "Microphone and camera",
        body:
          "Kokage keeps microphone audio only while recognizing speech. It keeps one camera image only for the current message or a failed message awaiting retry. Neither is logged or added to completed chat history.",
      },
      {
        title: "Local knowledge",
        body:
          "Only text you explicitly add, plus its local search index, is saved. Conversation content, audio, images, files, tool results, and model output stay outside that index.",
      },
      {
        title: "Models and characters",
        body:
          "Downloaded model data and an imported VRM stay in app-private storage. Kokage does not retain the VRM’s original path, URL, or filename after import.",
      },
    ],
    networkLabel: "When Kokage uses the network",
    networkBody:
      "Kokage connects only when you start a setup action: downloading model data, importing a character from an HTTPS URL, or checking public Hugging Face model information. You confirm each download before it begins.",
  },
  stack: {
    eyebrow: "Technology",
    title: "The local runtimes behind Kokage",
    lede:
      "Kokage uses separate libraries for language generation, speech, and VRM rendering.",
    items: [
      {
        title: "Language model",
        body: "Kokage runs llama.cpp through fllamer.",
      },
      {
        title: "Voice input",
        body:
          "Through sherpa_onnx, Silero VAD detects spoken segments and SenseVoice transcribes them.",
      },
      {
        title: "Japanese speech",
        body:
          "Open JTalk prepares the reading, and Kokoro generates the audio.",
      },
      {
        title: "Character",
        body: "Flutter Scene renders the character, and flvtterm handles VRM presentation.",
      },
    ],
  },
  status: {
    eyebrow: "Development status",
    title: "Current platform coverage",
    lede:
      "macOS is the primary development environment. Other targets have code paths, but not the same level of validation.",
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
        detail:
          "The web target runs without language-model inference.",
      },
    ],
  },
  footer: {
    descriptor: "Local-first character chat",
    statusLink: "Development status",
  },
} satisfies SiteCopy;
