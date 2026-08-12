export type Language = "en" | "fa" | "ps";

export const translations = {
  en: {
    languageName: "English",
    direction: "ltr",

    brand: "QR Studio",
    private: "Private by design",

    eyebrow: "QR CODE GENERATOR",
    title: "QR Code Generator",
    subtitle:
      "Create a high-quality QR code from any URL or text.",
    subtitleSecond:
      "Fast, simple, and processed entirely in your browser.",

    stepOne: "1",
    enterContent: "Enter your content",
    enterContentDescription:
      "Choose what you would like to encode in your QR code.",

    contentLabel: "URL OR TEXT",
    placeholder: "https://example.com",
    characters: "characters",

    generate: "Generate QR Code",
    clear: "Clear",

    stepTwo: "2",
    yourQRCode: "Your QR code",
    qrDescription:
      "Scan it with any compatible camera or QR code reader.",

    qrEmptyTitle: "Your QR code will appear here",
    qrEmptyDescription:
      "Enter some content above to generate your code.",

    qrReady: "QR code ready",

    download: "Download QR Code",
    copy: "Copy Content",
    copied: "Copied",
  },

  fa: {
    languageName: "فارسی",
    direction: "rtl",

    brand: "کیوآر استودیو",
    private: "خصوصی و امن",

    eyebrow: "تولیدکننده کد QR",
    title: "تولیدکننده کد QR",
    subtitle:
      "از هر لینک یا متنی یک کد QR با کیفیت بالا بسازید.",
    subtitleSecond:
      "سریع، ساده و کاملاً در مرورگر شما پردازش می‌شود.",

    stepOne: "۱",
    enterContent: "محتوای خود را وارد کنید",
    enterContentDescription:
      "چیزی را که می‌خواهید در کد QR قرار بگیرد وارد کنید.",

    contentLabel: "لینک یا متن",
    placeholder: "https://example.com",
    characters: "کاراکتر",

    generate: "ساخت کد QR",
    clear: "پاک کردن",

    stepTwo: "۲",
    yourQRCode: "کد QR شما",
    qrDescription:
      "آن را با دوربین یا هر برنامه سازگار با کد QR اسکن کنید.",

    qrEmptyTitle:
      "کد QR شما اینجا نمایش داده می‌شود",
    qrEmptyDescription:
      "برای ساخت کد، ابتدا محتوای خود را در بالا وارد کنید.",

    qrReady: "کد QR آماده است",

    download: "دانلود کد QR",
    copy: "کپی محتوا",
    copied: "کپی شد",
  },

  ps: {
    languageName: "پښتو",
    direction: "rtl",

    brand: "QR سټوډیو",
    private: "خصوصي او خوندي",

    eyebrow: "د QR کوډ جوړوونکی",
    title: "د QR کوډ جوړوونکی",
    subtitle:
      "له هرې لینک یا متن څخه یو لوړ کیفیت QR کوډ جوړ کړئ.",
    subtitleSecond:
      "چټک، ساده او په بشپړه توګه ستاسو په براوزر کې پروسس کېږي.",

    stepOne: "۱",
    enterContent: "خپل معلومات دننه کړئ",
    enterContentDescription:
      "هغه معلومات دننه کړئ چې غواړئ په QR کوډ کې شامل شي.",

    contentLabel: "لینک یا متن",
    placeholder: "https://example.com",
    characters: "حروف",

    generate: "QR کوډ جوړ کړئ",
    clear: "پاکول",

    stepTwo: "۲",
    yourQRCode: "ستاسو QR کوډ",
    qrDescription:
      "دا د هرې سازګارې کمرې یا QR کوډ لوستونکي په وسیله سکین کړئ.",

    qrEmptyTitle:
      "ستاسو QR کوډ به دلته ښکاره شي",
    qrEmptyDescription:
      "د کوډ جوړولو لپاره لومړی خپل معلومات پورته دننه کړئ.",

    qrReady: "QR کوډ چمتو دی",

    download: "QR کوډ ډاونلوډ کړئ",
    copy: "معلومات کاپي کړئ",
    copied: "کاپي شو",
  },
} as const;