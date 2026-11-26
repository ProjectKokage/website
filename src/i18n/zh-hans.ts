import { storeListings } from "./routes";
import type { SiteCopy } from "./types";

export const zhHans = {
  locale: "zh-hans",
  htmlLang: "zh-Hans",
  ogLocale: "zh_CN",
  brandLabel: "Kokage",
  meta: {
    title: "Kokage | 与 3D AI 角色对话",
    description:
      "Kokage 是一款可在 iPhone、iPad 和 Android 上与 3D AI 角色对话的应用。你可以在设备上免费聊天，也可以使用 Kokage Cloud，享受即时对话、自定义声音、3D 虚拟形象和云端动作。",
  },
  skipLink: "跳到正文",
  navigation: {
    label: "主导航",
    homeLabel: "首页",
    items: [
      { href: "#features", label: "功能" },
      { href: "#cloud", label: "Kokage Cloud" },
      { href: "#privacy", label: "隐私" },
      { href: "#status", label: "平台" },
    ],
    languageLabel: "语言",
  },
  hero: {
    eyebrow: "3D AI 角色聊天",
    titleLead: "与 3D AI 角色对话",
    titleAccentLines: ["会听、会说、也会动。"],
    lede: "与表情生动的 3D 角色语音或文字聊天——设备端免费运行，或用 Kokage Cloud 即刻开始。",
    appStoreAction: "在 App Store 下载",
    googlePlayAction: "在 Google Play 下载",
    cloudAction: "了解 Kokage Cloud",
    notice: "免费支持 iPhone、iPad 和 Android。可选云端功能使用言の葉。",
    imageAlt: "Kokage 应用图标：一个薄荷色的对话气泡，配有两片叶子",
    showcase: {
      ariaLabel: "Kokage 与 Kokochan 的对话预览",
      characterName: "Kokochan",
      statusLabel: "3D VRM",
      previewAlt: "Kokage 内置 3D 角色 Kokochan 的肖像",
      userMessage: "今天天气怎么样？",
      replyMessage: "今天晴空万里！要不要出去散散步？",
      voiceTag: "语音回复",
      motionTag: "生动动作",
      modeTag: "本地或云端",
    },
  },
  features: {
    eyebrow: "功能",
    title: "为自然对话而设计",
    lede: "每个角色都有专属声音、记忆与 3D 形象。",
    items: [
      {
        title: "语音、文字与照片",
        body: "本地转写语音，支持日语、英语和中文朗读，还可分享照片互动。",
      },
      {
        title: "3D 动作与专属场景",
        body: "口型与姿态同步语音，可自由搭配天空、摆件或自定义照片背景。",
      },
      {
        title: "由你掌控的记忆",
        body: "自动记住关键细节，随时查看、编辑、撤销或添加共享笔记。",
      },
      {
        title: "多角色与 VRM 形象",
        body: "可创建任意数量角色，加载自有 VRM 文件，并导入或导出角色卡。",
      },
      {
        title: "本地免费或云端即开",
        body: "下载推荐或 Hugging Face 公开模型免费离线聊，也可先用云端开聊。",
      },
      {
        title: "问候与 Apple 家庭",
        body: "可选每日问候通知，iPhone 和 iPad 还支持连接 Apple 家庭。",
      },
    ],
  },
  cloud: {
    eyebrow: "Kokage Cloud",
    title: "即刻开聊、定制声音、形象与动作",
    lede: "可选的在线能力，也能与免费本地回复配合使用。",
    items: [
      {
        label: "云端对话",
        title: "免下载即刻开聊",
        body: "安装后即可对话，言の葉用完时自动切换为本地模型回复。",
      },
      {
        label: "云端声音",
        title: "设计或克隆专属音色",
        body: "用文字描述或授权录音，生成支持日语、英语与中文的生动声音。",
      },
      {
        label: "制作新形象",
        title: "快速生成 3D VRM 形象",
        body: "用文字或图片生成表情丰富的 3D VRM 虚拟形象，支持应用或下载。",
      },
      {
        label: "云端动作",
        title: "契合语境的实时动作",
        body: "随对话实时生成肢体动作，本地与云端回复均可使用。",
      },
    ],
    leafLabel: "言の葉",
    leafBody:
      "按需使用的言の葉礼包永不过期，失败请求不扣费，新账号首次登录即赠免费言の葉。",
    accountLink: "管理 Kokage Cloud 账户",
    policyLink: "Kokage Cloud 如何处理你的数据",
  },
  privacy: {
    eyebrow: "隐私",
    title: "对话始终掌握在你手中",
    lede: "默认保留在本地，使用云端时透明可控。",
    pillars: [
      {
        title: "默认留在设备端",
        body: "本地回复、记忆与角色数据绝不离开你的设备。",
      },
      {
        title: "语音本地转写",
        body: "语音识别在设备端完成，音频立即丢弃且不上传。",
      },
      {
        title: "无广告无分析",
        body: "不含广告、行为统计或自动崩溃上报。",
      },
      {
        title: "云端透明可控",
        body: "发送内容事前说明，记忆与云端账户随时可删。",
      },
    ],
    policyLink: "阅读隐私政策",
  },
  privacyPolicy: {
    meta: {
      title: "隐私政策 | Kokage",
      description:
        "Kokage 如何处理设备端与云端对话、Kokage Cloud 的动作、声音、语音和虚拟形象、已保存的对话、记忆、举报、账户、下载以及网站数据。",
    },
    eyebrow: "Kokage 隐私政策",
    title: "Kokage 在你的设备上保存什么，以及云端功能发送什么",
    lede: "本页说明 Kokage 应用在你的设备上保存哪些内容、会向 Kokage Cloud 和外部服务发送哪些内容、何时发送，以及你如何管理或删除自己的数据。",
    updatedLabel: "最后更新",
    updatedDate: "2026-11-22",
    updatedDateDisplay: "2026年11月22日",
    highlightsLabel: "政策摘要",
    highlights: [
      "回复在设备上生成时，你的对话会保留在设备上",
      "使用 Kokage Cloud 时，只会发送本政策所述的数据，且应用会在你开始使用云端对话前加以说明",
      "语音识别在设备上运行；对话音频绝不会被记录或上传",
      "应用不包含任何广告、分析或自动崩溃报告",
    ],
    contentsLabel: "本页内容",
    sections: [
      {
        id: "scope",
        title: "适用范围",
        paragraphs: [
          "本政策说明截至 2026年11月22日，Kokage 应用、Kokage Cloud 及本网站如何处理数据。",
          "有关 Kokage Cloud 的部分适用于包含 Kokage Cloud 的应用版本：iPhone 和 iPad 的 App Store 版本，以及 Android 的 Google Play 版本。",
          "你从应用中连接的外部网站和下载服务器会依据其各自的隐私政策处理请求。",
        ],
      },
      {
        id: "chat",
        title: "设备端对话与云端对话",
        paragraphs: [
          "Kokage 允许你使用设备上的模型进行聊天，在支持的版本中也可以使用 Kokage Cloud。回复在设备上生成时，你输入或说出的内容会保留在设备上。",
          "在首次生成云端回复之前，应用会说明：对话文本、角色设置、近期记录、对话摘要、附加的照片以及相关的记忆或笔记将发送到 Kokage Cloud 及其 AI 模型提供商。对话中的提示、角色的聊天邀请和记忆提取同样会使用所选的云端服务，并可能消耗你余额中的言の葉。",
          "当 Kokage Cloud 和设备端模型都已设置时，“言の葉不足时使用已下载的模型对话”（默认开启）会在你没有可用的言の葉时，自动切换到设备端模型。一次云端回复的费用可能超过你剩余的言の葉，差额会从你下一次获得的言の葉中扣除，在此之前无法使用 Kokage Cloud 的功能。在设备上生成的回复不会发送到云端。",
          "云端摘要的自动更新在设置中有单独的开关（默认关闭）和专门的说明，因为总结较早的消息会将之前的对话轮次发送给云端模型，消耗的言の葉可能比单次回复更多。",
        ],
        items: [
          {
            title: "将语气用作回复提示",
            body: "默认情况下，当你用语音发送消息时，应用可能会在回复请求中附加一个简单的语气标签（包括云端对话）。它仅用于帮助回复匹配语气，绝不会用于诊断或保存为记忆，你也可以在设置中将其关闭。你的麦克风音频绝不会被发送。",
          },
        ],
      },
      {
        id: "cloud-motion",
        title: "云端动作",
        paragraphs: [
          "当 Kokage Cloud 可用时，云端动作默认开启，即使回复在设备上生成也是如此。当回复包含生成的动作时，应用只会将简短的动作描述、时长和动作范围发送到位于新加坡的 Kokage Cloud，绝不会发送你的对话记录或虚拟形象。动作描述和生成的动作仅在内存中临时处理，不会被存储。",
          "内置动画和预设手势免费。生成的动作会消耗言の葉，并在动作开始后按服务器发送的动作时长计费（如果提前停止，可能包括已缓冲的动作）。从未开始的动作不消耗言の葉。",
          "你可以随时在设置中关闭云端动作，关闭后会取消所有正在进行或排队中的生成动作。设为仅限设备端的角色卡永远不会使用云端动作。",
          "当对话在前台打开且启用了云端动作时，应用会保持与 Kokage Cloud 的连接就绪，以便动作能迅速开始。此待机连接不会发送任何对话内容、动作文本或虚拟形象数据，并会在你最后一次操作两分钟后或离开对话时关闭。",
        ],
      },
      {
        id: "cloud-voices",
        title: "云端声音与语音",
        paragraphs: [
          "在支持的版本中，你可以在 Kokage Cloud 账户中创建日语、英语或中文的私人声音，并用它们朗读角色的回复。",
        ],
        items: [
          {
            title: "声音设计",
            body: "声音设计会将你的文字描述和所选语言发送到位于新加坡的 Kokage Cloud，并生成三个可试听的候选声音。屏幕上显示的价格会标明你账户的首次设计何时免费。设计出的声音可能碰巧与某个真实人物相似，但描述某人的声音并不等于获得其同意，且禁止冒充他人。你可以在声音创建界面举报声音滥用；举报仅发送固定的主题行、你选择的原因以及可选的简短备注，不包含任何声音、音频或账户 ID。",
          },
          {
            title: "克隆声音",
            body: "克隆声音仅上传你选择的音频文件或你在克隆界面中录制的录音。M4A 或 MP3 等文件会先在设备上转换为 WAV，且绝不会使用日常对话音频。在克隆界面中录制的录音会保留在内存中，直到你确认上传；如果你关闭该界面，录音将被丢弃。上传前，你需要确认该声音属于你本人还是已获得许可的人，并选择原始文件的保留方式。Kokage Cloud 会记录这些选择，并在新加坡处理音频。",
          },
          {
            title: "保存和删除声音",
            body: "未保存的候选声音和未提交的上传内容会在 24 小时后自动删除。保存声音后，其参考音频、声音数据和试听样本会保留在你的私人账户中，直到你将其删除（由于可以用声音数据生成语音，因此声音数据并非匿名数据）。已保存的设计声音还会保留其文字描述。对于克隆的声音，原始上传音频会保留七天以便恢复；如果你选择保留以便迁移，则会在该声音保存期间一直保留。删除已保存的声音会立即停用该声音，并安排删除其音频和数据。已发放的下载链接可能在最多 60 秒内仍然有效，已下载到设备上的音频无法收回。购买记录和同意记录会保留在你的账户中。",
          },
          {
            title: "使用云端声音朗读回复",
            body: "当你选择云端声音时（即使回复在设备上生成），朗读的文本（包括注音标记）、所选声音、语速和表达风格会发送到位于新加坡的 Kokage Cloud。对话记录、角色设置和虚拟形象不会被发送。文本和生成的音频仅在内存中处理，不会作为录音存储，也不会写入普通日志。云端语音按音频时长消耗言の葉。当对话处于打开状态且选择了云端声音时，应用会定期发送一个仅包含声音名称的轻量级保持就绪请求，并在你最后一次操作两分钟后或关闭对话时停止。你还可以开启一项设置，在云端声音预热期间使用设备端声音朗读回复。设为仅限设备端的角色卡永远不会使用云端语音。",
          },
        ],
      },
      {
        id: "avatar-creation",
        title: "虚拟形象制作",
        paragraphs: [
          "通过角色页面中的“制作新形象”，你可以使用 Kokage Cloud 根据文字描述、你选择或拍摄的图片，或两者结合来生成 3D 虚拟形象。描述和图片会发送到位于新加坡的 Kokage Cloud，用于构建 3D 虚拟形象。",
        ],
        items: [
          {
            title: "安全检查",
            body: "在 3D 生成开始之前，外部 AI 服务会对图片（或根据你的描述生成的概念图）和描述进行一次安全检查。由于此步骤使用外部服务，受限于外部处理的账户无法使用虚拟形象制作功能。",
          },
          {
            title: "你发送的图片",
            body: "发送图片前，你需要确认你有权使用该图片，并已获得图中任何真实人物的许可。应用会在设备上调整图片尺寸并重新编码，去除相机和位置元数据（例如 Exif）。除非你选择保留写实风格，否则真实人物的照片会被重绘为插画风格。",
          },
          {
            title: "Kokage Cloud 保留的内容",
            body: "处理和重试期限结束后，Kokage Cloud 会删除描述、上传的图片和中间图像。它会保留一条安全检查记录（图像指纹、政策和模型版本以及判定结果），但不保留图片本身。制作完成的虚拟形象会保留在你的私人 Kokage Cloud 账户中，直到你将其删除；你可以直接在制作界面中将其从云端删除。开始制作新的虚拟形象会清空界面，但不会从你的账户中删除之前的虚拟形象。",
          },
          {
            title: "下载和使用虚拟形象",
            body: "预览、下载 VRM 文件以及将完成的虚拟形象应用到角色上都不会额外消耗言の葉；如果虚拟形象未能完成，预留的言の葉将全额退还。“使用此形象”会在你的设备上为该角色保存一份副本，因此之后即使从 Kokage Cloud 删除该虚拟形象，也不会移除你的本地副本。临时预览文件会在你关闭界面时删除。",
          },
        ],
      },
      {
        id: "local-data",
        title: "已保存的对话与输入",
        paragraphs: [
          "屏幕上显示的对话（包括你发送的经转写的语音消息）会保存在你的设备上。即使你更换模型或声音，每个角色也会保留各自独立的记录和摘要。",
          "将角色从人物库移除后，它会从你的列表中消失，但不会删除与它的对话，这些对话会保留其记录和设置。在“记忆”页面删除单条记忆不会改变聊天记录中过去的消息。卸载 Kokage 会从你的设备上清除其所有数据。",
        ],
        items: [
          {
            title: "照片",
            body: "在设备上保存附加的照片默认开启。关闭后，会从设备上删除之前保存的照片，并停止保存新照片（消息文本和附件标识仍会保留）。使用支持图像的云端模型时，附加到新消息的照片仍会按照云端对话说明中所述发送到云端服务。",
          },
          {
            title: "场景图片",
            body: "你为角色场景选择的图片会在设备上重新编码，去除相机、位置和文字元数据，并保存在应用的私有存储中。它绝不会发送到 Kokage Cloud，导出角色卡时也不会包含在内。让天空跟随一天的时间变化时，只会读取你设备上的时钟。",
          },
          {
            title: "麦克风",
            body: "语音识别在设备上运行。麦克风音频和正在转写的草稿会立即丢弃，绝不会被保存、记录或上传。只有你最终发送的文本会作为对话的一部分保存（只有你在克隆声音界面中明确录制并确认的录音才会被上传，详见“云端声音与语音”）。",
          },
        ],
      },
      {
        id: "memory",
        title: "记忆与笔记（本地知识）",
        paragraphs: [
          "记忆默认开启，会将对话中有用的细节保存在你的设备上。",
        ],
        items: [
          {
            title: "记忆会保存什么",
            body: "记忆功能可以保存你在发送的消息中提到的有用事实，例如偏好、计划、人物或地点。模型会被指示不保存密码、PIN 码、API 密钥、账户恢复码或任何你要求它不要记住的内容，但自动筛选无法保证绝不会保存不需要的细节。",
          },
          {
            title: "查看、编辑和删除记忆",
            body: "每次保存记忆时都会出现提示，最新的一条带有“撤销”按钮，让你可以立即将其删除。你也可以随时打开“记忆”页面，查看、编辑、删除单个条目、清除所有条目或关闭记忆功能。关闭后将停止保存或查找新的记忆，但现有条目仍可编辑。记忆仅根据你自己提交的文字创建，绝不会自动从照片或笔记中生成。",
          },
          {
            title: "笔记（本地知识）",
            body: "笔记只存储你自己添加的文本。聊天消息、麦克风音频、照片、角色卡设定资料和 AI 回复绝不会被自动添加到你的笔记中。使用云端对话时，你已保存的记忆和笔记中的相关片段可能会包含在请求中，以帮助角色回复。",
          },
        ],
      },
      {
        id: "smart-home",
        title: "智能家居（可选）",
        paragraphs: [
          "在 iPhone 和 iPad 上，智能家居默认关闭。开启时会请求 Apple 家庭权限，以便 Kokage 在应用打开期间查看设备状态并执行你要求的操作。如果角色建议执行某项操作，会先等待你的确认。与设备的通信由 Apple HomeKit 处理，此功能在 Android 上不可用。",
          "在启用智能家居的情况下使用云端对话时，家庭、房间和设备的名称、标识符、传感器读数、设备状态以及操作结果可能会发送到 Kokage Cloud 及其 AI 模型提供商（应用会在你开启智能家居前加以说明）。临时的设备状态快照不会被记录，而聊天中显示的智能家居消息会像普通对话一样保存。",
          "关闭智能家居会停止今后的访问，但无法撤销已执行的操作，也无法清除过去的聊天消息。",
        ],
      },
      {
        id: "notifications",
        title: "聊天邀请与通知（可选）",
        paragraphs: [
          "聊天邀请（通知）默认关闭。开启后，应用只会在打开期间准备下一条通知，并使用你所选的模型以及近期的对话和记忆。选择云端对话时，准备该通知会将相关上下文发送到 Kokage Cloud 并消耗言の葉。应用关闭期间不会在后台运行任何 AI 模型；下一条通知会在你下次打开应用时准备。",
          "你的设备和操作系统最多只保留一条已安排的通知。系统还会生成一段简短的锁屏预览；由于自动检查无法保证预览中不出现任何个人信息，你可以在设备的通知设置中控制锁屏预览的显示方式。关闭邀请、打开对话或超过预定时间后，旧通知会被取消（在 iOS 上，关闭应用前刚安排的提醒仍可能出现）。",
        ],
      },
      {
        id: "characters",
        title: "导入和分享角色卡",
        paragraphs: [
          "你创建或导入的角色卡及其虚拟形象和立绘会保存在你的设备上。导入前预览角色卡不会激活该角色，也不会授予任何权限。每个角色的数据彼此独立，角色卡设定资料绝不会被自动复制到你的笔记中。",
        ],
        items: [
          {
            title: "从 URL 导入",
            body: "当你输入公开的角色卡 URL 时，应用会连接到该服务器，服务器会收到该 URL 以及 IP 地址等标准连接数据。不会发送任何账户凭据、聊天记录或记忆，也不会自动获取外部链接的媒体。",
          },
          {
            title: "设为仅限设备端的角色卡",
            body: "设为仅限设备端的角色卡始终使用设备端模型。即使启用了 Kokage Cloud，该角色的云端对话、云端摘要、云端声音和云端动作也会被停用。",
          },
          {
            title: "导出和分享角色卡",
            body: "导出角色卡前，你可以查看其中包含的内容，并选择要附加哪些图片或虚拟形象。你的私人聊天记录、摘要、记忆和权限绝不会被包含在内。临时导出文件会在分享后清理（但 Android 的分享面板或意外关闭可能会留下缓存文件，直到操作系统清理缓存）。接收者保存的任何副本由该接收者自行管理。",
          },
        ],
      },
      {
        id: "cloud-account",
        title: "Kokage Cloud 账户、服务提供商与购买",
        paragraphs: [
          "Kokage Cloud 会自动创建与你的设备绑定的账户，无需电子邮件地址或密码。打开言の葉钱包或云端设置时，可能会在你开始云端对话之前连接到你的账户。",
          "登录是可选的。你首次选择 Kokage Cloud 时，应用会询问是否登录；你也可以稍后在“设置 → Kokage Cloud”中登录。通过 Apple（iPhone 和 iPad）或 Google 登录后，你可以在其他设备上使用同一个账户及其言の葉、已保存的声音和已制作的虚拟形象。届时 Kokage Cloud 会为你的账户保留登录服务提供的 ID，以及你选择共享的电子邮件地址。从未登录的账户只保存在其设备上，如果该设备丢失，将无法恢复。",
        ],
        items: [
          {
            title: "Kokage Cloud 的运营方式",
            body: "Kokage Cloud 由 Orcalogy LLC 在 Google Cloud 上运营。其网关和数据库在东京运行，而声音、动作和虚拟形象的处理，以及已保存声音和虚拟形象的私人存储，均在新加坡运行。",
            link: {
              href: "https://kokage.cloud/zh/privacy/",
              label: "Kokage Cloud 账户隐私政策",
            },
          },
          {
            title: "AI 模型提供商",
            body: "云端对话请求和虚拟形象安全检查会发送给第三方 AI 模型提供商。由哪家公司接收对话取决于模型，且可能发生变化：OpenAI、Anthropic、Google 和 DeepSeek 的模型，Kokage Cloud 会先交给该公司自己的 API，无法响应时再通过 OpenRouter 使用同一模型；其他模型则通过 OpenRouter 交给提供该模型的公司。只要还有其他公司能提供该模型，Kokage Cloud 就不会把对话发给 Cohere、StepFun 或 StreamLake，这几家公司表示会用收到的内容训练模型。Kokage Cloud 的默认对话最先由 DeepSeek 自己的服务响应，而 DeepSeek 没有说明是否会用通过 API 发送的内容训练模型。Kokage Cloud 不会将云端对话请求中的文本或图像作为对话记录存储；它仅记录用量、时间戳、模型路由和言の葉扣费，以用于计费。各公司依据各自的条款和隐私政策处理请求。",
            link: {
              href: "https://openrouter.ai/privacy",
              label: "OpenRouter 隐私政策",
            },
          },
          {
            title: "购买与优惠代码（Apple、Google Play 和 RevenueCat）",
            body: "App 内购买在 iPhone 和 iPad 上通过 App Store、在 Android 上通过 Google Play 处理，并与 RevenueCat 一起依据各自的政策进行。RevenueCat 会收到购买记录和一个随机账户标识符，绝不会收到你的对话或媒体内容。在 iPhone 和 iPad 上，在言の葉钱包中轻点“兑换代码”会打开 App Store 优惠代码兑换页面。",
            link: {
              href: "https://www.revenuecat.com/privacy",
              label: "RevenueCat 隐私政策",
            },
          },
        ],
      },
      {
        id: "retention",
        title: "账户删除与数据保留",
        paragraphs: [
          "你可以随时通过设置中的“删除 Kokage Cloud 账户”删除你的云端账户。确认删除后，该账户会立即在所有设备上退出登录，你保存的云端声音、制作的虚拟形象以及上传的声音片段和图片会从服务器上清除。如果你曾在 minori.study 使用同一个账户，你在那里的作答、报告、理由检查和练习题也会一并删除。",
          "删除账户后，剩余的言の葉将被作废且不予退款，过去在商店中的购买也不会退款。你的设备会移除云端账户信息、所选的云端声音设置和缓存的余额，但会保留你设备上的角色、对话、记忆、笔记以及已应用到角色上的虚拟形象。如果你之后再次使用 Kokage Cloud，将会创建一个新的空账户。",
          "账户删除后，Kokage Cloud 仅保留不含任何对话、声音或图像内容的管理记录：已关闭的账户 ID、言の葉余额和使用记录、商店购买记录、声音同意记录、被拒绝或失败的虚拟形象请求的安全检查记录，以及审计日志。这些记录出于会计、防范欺诈和法律义务的需要而保留，没有固定的删除日期。",
          "如果你曾通过 Apple 或 Google 登录，Kokage Cloud 还会保留一个由你在 Apple 或 Google 的 ID 单向转换得到的值，用于记录该 Apple 或 Google 账号已经领取过首次登录赠送的言の葉。这个值既不包含 ID 本身，也不包含你的电子邮件地址。由于它在账户删除后仍会保留，用同一个 Apple 或 Google 账号再次登录时，新账户不会再获得首次登录赠送的言の葉。",
          "如果你曾通过 Apple 或 Google 登录，Kokage Cloud 还会保留你的账户领取每日免费额度的日期，以及当天第一次请求的时间。为了让每日免费额度每天只发放一次，由你在 Apple 或 Google 的 ID 单向转换得到的值会保留到当天结束。",
          "AI 模型提供商、App Store、Google Play、RevenueCat 所持有的数据以及已提交的举报，遵循各服务自身的保留规则。",
        ],
      },
      {
        id: "network",
        title: "模型下载与外部连接",
        paragraphs: [
          "当你下载模型或查看公开模型时，下载服务器会收到所请求的文件路径以及 IP 地址等标准连接信息，不包含任何对话或媒体内容。取消下载会删除所有不完整的文件。",
          "应用不包含任何广告、分析或自动崩溃报告。",
        ],
        items: [
          {
            title: "来自 Hugging Face 的模型",
            body: "查看或下载公开模型时，会从 Hugging Face 及其分发服务器获取仓库详情以及模型或语音文件。",
            link: {
              href: "https://huggingface.co/privacy",
              label: "Hugging Face 隐私政策",
            },
          },
          {
            title: "来自 GitHub 的声音和词典文件",
            body: "在初始设置过程中，应用可能会从 GitHub 的公开发布页面下载设备端声音和词典文件，GitHub 会像其他下载服务器一样收到标准连接数据。",
            link: {
              href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
              label: "GitHub 隐私声明",
            },
          },
          {
            title: "VRM 文件",
            body: "内置角色以及从你的设备导入的 VRM 文件不需要网络连接。通过 HTTPS 链接导入 VRM 时，只会连接到你指定的服务器。Kokage 会在应用的私有存储中保存一份经过验证的副本，且不会记录原始文件路径或 URL。",
          },
        ],
      },
      {
        id: "reports",
        title: "举报不当回复或滥用行为",
        paragraphs: [
          "通过应用内的“举报”选项，你可以举报冒犯性的 AI 回复，或在声音创建界面举报声音滥用。举报前你可以查看将要发送的内容、选择原因，并可选择添加简短备注。举报通过 Formspark 提交。",
          "举报仅发送目录中的模型或模板 ID、应用版本、格式版本、为该举报随机生成的参考编号、你选择的原因、所选的回复（如为声音滥用，则为固定的主题行）以及你可选填写的备注。参考编号仅用于识别该举报本身，而非你的设备或账户，且不会附加任何提示词、聊天记录、音频或图像（但被举报的回复文本本身可能包含你对话中的细节）。",
        ],
        items: [
          {
            title: "举报的存储与删除请求",
            body: "已提交的举报会保存在 Formspark 和我们的支持邮箱中，直到我们将其删除；没有固定的保留期限，卸载应用也不会移除已提交的举报。如需申请删除，请将应用中显示的参考编号发送至 user_support@orcalogy.com，我们会从 Formspark 和我们的邮箱中删除该举报（服务提供商备份中的副本遵循各提供商的备份周期）。",
            link: {
              href: "https://formspark.io/legal/privacy-policy/",
              label: "Formspark 隐私政策",
            },
          },
        ],
      },
      {
        id: "permissions",
        title: "设备权限与本地存储保护",
        paragraphs: [
          "相机、麦克风、Apple 家庭和通知权限仅在你使用相应功能时才会请求。",
          "当你为消息或新的虚拟形象拍照时，Kokage 会请求相机权限；即使不授予权限，你也可以继续通过文字聊天。从图库中选择照片时会打开系统的照片选择器，Kokage 只会读取你选中的那张照片。",
          "在语音输入或克隆声音录音之前，Kokage 会请求麦克风权限。如果你拒绝，仍可使用文字聊天，应用会提供重试选项或指向系统设置的链接。",
          "本地数据存储在受操作系统保护的应用私有存储中（不另设应用内加密密码）。",
          "为保护你的隐私，在 Android 上，应用数据不会包含在系统备份和设备间迁移中；在 iPhone 和 iPad 上，私有存储不会包含在备份中（这不会限制第三方电脑备份工具）。",
          "如需从设备上清除所有剩余的应用数据，请在设备设置中卸载 Kokage。",
        ],
      },
      {
        id: "website",
        title: "关于本网站",
        paragraphs: [
          "本网站不使用用户账户、联系表单、分析、广告或跟踪 Cookie。",
        ],
        items: [
          {
            title: "语言设置",
            body: "首次访问时，本网站会检查你浏览器的语言设置；只有当你手动切换语言时，才会在本地存储的 kokage-language 下保存所选语言代码（“en”“ja”“zh-hans”或“zh-hant”）。清除浏览器的网站数据即可将其删除。",
          },
          {
            title: "页面传输",
            body: "当你浏览本网站时，托管服务器会收到 IP 地址、请求的页面、时间戳和浏览器标头等标准请求信息，并可能依据托管服务商的条款保留运维或安全日志。",
          },
          {
            title: "Google Fonts",
            body: "本网站从 Google Fonts 加载 Zen Maru Gothic 字体，Google Fonts 会收到提供该字体所需的标准请求数据。",
            link: {
              href: "https://developers.google.com/fonts/faq/privacy",
              label: "Google Fonts 隐私信息",
            },
          },
        ],
      },
      {
        id: "changes",
        title: "更新与联系方式",
        paragraphs: [
          "如果我们的数据处理方式发生变化，我们将更新本页面及上方的最后更新日期。",
          "联系方式：user_support@orcalogy.com。",
        ],
      },
    ],
    backHomeLabel: "返回 Kokage",
  },
  support: {
    meta: {
      title: "支持 | Kokage",
      description:
        "如何下载 Kokage、遇到问题时的实用提示、管理 Kokage Cloud 和言の葉、设备上的数据，以及如何联系我们。",
    },
    eyebrow: "Kokage 支持",
    title: "Kokage 支持",
    lede: "下载链接、常见问题排查与联系我们。",
    highlightsLabel: "快速指南",
    highlights: [
      "App Store（iPhone 和 iPad）与 Google Play（Android）免费下载",
      "语音、相机或云端不可用时，仍可随时输入文字聊天",
      "发送邮件时请勿附上私人对话、录音、照片或 VRM 文件",
      "支持团队无法远程查看、恢复或删除你设备上的数据",
    ],
    contentsLabel: "本页内容",
    sections: [
      {
        id: "availability",
        title: "下载 Kokage",
        paragraphs: [
          "请从官方应用商店免费下载。App Store 版（iPhone 和 iPad）与 Google Play 版（Android）均支持免费设备端聊天与可选 Kokage Cloud 功能。",
        ],
        items: [
          {
            title: "iPhone 和 iPad",
            body: "在 App Store 免费下载。",
            link: {
              href: storeListings.appStore,
              label: "在 App Store 查看",
            },
          },
          {
            title: "Android",
            body: "在 Google Play 免费下载。",
            link: {
              href: storeListings.googlePlay,
              label: "在 Google Play 查看",
            },
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "常见问题排查",
        paragraphs: [
          "聊天出错时，输入框上方会显示简短提示，并保留你正在输入的草稿。",
        ],
        items: [
          {
            title: "设备端模型无法启动",
            body: "请在设置中确认模型下载完成并有足够存储空间；内存紧张时切换为推荐模型。",
          },
          {
            title: "语音、相机或 3D 显示不可用",
            body: "随时可以继续文字聊天。请重试语音输入，或在系统设置中确认已开启麦克风与相机权限。",
          },
          {
            title: "Kokage Cloud 暂停或正在预热",
            body: "请检查网络与设置中的言の葉余额。空闲后的首次语音或动作请求可能需约 1 分钟预热，失败的制作不扣费。",
          },
        ],
      },
      {
        id: "kokage-cloud",
        title: "Kokage Cloud 账户与言の葉",
        paragraphs: [
          "在“设置 → Kokage Cloud”中使用 Apple（iPhone 和 iPad）或 Google 登录，即可跨设备同步言の葉、声音和虚拟形象。",
          "如需注销，可在设置中选择“删除 Kokage Cloud 账户”；剩余言の葉将作废，本地角色与对话保持不变。",
        ],
      },
      {
        id: "permissions",
        title: "相机和麦克风权限",
        paragraphs: [
          "仅在拍照时请求相机权限，仅在语音输入或克隆声音前请求麦克风权限。若不再弹出提示，请先在系统设置中检查权限。",
        ],
      },
      {
        id: "local-data",
        title: "你的数据与隐私",
        paragraphs: [
          "本地对话、记忆、角色和 VRM 文件保留在设备上，云端功能仅发送隐私政策所述内容。应用内可随时删除，卸载即可清除全部本地数据。",
        ],
      },
      {
        id: "contact",
        title: "联系我们",
        paragraphs: [
          "请发邮件至 user_support@orcalogy.com，注明设备、系统、应用版本及简要说明（可在“设置 → 显示详细信息”复制）。请勿附带私人对话、音频、照片或 VRM 文件；我们无法承诺具体回复时间。",
          "举报不当回复或声音滥用请使用应用内“举报”功能；如需删除举报，请将参考编号发至上述邮箱。",
        ],
      },
    ],
    contactLabel: "发送邮件给 Kokage 支持",
    contactEmail: "user_support@orcalogy.com",
    cloudLinkLabel: "Kokage Cloud 账户",
    privacyLinkLabel: "阅读隐私政策",
    backHomeLabel: "返回 Kokage",
  },
  status: {
    eyebrow: "平台",
    title: "获取 Kokage",
    lede: "免费支持 iPhone、iPad 和 Android。",
    platforms: [
      {
        name: "iPhone 和 iPad",
        state: "已在 App Store 上架",
        detail: "免费本地聊天、Kokage Cloud、3D VRM、语音与 Apple 家庭。",
        link: {
          href: storeListings.appStore,
          label: "在 App Store 查看",
        },
      },
      {
        name: "Android",
        state: "已在 Google Play 上架",
        detail: "免费本地聊天、Kokage Cloud、3D VRM 与语音。",
        link: {
          href: storeListings.googlePlay,
          label: "在 Google Play 查看",
        },
      },
    ],
  },
  footer: {
    descriptor: "3D AI 角色聊天",
    statusLink: "平台",
    cloudLink: "Kokage Cloud",
    privacyLink: "隐私政策",
    supportLink: "支持",
    xLink: "Kokage 的 X 账号",
    discordLink: "Kokage Discord 服务器",
    navigationLabel: "页脚导航",
  },
} satisfies SiteCopy;
