import { storeListings } from "./routes";
import type { SiteCopy } from "./types";

export const zhHant = {
  locale: "zh-hant",
  htmlLang: "zh-Hant",
  ogLocale: "zh_TW",
  brandLabel: "Kokage",
  meta: {
    title: "Kokage | 與 3D AI 角色對話",
    description:
      "Kokage 是一款可在 iPhone、iPad 和 Android 上與 3D AI 角色對話的 App。你可以在裝置上免費聊天，也可以使用 Kokage Cloud，享受即時對話、自訂聲音、3D 虛擬形象和雲端動作。",
  },
  skipLink: "跳至主要內容",
  navigation: {
    label: "主要導覽",
    homeLabel: "首頁",
    supportLabel: "支援",
    cloudLabel: "Kokage Cloud",
    themeToggleLight: "切換為淺色模式",
    themeToggleDark: "切換為深色模式",
    languageLabel: "語言",
  },
  hero: {
    title: "與 3D AI 角色對話。",
    lede: "語音、即時動作與 3D 虛擬形象——裝置端免費執行，或用 Kokage Cloud 立即開始。",
    appStoreAction: "在 App Store 下載",
    googlePlayAction: "在 Google Play 下載",
    imageAlt: "Kokage App 圖示：一個薄荷色的對話框，搭配兩片葉子",
    chatDayAlt: "Kokage 白天場景下的 3D 角色對話 iPhone 截圖",
    chatNightAlt: "Kokage 星空場景下的 3D 角色對話 iPhone 截圖",
  },
  features: {
    title: "自然對話，栩栩如生。",
    lede: "在 iPhone、iPad 和 Android 上享受流暢的 3D 角色互動。",
    switcherLabel: "App 畫面切換",
    photoTab: "照片對話",
    personalityTab: "人物設定",
    charactersTab: "自訂 VRM",
    photoAlt: "Kokage 對話中分享照片的 iPhone 截圖",
    personalityAlt: "Kokage 調整角色個性與說話風格的 iPhone 截圖",
    charactersAlt: "Kokage 使用自訂 3D VRM 虛擬形象聊天的 iPhone 截圖",
    items: [
      {
        title: "語音、文字與照片",
        body: "支援日語、英語與中文語音對話，還能在聊天中直接分享照片。",
      },
      {
        title: "免費裝置端聊天",
        body: "下載推薦模型或 Hugging Face 公開模型，離線也能私密免費暢聊。",
      },
      {
        title: "人物設定與 VRM 形象",
        body: "自訂語氣與風格，建立多個角色，或載入任意 VRM 檔案。",
      },
    ],
  },
  cloud: {
    title: "Kokage Cloud",
    lede: "依需使用言の葉，禮包永不過期。",
    switcherLabel: "Kokage Cloud 畫面切換",
    motionTab: "雲端動作",
    voiceTab: "雲端聲音",
    newlookTab: "製作新形象",
    motionAlt: "Kokage 展示即時雲端動作的 iPhone 影片",
    voiceAlt: "Kokage 製作雲端聲音的 iPhone 截圖",
    newlookAlt: "Kokage 透過 Kokage Cloud 製作新 3D 形象的 iPhone 截圖",
    items: [
      {
        title: "雲端對話",
        body: "免下載模型，安裝即可開聊。",
      },
      {
        title: "雲端聲音",
        body: "設計或複製富有表現力的聲音。",
      },
      {
        title: "製作新形象",
        body: "用文字或圖片產生 3D VRM 形象。",
      },
      {
        title: "雲端動作",
        body: "隨對話即時產生的自然動作。",
      },
    ],
    accountLink: "管理 Kokage Cloud 帳戶",
  },
  privacy: {
    title: "預設保護隱私。",
    points: [
      "裝置端對話始終留在你的裝置上。",
      "語音輸入完全在本機轉寫。",
      "無廣告，無分析，無追蹤。",
    ],
    policyLink: "閱讀隱私權政策",
  },
  privacyPolicy: {
    meta: {
      title: "隱私權政策 | Kokage",
      description:
        "Kokage 如何處理裝置端與雲端對話、Kokage Cloud 的動作、聲音、語音和虛擬形象、已儲存的對話、記憶、檢舉、帳戶、下載以及網站資料。",
    },
    eyebrow: "Kokage 隱私權政策",
    title: "Kokage 在你的裝置上儲存什麼，以及雲端功能傳送什麼",
    lede: "本頁說明 Kokage App 會在你的裝置上儲存哪些內容、會向 Kokage Cloud 和外部服務傳送哪些內容、何時傳送，以及你如何管理或刪除自己的資料。",
    updatedLabel: "最後更新",
    updatedDate: "2026-11-22",
    updatedDateDisplay: "2026年11月22日",
    highlightsLabel: "政策摘要",
    highlights: [
      "回覆在裝置上產生時，你的對話會留在裝置上",
      "使用 Kokage Cloud 時，只會傳送本政策所述的資料，且 App 會在你開始使用雲端對話前加以說明",
      "語音辨識在裝置上執行；對話音訊絕不會被記錄或上傳",
      "App 不包含任何廣告、分析工具或自動當機回報",
    ],
    contentsLabel: "本頁內容",
    sections: [
      {
        id: "scope",
        title: "適用範圍",
        paragraphs: [
          "本政策說明截至 2026年11月22日，Kokage App、Kokage Cloud 及本網站如何處理資料。",
          "與 Kokage Cloud 相關的段落適用於包含 Kokage Cloud 的 App 版本：iPhone 和 iPad 的 App Store 版本，以及 Android 的 Google Play 版本。",
          "你從 App 連線的外部網站和下載伺服器，會依據其各自的隱私權政策處理請求。",
        ],
      },
      {
        id: "chat",
        title: "裝置端對話與雲端對話",
        paragraphs: [
          "Kokage 可讓你使用裝置上的模型聊天，在支援的版本中也可以使用 Kokage Cloud。回覆在裝置上產生時，你輸入或說出的內容會留在裝置上。",
          "在第一次產生雲端回覆之前，App 會說明：對話文字、角色設定、近期紀錄、對話摘要、附加的照片，以及相關的記憶或筆記會傳送到 Kokage Cloud 及其 AI 模型供應商。對話中的提示、角色的聊天邀請和記憶擷取同樣會使用所選的雲端服務，並可能消耗你餘額中的言の葉。",
          "當 Kokage Cloud 和裝置端模型都已設定時，「言の葉不足時使用已下載的模型對話」（預設為開啟）會在你沒有可用的言の葉時，自動改用裝置端模型。一次雲端回覆的費用可能超過你剩餘的言の葉，差額會從你下次獲得的言の葉中扣除，在此之前無法使用 Kokage Cloud 的功能。在裝置上產生的回覆不會傳送到雲端。",
          "雲端摘要的自動更新在設定中有獨立的開關（預設為關閉）和專屬說明，因為摘要較早的訊息會將先前的對話內容傳送給雲端模型，消耗的言の葉可能比單次回覆更多。",
        ],
        items: [
          {
            title: "將語氣作為回覆提示",
            body: "預設情況下，當你以語音傳送訊息時，App 可能會在回覆請求中附加一個簡單的語氣標籤（包括雲端對話）。它僅用於讓回覆更貼近語氣，絕不會用於診斷或儲存為記憶，你也可以在設定中將其關閉。你的麥克風音訊絕不會被傳送。",
          },
        ],
      },
      {
        id: "cloud-motion",
        title: "雲端動作",
        paragraphs: [
          "當 Kokage Cloud 可以使用時，雲端動作預設為開啟，即使回覆在裝置上產生也是如此。當回覆包含產生的動作時，App 只會將簡短的動作描述、時長和動作範圍傳送到位於新加坡的 Kokage Cloud，絕不會傳送你的對話紀錄或虛擬形象。動作描述和產生的動作僅在記憶體中暫時處理，不會被儲存。",
          "內建動畫和預設手勢免費。產生的動作會消耗言の葉，並在動作開始後依伺服器傳送的動作時長計費（若提前停止，可能包含已緩衝的動作）。從未開始的動作不會消耗言の葉。",
          "你可以隨時在設定中關閉雲端動作，關閉後會取消所有進行中或排隊中的產生動作。設為僅限裝置端的角色卡永遠不會使用雲端動作。",
          "當對話在前景開啟且已啟用雲端動作時，App 會保持與 Kokage Cloud 的連線就緒，讓動作能迅速開始。這個待命連線不會傳送任何對話內容、動作文字或虛擬形象資料，並會在你最後一次操作的兩分鐘後或離開對話時關閉。",
        ],
      },
      {
        id: "cloud-voices",
        title: "雲端聲音與語音",
        paragraphs: [
          "在支援的版本中，你可以在 Kokage Cloud 帳戶中建立日語、英語或中文的私人聲音，並用它們朗讀角色的回覆。",
        ],
        items: [
          {
            title: "聲音設計",
            body: "聲音設計會將你的文字描述和所選語言傳送到位於新加坡的 Kokage Cloud，並產生三個可試聽的候選聲音。畫面上顯示的價格會標明你帳戶的首次設計何時免費。設計出的聲音可能碰巧與某位真實人物相似，但描述某人的聲音並不等於取得其同意，且禁止冒充他人。你可以在聲音建立畫面檢舉聲音濫用；檢舉只會傳送固定的主旨、你選擇的原因以及選填的簡短備註，不包含任何聲音、音訊或帳戶 ID。",
          },
          {
            title: "複製聲音",
            body: "複製聲音只會上傳你選擇的音訊檔案，或你在複製畫面中錄製的錄音。M4A 或 MP3 等檔案會先在裝置上轉換為 WAV，且絕不會使用日常對話的音訊。在複製畫面中錄製的錄音會保留在記憶體中，直到你確認上傳；如果你關閉該畫面，錄音就會被捨棄。上傳前，你需要確認該聲音是你本人的，還是已取得同意者的，並選擇原始檔案的保留方式。Kokage Cloud 會記錄這些選擇，並在新加坡處理音訊。",
          },
          {
            title: "儲存和刪除聲音",
            body: "未儲存的候選聲音和未送出的上傳內容會在 24 小時後自動刪除。儲存聲音後，其參考音訊、聲音資料和試聽樣本會保留在你的私人帳戶中，直到你將其刪除（由於可以用聲音資料產生語音，因此聲音資料並非匿名資料）。已儲存的設計聲音也會保留其文字描述。若是複製的聲音，原始上傳音訊會保留七天以便復原；如果你選擇保留以便移轉，則會在該聲音儲存期間一直保留。刪除已儲存的聲音會立即停用該聲音，並排定刪除其音訊和資料。已發出的下載連結可能在最多 60 秒內仍然有效，已下載到裝置上的音訊則無法收回。購買紀錄和同意紀錄會保留在你的帳戶中。",
          },
          {
            title: "使用雲端聲音朗讀回覆",
            body: "當你選擇雲端聲音時（即使回覆在裝置上產生），朗讀的文字（包括讀音標記）、所選聲音、語速和表達風格會傳送到位於新加坡的 Kokage Cloud。對話紀錄、角色設定和虛擬形象不會被傳送。文字和產生的音訊僅在記憶體中處理，不會被儲存為錄音，也不會寫入一般的紀錄檔。雲端語音依音訊長度消耗言の葉。當對話開啟且已選擇雲端聲音時，App 會定期傳送一個只包含聲音名稱的輕量保持就緒請求，並在你最後一次操作的兩分鐘後或關閉對話時停止。你也可以開啟一項設定，在雲端聲音暖機期間改用裝置端聲音朗讀回覆。設為僅限裝置端的角色卡永遠不會使用雲端語音。",
          },
        ],
      },
      {
        id: "avatar-creation",
        title: "虛擬形象製作",
        paragraphs: [
          "透過角色頁面中的「製作新形象」，你可以使用 Kokage Cloud 根據文字描述、你選擇或拍攝的圖片，或兩者並用來產生 3D 虛擬形象。描述和圖片會傳送到位於新加坡的 Kokage Cloud，用於建立 3D 虛擬形象。",
        ],
        items: [
          {
            title: "安全檢查",
            body: "在 3D 產生開始之前，外部 AI 服務會對圖片（或根據你的描述產生的概念圖）和描述進行一次安全檢查。由於此步驟使用外部服務，受限於外部處理的帳戶無法使用虛擬形象製作功能。",
          },
          {
            title: "你傳送的圖片",
            body: "傳送圖片前，你需要確認你有權使用該圖片，並已取得圖中任何真實人物的同意。App 會在裝置上調整圖片尺寸並重新編碼，移除相機和位置中繼資料（例如 Exif）。除非你選擇保留寫實風格，否則真實人物的照片會被重繪為插畫風格。",
          },
          {
            title: "Kokage Cloud 保留的內容",
            body: "處理和重試期限結束後，Kokage Cloud 會刪除描述、上傳的圖片和中間圖像。它會保留一筆安全檢查紀錄（圖像指紋、政策與模型版本以及判定結果），但不保留圖片本身。製作完成的虛擬形象會保留在你的私人 Kokage Cloud 帳戶中，直到你將其刪除；你可以直接在製作畫面中將其從雲端刪除。開始製作新的虛擬形象會清空畫面，但不會從你的帳戶中刪除先前的虛擬形象。",
          },
          {
            title: "下載和使用虛擬形象",
            body: "預覽、下載 VRM 檔案以及將完成的虛擬形象套用到角色上，都不會額外消耗言の葉；如果虛擬形象未能完成，預留的言の葉會全額退還。「使用此形象」會在你的裝置上為該角色儲存一份副本，因此之後即使從 Kokage Cloud 刪除該虛擬形象，也不會移除你的本機副本。暫存的預覽檔案會在你關閉畫面時刪除。",
          },
        ],
      },
      {
        id: "local-data",
        title: "已儲存的對話與輸入內容",
        paragraphs: [
          "畫面上顯示的對話（包括你傳送的已轉成文字的語音訊息）會儲存在你的裝置上。即使你更換模型或聲音，每個角色也會保留各自獨立的紀錄和摘要。",
          "將角色「從人物庫移除」會把它從清單中拿掉，但不會刪除與它的對話，對話會保留其紀錄和設定。在「記憶」頁面刪除單筆記憶，不會變更聊天紀錄中過去的訊息。解除安裝 Kokage 會從你的裝置上清除它的所有資料。",
        ],
        items: [
          {
            title: "照片",
            body: "在裝置上儲存附加的照片預設為開啟。關閉後，會從裝置上刪除先前儲存的照片，並停止儲存新照片（訊息文字和附件標示仍會保留）。使用支援圖片的雲端模型時，附加到新訊息的照片仍會依雲端對話說明中所述傳送到雲端服務。",
          },
          {
            title: "場景圖片",
            body: "你為角色場景選擇的圖片會在裝置上重新編碼，移除相機、位置和文字中繼資料，並儲存在 App 的私有儲存空間中。這張圖片絕不會傳送到 Kokage Cloud，匯出角色卡時也不會包含在內。跟隨一天的時間只會讀取你裝置的時鐘。",
          },
          {
            title: "麥克風",
            body: "語音辨識在裝置上執行。麥克風音訊和轉寫中的草稿會立即捨棄，絕不會被儲存、記錄或上傳。只有你最後傳送的文字會作為對話的一部分儲存（只有你在複製聲音畫面中明確錄製並確認的錄音才會被上傳，詳見「雲端聲音與語音」）。",
          },
        ],
      },
      {
        id: "memory",
        title: "記憶與筆記（本機知識）",
        paragraphs: [
          "記憶預設為開啟，會將對話中有用的細節儲存在你的裝置上。",
        ],
        items: [
          {
            title: "記憶會儲存什麼",
            body: "記憶功能可以儲存你在傳送的訊息中提到的有用事實，例如偏好、計畫、人物或地點。模型會被指示不要儲存密碼、PIN 碼、API 金鑰、帳戶復原碼或任何你要求它不要記住的內容，但自動篩選無法保證絕不會儲存不需要的細節。",
          },
          {
            title: "查看、編輯和刪除記憶",
            body: "每次儲存記憶時都會出現提示，最新的一則帶有「復原」按鈕，讓你可以立即將其刪除。你也可以隨時開啟「記憶」頁面，查看、編輯、刪除單筆項目、清除所有項目或關閉記憶功能。關閉後將停止儲存或查詢新的記憶，但現有項目仍可編輯。記憶只會根據你自己送出的文字建立，絕不會自動從照片或筆記中產生。",
          },
          {
            title: "筆記（本機知識）",
            body: "筆記只儲存你自己加入的文字。聊天訊息、麥克風音訊、照片、角色卡設定資料和 AI 回覆絕不會被自動加入你的筆記中。使用雲端對話時，你已儲存的記憶和筆記中的相關片段可能會包含在請求中，以協助角色回覆。",
          },
        ],
      },
      {
        id: "smart-home",
        title: "智慧家庭（選用）",
        paragraphs: [
          "在 iPhone 和 iPad 上，智慧家庭預設為關閉。開啟時會要求 Apple 家庭權限，讓 Kokage 能在 App 開啟期間查看裝置狀態並執行你要求的操作。如果角色建議執行某項操作，會先等待你的確認。與裝置的通訊由 Apple HomeKit 處理，此功能無法在 Android 上使用。",
          "在啟用智慧家庭的情況下使用雲端對話時，家庭、房間和裝置的名稱、識別碼、感測器讀數、裝置狀態以及操作結果可能會傳送到 Kokage Cloud 及其 AI 模型供應商（App 會在你開啟智慧家庭前加以說明）。暫時的裝置狀態快照不會被記錄，而聊天中顯示的智慧家庭訊息則會像一般對話一樣儲存。",
          "關閉智慧家庭會停止之後的存取，但無法撤銷已執行的操作，也無法清除過去的聊天訊息。",
        ],
      },
      {
        id: "notifications",
        title: "聊天邀請與通知（選用）",
        paragraphs: [
          "聊天邀請（通知）預設為關閉。開啟後，App 只會在開啟期間準備下一則通知，並使用你所選的模型以及近期的對話和記憶。選擇雲端對話時，準備該通知會將相關內容傳送到 Kokage Cloud 並消耗言の葉。App 關閉期間不會在背景執行任何 AI 模型；下一則通知會在你下次開啟 App 時準備。",
          "你的裝置和作業系統最多只會保留一則已排定的通知。系統還會產生一段簡短的鎖定畫面預覽；由於自動檢查無法保證預覽中不會出現任何個人資訊，你可以在裝置的通知設定中控制鎖定畫面預覽的顯示方式。關閉邀請、開啟對話或超過排定時間後，舊通知會被取消（在 iOS 上，關閉 App 前剛排定的提醒仍可能出現）。",
        ],
      },
      {
        id: "characters",
        title: "匯入和分享角色卡",
        paragraphs: [
          "你建立或匯入的角色卡及其虛擬形象和立繪會儲存在你的裝置上。匯入前預覽角色卡不會啟用該角色，也不會授予任何權限。每個角色的資料彼此獨立，角色卡設定資料絕不會被自動複製到你的筆記中。",
        ],
        items: [
          {
            title: "從 URL 匯入",
            body: "當你輸入公開的角色卡 URL 時，App 會連線到該伺服器，伺服器會收到該 URL 以及 IP 位址等標準連線資料。不會傳送任何帳戶憑證、聊天紀錄或記憶，也不會自動擷取外部連結的媒體。",
          },
          {
            title: "設為僅限裝置端的角色卡",
            body: "設為僅限裝置端的角色卡一律使用裝置端模型。即使已啟用 Kokage Cloud，該角色的雲端對話、雲端摘要、雲端聲音和雲端動作也會被停用。",
          },
          {
            title: "匯出和分享角色卡",
            body: "匯出角色卡前，你可以查看其中包含的內容，並選擇要附加哪些圖片或虛擬形象。你的私人聊天紀錄、摘要、記憶和權限絕不會被包含在內。暫存的匯出檔案會在分享後清除（但 Android 的分享表單或意外關閉可能會留下快取檔案，直到作業系統清除快取為止）。收件者儲存的任何副本由該收件者自行管理。",
          },
        ],
      },
      {
        id: "cloud-account",
        title: "Kokage Cloud 帳戶、服務供應商與購買",
        paragraphs: [
          "Kokage Cloud 會自動建立與你的裝置綁定的帳戶，不需要電子郵件地址或密碼。開啟言の葉錢包或雲端設定時，可能會在你開始雲端對話之前連線到你的帳戶。",
          "登入並非必要。第一次選擇 Kokage Cloud 時，App 會詢問你是否要登入；你也可以之後在「設定 → Kokage Cloud」中登入。使用 Apple（iPhone 和 iPad）或 Google 登入後，你可以在其他裝置上使用同一個帳戶，包括其中的言の葉、已儲存的聲音和已製作的虛擬形象。登入後，Kokage Cloud 會為你的帳戶保留登入服務的 ID，以及你選擇提供的電子郵件地址。從未登入的帳戶只會留在原本的裝置上，若該裝置遺失便無法復原。",
        ],
        items: [
          {
            title: "Kokage Cloud 的營運方式",
            body: "Kokage Cloud 由 Orcalogy LLC 在 Google Cloud 上營運。其閘道和資料庫在東京運作，而聲音、動作和虛擬形象的處理，以及已儲存聲音和虛擬形象的私人儲存空間，則在新加坡運作。",
            link: {
              href: "https://kokage.cloud/zh-hant/privacy/",
              label: "Kokage Cloud 帳戶隱私權政策",
            },
          },
          {
            title: "AI 模型供應商",
            body: "雲端對話請求和虛擬形象安全檢查會傳送給第三方 AI 模型供應商。由哪家公司接收對話取決於模型，且可能有所變動：OpenAI、Anthropic、Google 和 DeepSeek 的模型，Kokage Cloud 會先交給該公司自己的 API，無法回應時再透過 OpenRouter 使用同一模型；其他模型則透過 OpenRouter 交給提供該模型的公司。只要還有其他公司能提供該模型，Kokage Cloud 就不會把對話傳給 Cohere、StepFun 或 StreamLake，這幾家公司表示會用收到的內容訓練模型。Kokage Cloud 的預設對話最先由 DeepSeek 自己的服務回應，而 DeepSeek 沒有說明是否會用透過 API 傳送的內容訓練模型。Kokage Cloud 不會將雲端對話請求中的文字或圖片儲存為對話紀錄；它只會記錄用量、時間戳記、模型路由和言の葉扣款，以用於計費。各公司依據各自的條款和隱私權政策處理請求。",
            link: {
              href: "https://openrouter.ai/privacy",
              label: "OpenRouter 隱私權政策",
            },
          },
          {
            title: "購買與優惠代碼（Apple、Google Play 和 RevenueCat）",
            body: "App 內購買在 iPhone 和 iPad 上透過 App Store、在 Android 上透過 Google Play，並搭配 RevenueCat，依據各自的政策處理。RevenueCat 會收到購買紀錄和一個隨機的帳戶識別碼，絕不會收到你的對話或媒體內容。在 iPhone 和 iPad 上，在言の葉錢包中點一下「兌換代碼」，會開啟 App Store 的優惠代碼兌換頁面。",
            link: {
              href: "https://www.revenuecat.com/privacy",
              label: "RevenueCat 隱私權政策",
            },
          },
        ],
      },
      {
        id: "retention",
        title: "帳戶刪除與資料保留",
        paragraphs: [
          "你可以隨時透過設定中的「刪除 Kokage Cloud 帳戶」刪除你的雲端帳戶。確認刪除後，該帳戶會立即在所有裝置上登出，你儲存的雲端聲音、製作的虛擬形象以及上傳的聲音片段和圖片會從伺服器上清除。如果你曾在 minori.study 使用同一個帳戶，你在那裡的作答、報告、理由檢查和練習題也會一併刪除。",
          "刪除帳戶後，剩餘的言の葉將作廢且不予退款，過去在商店中的購買也不會退款。你的裝置會移除雲端帳戶資訊、所選的雲端聲音設定和快取的餘額，但會保留你裝置上的角色、對話、記憶、筆記以及已套用到角色上的虛擬形象。如果你之後再次使用 Kokage Cloud，將會建立一個新的空白帳戶。",
          "帳戶刪除後，Kokage Cloud 只會保留不含任何對話、聲音或圖片內容的管理紀錄：已關閉的帳戶 ID、言の葉餘額和使用紀錄、商店購買紀錄、聲音同意紀錄、遭拒絕或失敗的虛擬形象請求的安全檢查紀錄，以及稽核紀錄。這些紀錄基於會計、防範詐欺和法律義務的需要而保留，沒有固定的刪除日期。",
          "如果你曾透過 Apple 或 Google 登入，Kokage Cloud 還會保留一個由你在 Apple 或 Google 的 ID 單向轉換而成的值，用來記錄該 Apple 或 Google 帳號已經領取過首次登入贈送的言の葉。這個值既不包含 ID 本身，也不包含你的電子郵件地址。由於它在帳戶刪除後仍會保留，用同一個 Apple 或 Google 帳號再次登入時，新帳戶不會再獲得首次登入贈送的言の葉。",
          "如果你曾透過 Apple 或 Google 登入，Kokage Cloud 還會保留你的帳戶領取每日免費額度的日期，以及當天第一次請求的時間。為了讓每日免費額度每天只發放一次，由你在 Apple 或 Google 的 ID 單向轉換而成的值會保留到當天結束。",
          "AI 模型供應商、App Store、Google Play、RevenueCat 所持有的資料以及已送出的檢舉，依循各服務本身的保留規則。",
        ],
      },
      {
        id: "network",
        title: "模型下載與外部連線",
        paragraphs: [
          "當你下載模型或查看公開模型時，下載伺服器會收到所請求的檔案路徑以及 IP 位址等標準連線資訊，不包含任何對話或媒體內容。取消下載會刪除所有不完整的檔案。",
          "App 不包含任何廣告、分析工具或自動當機回報。",
        ],
        items: [
          {
            title: "來自 Hugging Face 的模型",
            body: "查看或下載公開模型時，會從 Hugging Face 及其傳遞伺服器取得儲存庫詳細資料，以及模型或語音檔案。",
            link: {
              href: "https://huggingface.co/privacy",
              label: "Hugging Face 隱私權政策",
            },
          },
          {
            title: "來自 GitHub 的聲音和字典檔案",
            body: "在初始設定過程中，App 可能會從 GitHub 的公開發行版本下載裝置端聲音和字典檔案，GitHub 會像其他下載伺服器一樣收到標準連線資料。",
            link: {
              href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
              label: "GitHub 隱私聲明",
            },
          },
          {
            title: "VRM 檔案",
            body: "內建角色以及從你的裝置匯入的 VRM 檔案不需要網路連線。透過 HTTPS 連結匯入 VRM 時，只會連線到你指定的伺服器。Kokage 會在 App 的私有儲存空間中儲存一份經過驗證的副本，且不會記錄原始檔案路徑或 URL。",
          },
        ],
      },
      {
        id: "reports",
        title: "檢舉不當回覆或濫用行為",
        paragraphs: [
          "透過 App 內的「檢舉」選項，你可以檢舉冒犯性的 AI 回覆，或在聲音建立畫面檢舉聲音濫用。檢舉前你可以查看將要傳送的內容、選擇原因，並可選擇加入簡短備註。檢舉會透過 Formspark 送出。",
          "檢舉只會傳送目錄中的模型或範本 ID、App 版本、格式版本、為該檢舉隨機產生的參考編號、你選擇的原因、所選的回覆（若為聲音濫用，則為固定的主旨），以及你選填的備註。參考編號僅用於識別該檢舉本身，而非你的裝置或帳戶，且不會附加任何提示詞、聊天紀錄、音訊或圖片（但被檢舉的回覆文字本身可能包含你對話中的細節）。",
        ],
        items: [
          {
            title: "檢舉的儲存與刪除要求",
            body: "已送出的檢舉會保存在 Formspark 和我們的支援信箱中，直到我們將其刪除；沒有固定的保留期限，解除安裝 App 也不會移除已送出的檢舉。如需要求刪除，請將 App 中顯示的參考編號寄至 user_support@orcalogy.com，我們會從 Formspark 和我們的信箱中刪除該檢舉（服務供應商備份中的副本依循各供應商的備份週期）。",
            link: {
              href: "https://formspark.io/legal/privacy-policy/",
              label: "Formspark 隱私權政策",
            },
          },
        ],
      },
      {
        id: "permissions",
        title: "裝置權限與本機儲存保護",
        paragraphs: [
          "相機、麥克風、Apple 家庭和通知權限只會在你使用相應功能時才要求。",
          "當你為訊息或新的虛擬形象拍照時，Kokage 會要求相機權限；即使不授予權限，你也可以繼續用文字聊天。從相簿選擇照片時會開啟系統的照片挑選器，Kokage 只會讀取你選擇的那張照片。",
          "在語音輸入或複製聲音錄音之前，Kokage 會要求麥克風權限。如果你拒絕，仍可使用文字聊天，App 會提供重試選項或前往系統設定的連結。",
          "本機資料儲存在受作業系統保護的 App 私有儲存空間中（不另設 App 內的加密密碼）。",
          "為了保護你的隱私，在 Android 上，App 資料不會包含在系統備份和裝置間的資料移轉中；在 iPhone 和 iPad 上，私有儲存空間不會包含在備份中（這不會限制第三方電腦備份工具）。",
          "如需從裝置上清除所有剩餘的 App 資料，請在裝置設定中解除安裝 Kokage。",
        ],
      },
      {
        id: "website",
        title: "關於本網站",
        paragraphs: [
          "本網站不使用使用者帳戶、聯絡表單、分析工具、廣告或追蹤 Cookie。",
        ],
        items: [
          {
            title: "語言設定",
            body: "第一次造訪時，本網站會檢查你瀏覽器的語言設定；只有在你手動切換語言時，才會在本機儲存空間的 kokage-language 下儲存所選的語言代碼（「en」「ja」「zh-hans」或「zh-hant」）。清除瀏覽器的網站資料即可將其刪除。",
          },
          {
            title: "網頁傳遞",
            body: "當你瀏覽本網站時，主機伺服器會收到 IP 位址、請求的網頁、時間戳記和瀏覽器標頭等標準請求資訊，並可能依據主機服務商的條款保留營運或安全紀錄。",
          },
          {
            title: "Google Fonts",
            body: "本網站從 Google Fonts 載入 Zen Maru Gothic 字型，Google Fonts 會收到提供該字型所需的標準請求資料。",
            link: {
              href: "https://developers.google.com/fonts/faq/privacy",
              label: "Google Fonts 隱私權資訊",
            },
          },
        ],
      },
      {
        id: "changes",
        title: "更新與聯絡方式",
        paragraphs: [
          "如果我們的資料處理方式有所變更，我們將更新本頁及上方的最後更新日期。",
          "聯絡方式：user_support@orcalogy.com。",
        ],
      },
    ],
    backHomeLabel: "返回 Kokage",
  },
  support: {
    meta: {
      title: "支援 | Kokage",
      description:
        "如何下載 Kokage、遇到問題時的實用提示、管理 Kokage Cloud 和言の葉、裝置上的資料，以及如何與我們聯絡。",
    },
    eyebrow: "Kokage 支援",
    title: "Kokage 支援",
    lede: "下載連結、常見問題排解與聯絡我們。",
    highlightsLabel: "快速指南",
    highlights: [
      "App Store（iPhone 和 iPad）與 Google Play（Android）免費下載",
      "語音、相機或雲端無法使用時，仍可隨時輸入文字聊天",
      "寄送郵件時請勿附上私人對話、錄音、照片或 VRM 檔案",
      "支援團隊無法遠端查看、還原或刪除你裝置上的資料",
    ],
    contentsLabel: "本頁內容",
    sections: [
      {
        id: "availability",
        title: "下載 Kokage",
        paragraphs: [
          "請從官方 App 商店免費下載。App Store 版（iPhone 和 iPad）與 Google Play 版（Android）皆支援免費裝置端聊天與選用 Kokage Cloud 功能。",
        ],
        items: [
          {
            title: "iPhone 和 iPad",
            body: "在 App Store 免費下載。",
            link: {
              href: storeListings.appStore,
              label: "在 App Store 查看",
            },
          },
          {
            title: "Android",
            body: "在 Google Play 免費下載。",
            link: {
              href: storeListings.googlePlay,
              label: "在 Google Play 查看",
            },
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "常見問題排解",
        paragraphs: [
          "聊天發生問題時，輸入框上方會顯示簡短提示，並保留你正在輸入的草稿。",
        ],
        items: [
          {
            title: "裝置端模型無法啟動",
            body: "請在設定中確認模型下載完成且有足夠儲存空間；記憶體吃緊時切換為推薦模型。",
          },
          {
            title: "語音、相機或 3D 顯示無法使用",
            body: "隨時可以繼續文字聊天。請重試語音輸入，或在系統設定中確認已開啟麥克風與相機權限。",
          },
          {
            title: "Kokage Cloud 暫停或正在暖機",
            body: "請檢查網路與設定中的言の葉餘額。閒置後的首筆語音或動作請求可能需約 1 分鐘暖機，失敗的製作不扣費。",
          },
        ],
      },
      {
        id: "kokage-cloud",
        title: "Kokage Cloud 帳戶與言の葉",
        paragraphs: [
          "在「設定 → Kokage Cloud」中使用 Apple（iPhone 和 iPad）或 Google 登入，即可跨裝置同步言の葉、聲音和虛擬形象。",
          "如需刪除，可在設定中選擇「刪除 Kokage Cloud 帳戶」；剩餘言の葉將作廢，本機角色與對話維持不變。",
        ],
      },
      {
        id: "permissions",
        title: "相機和麥克風權限",
        paragraphs: [
          "僅在拍照時要求相機權限，僅在語音輸入或複製聲音前要求麥克風權限。若不再出現提示，請先在系統設定中檢查權限。",
        ],
      },
      {
        id: "local-data",
        title: "你的資料與隱私權",
        paragraphs: [
          "本機對話、記憶、角色和 VRM 檔案留在裝置上，雲端功能僅傳送隱私權政策所述內容。App 內可隨時刪除，解除安裝即可清除所有本機資料。",
        ],
      },
      {
        id: "contact",
        title: "聯絡我們",
        paragraphs: [
          "請寄信至 user_support@orcalogy.com，註明裝置、系統、App 版本及簡要說明（可在「設定 → 顯示詳細資訊」複製）。請勿附加私人對話、音訊、照片或 VRM 檔案；我們無法承諾特定回覆時間。",
          "檢舉不當回覆或聲音濫用請使用 App 內「檢舉」功能；如需刪除檢舉，請將參考編號寄至上述信箱。",
        ],
      },
    ],
    contactLabel: "寄送電子郵件給 Kokage 支援",
    contactEmail: "user_support@orcalogy.com",
    cloudLinkLabel: "Kokage Cloud 帳戶",
    privacyLinkLabel: "閱讀隱私權政策",
    backHomeLabel: "返回 Kokage",
  },
  status: {
    title: "取得 Kokage",
    platforms: [
      {
        name: "iPhone 和 iPad",
        link: {
          href: storeListings.appStore,
          label: "在 App Store 查看",
        },
      },
      {
        name: "Android",
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
    privacyLink: "隱私權政策",
    supportLink: "支援",
    xLink: "Kokage 的 X 帳號",
    discordLink: "Kokage Discord 伺服器",
    navigationLabel: "頁尾導覽",
  },
} satisfies SiteCopy;
