export type Locale = "ja" | "en";

const ja = {
  header: {
    nav: [
      { href: "#message", label: "代表挨拶" },
      { href: "#strengths", label: "私たちの強み" },
      { href: "#services", label: "サービス" },
      { href: "#global", label: "グローバルデリバリー" },
      { href: "#profile", label: "会社概要" },
    ],
    contact: "お問い合わせ",
    switchTo: "EN",
  },
  hero: {
    eyebrow: "J1 Business Solutions · Global SAP Consulting",
    headline1: "変革の時代を勝ち抜く、",
    headline2: "確かな経験と",
    highlight: "グローバル",
    headline3: "な視点を。",
    mono: "Proven Expertise and Global Vision for Winning in the Age of Transformation.",
    paragraph:
      "日本企業の業務理解と、グローバルなSAPケイパビリティを融合。構想策定から導入・運用まで、企業変革を一貫して支援します。",
    cta1: "SAP支援について相談する",
    cta2: "代表挨拶を見る",
    points: [
      { en: "UPSTREAM", jp: "上流工程・PMO" },
      { en: "GLOBAL", jp: "英語対応・海外拠点連携" },
      { en: "SAP S/4", jp: "SAP導入コンサルティング" },
    ],
    bottom: "SAP Consulting / PMO / Global Delivery / Resource Solutions",
    scroll: "SCROLL",
    mapCaption: "Tokyo HQ ⇄ Pune Delivery Center — Management Map",
  },
  message: {
    index: "02",
    en: "Message from the President",
    title1: "複雑なプロジェクトを調和させる",
    title2: "「コンダクター」の存在",
    p1: "急速なビジネス変革が求められる現代。AIをはじめとする先進技術は不可欠なツールですが、それらをビジネスの成功へ導くには、依然として「人」の知見と経験がカギとなります。私は、複雑なプロジェクトを調和させる「コンダクター」が必要だと考えています。",
    p2: "J1BSは、多様な業界・プロジェクトで培ったグローバルな視点と、これまでのネットワークを活かし、海外拠点との連携を含めた柔軟なリソース提供が可能です。クライアント様の成功を第一に考える「伴走者」として、確かな価値を提供してまいります。",
    boxLabel: "Message in English",
    box1: "In an era of rapid business transformation, advanced technologies like AI are essential tools. However, achieving success still requires the insights and experiences of “people.” I believe there is a critical need for a “conductor” to harmonize complex projects.",
    box2: "With an extensive background across industries and a global network, J1BS offers flexible resources, including global collaboration. We act as a “partner” whose priority is our clients’ success.",
    name: "三﨑 早人",
    role: "HAYATO MISAKI · 代表取締役",
  },
  strengths: {
    index: "03",
    en: "Our Strengths",
    title: "私たちの強み",
    description:
      "大手コンサルティングファーム・SIerとのパートナーシップに最適な、経験と実行力。J1BSは「確かな経験」と「グローバルな視点」で、クライアントの変革を支えます。",
    items: [
      {
        no: "01",
        en: "UPSTREAM EXPERTISE",
        title: "確かな上流工程の実績",
        body: "SAP S/4導入における要件定義や、システムソリューションへ業務をフィットさせる柔軟なアプローチ。構想段階から現場を理解したコンサルティングを提供します。",
      },
      {
        no: "02",
        en: "GLOBAL CAPABILITIES",
        title: "グローバル対応力とネットワーク",
        body: "英語対応可能な体制と、国内外の多様なリソースを柔軟にアサイン。日本と海外をつなぐクロスボーダーなプロジェクト体制を実現します。",
      },
      {
        no: "03",
        en: "EXPERIENCED CONDUCTORS",
        title: "プロジェクトを成功へ導くコンダクター",
        body: "経験豊富なコンサルタントが、PMOやチェンジマネジメントとしてプロジェクトを円滑に推進。複雑なステークホルダーを調和させます。",
      },
    ],
  },
  services: {
    index: "04",
    en: "Our Services",
    title: "サービス内容",
    description: "上流工程から運用まで、企業変革に必要なサービスを一貫して提供します。",
    items: [
      {
        no: "01",
        en: "IT Strategy & Business Transformation",
        jp: "IT戦略・ビジネス変革",
        items: [
          "IT戦略・構想策定支援",
          "業務改革（BPR）支援",
          "ソリューション導入ベンダー評価・選定支援",
          "RFP作成代行支援",
        ],
      },
      {
        no: "02",
        en: "Enterprise Solutions — SAP S/4",
        jp: "エンタープライズソリューション",
        items: [
          "SAP S/4導入コンサルティング支援",
          "要件定義・業務フィット支援",
          "Fit-to-Standard による導入アプローチ",
          "グローバルロールアウト支援",
        ],
      },
      {
        no: "03",
        en: "Project Management & PMO",
        jp: "プロジェクトマネジメント",
        items: [
          "プロジェクトマネジメント支援（PMO）",
          "チェンジマネジメント支援",
          "IT組織変革・ITサービスプロセス運用改善",
          "プロジェクト品質・ガバナンス管理",
        ],
      },
      {
        no: "04",
        en: "Resource Solutions",
        jp: "リソースソリューション",
        items: [
          "プロフェッショナル人材（コンサルタント・エンジニア）の紹介・派遣",
          "海外拠点との連携による柔軟なリソースアサイン",
          "オフショア・ニアショア体制構築支援",
        ],
      },
    ],
  },
  global: {
    index: "05",
    en: "Japan × India — Global Delivery",
    title1: "東京とインド・プネをつなぐ、",
    title2: "グローバルデリバリーモデル",
    description:
      "日本企業のビジネス要件と、インド・プネのグローバルSAPケイパビリティを融合。構想策定から導入・運用まで、クロスボーダーで一貫した支援を実現します。",
    flow: [
      {
        step: "01",
        title: "日本",
        sub: "業務要件・経営課題",
        desc: "日本企業の業務理解と、変革のドライバーとなる要件を精緻に定義。",
      },
      {
        step: "02",
        title: "コンサルティング",
        sub: "上流工程・PMO",
        desc: "経験豊富なコンサルタントが構想策定からプロジェクトを指揮。",
      },
      {
        step: "03",
        title: "SAP / エンタープライズ",
        sub: "導入・フィット",
        desc: "SAP S/4をはじめ、Fit-to-Standardによる確実な導入を推進。",
      },
      {
        step: "04",
        title: "インド / グローバル",
        sub: "プネ拠点・デリバリー",
        desc: "インド・プネのSAPケイパビリティを活用し、導入・運用を継続支援。",
      },
    ],
    managementEyebrow: "Management Structure — 管理・統制体制",
    managementTitle1: "2つの拠点を、1つの",
    managementTitle2: "品質基準で統制",
    offices: [
      {
        tag: "TOKYO HQ",
        name: "東京本社",
        en: "J1 Business Solutions Co., Ltd.",
        address:
          "〒163-1302 東京都新宿区西新宿6丁目5番1号 新宿アイランドタワー2階",
        roles: ["経営統括・プロジェクト統制", "上流工程 / PMO", "クライアントとの一元的な窓口"],
      },
      {
        tag: "PUNE CENTER",
        name: "プネ拠点",
        en: "India Global Delivery Center",
        address: "インド・マハラシュトラ州プネ（Pune, Maharashtra, India）",
        roles: ["SAP導入・開発・保守", "グローバルデリバリー実行", "スケーラブルなリソース供給"],
      },
    ],
    lines: [
      {
        title: "拠点間の統制ライン",
        body: "東京本社が全体のプロジェクト統制を担い、プネ拠点のデリバリー品質を一元的にマネジメントします。",
      },
      {
        title: "毎日の進捗同期",
        body: "日本品質の基準で、日次の進捗・課題・リスクを確実に共有し、クロスボーダーでの齟齬を防ぎます。",
      },
    ],
    bandEyebrow: "Global Campus Network — Tokyo × Pune",
    bandTitle1: "日本品質のマネジメントと、",
    bandTitle2: "インドのSAPケイパビリティを",
    bandHighlight: "ひとつの体制",
    bandTitle3: "に。",
    bandBody:
      "東京本社が全体を統制し、プネ拠点がSAPデリバリーを実行する。国境を越えてつながる2つの拠点が、確かな品質で企業変革を支えます。",
    campusPoints: [
      { value: "2", label: "クロスボーダー拠点", en: "GLOBAL LOCATIONS" },
      { value: "TOKYO", label: "統括・上流工程", en: "MANAGEMENT & PMO" },
      { value: "PUNE", label: "SAPデリバリー", en: "DELIVERY CENTER" },
    ],
    advantages: [
      {
        title: "日本語での確実なコミュニケーション",
        body: "日本側の要件とグローバル側のデリバリーを、言葉と文脈のズレなく橋渡しします。",
      },
      {
        title: "拡張可能なSAPデリバリー体制",
        body: "プロジェクト規模やフェーズに応じて、国内外のリソースを柔軟にスケール。",
      },
      {
        title: "コストとケイパビリティの両立",
        body: "インドは単なる「安価なオフショア先」ではなく、高い技術力を持つSAPケイパビリティセンターです。",
      },
      {
        title: "長期にわたるサポート体制",
        body: "導入後の運用・改善まで見据えた、継続的なパートナーシップを構築します。",
      },
    ],
  },
  cases: {
    index: "06",
    en: "Case Studies",
    title: "実績・事例",
    description: "プロジェクト実績・導入事例につきましては、順次掲載してまいります。",
    badge: "SOON",
    heading: "実績・事例は準備中です",
    body: "プロジェクト実績・導入事例につきましては、順次掲載してまいります。個別のご相談・詳細につきましては、直接お問い合わせください。",
    cta: "お問い合わせへ",
  },
  profile: {
    index: "07",
    en: "Company Profile",
    title: "会社概要",
    rows: [
      {
        label: "会社名",
        value1: "J1ビジネスソリューションズ株式会社",
        value2: "J1 Business Solutions Co., Ltd.",
      },
      {
        label: "代表取締役",
        value1: "三﨑 早人",
        value2: "Hayato Misaki",
      },
      {
        label: "所在地",
        value1: "〒163-1302 東京都新宿区西新宿6丁目5番1号 新宿アイランドタワー2階",
        value2: "Shinjuku Island Tower 2F, 6-5-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo 163-1302",
      },
      {
        label: "電話番号",
        value1: "03-5050-6007",
        value2: "03-5050-6007",
      },
      {
        label: "事業内容",
        value1: "業務コンサルティング / コンサルタント・エンジニア派遣",
        value2: "Business Consulting / Consultant & Engineer Staffing",
      },
      {
        label: "Web / Email",
        value1: "http://j1bs.com / info@j1bs.com",
        value2: "http://j1bs.com / info@j1bs.com",
      },
    ],
    note: "※ 当サイトはJ1ビジネスソリューションズ株式会社の公式コーポレートサイトです。",
  },
  contact: {
    index: "08",
    en: "Contact",
    title: "お問い合わせ",
    description:
      "SAPプロジェクト、グローバルデリバリー、SAP人材・技術支援について、お気軽にご相談ください。初回のご相談は無料です。",
    emailLabel: "Email",
    phoneLabel: "Phone",
    addressLabel: "Address",
    address:
      "〒163-1302 東京都新宿区西新宿6丁目5番1号\n新宿アイランドタワー2階",
    form: {
      name: "お名前",
      company: "会社名",
      email: "メールアドレス",
      message: "お問い合わせ内容",
      namePh: "山田 太郎",
      companyPh: "株式会社○○",
      emailPh: "you@example.com",
      messagePh:
        "SAP導入支援、PMO、グローバルデリバリー、人材派遣など、ご相談内容をご記入ください。",
      submit: "送信する（メールアプリが起動します）",
      privacy:
        "フォームはお使いのメールアプリで info@j1bs.com 宛に送信されます。個人情報はお問い合わせ対応の目的のみに使用します。",
      sentTitle: "メールアプリが起動しました",
      sentBody:
        "送信内容をご確認の上、そのままお送りください。ご連絡を心よりお待ちしております。",
      mailSubject: "【お問い合わせ】",
      mailHeader: "J1BS お問い合わせフォーム",
      mailName: "お名前",
      mailCompany: "会社名",
      mailEmail: "メールアドレス",
      mailContent: "【お問い合わせ内容】",
    },
  },
  footer: {
    description:
      "変革の時代を勝ち抜く、確かな経験とグローバルな視点を。SAPコンサルティング・PMO・グローバルデリバリーで、企業変革を支援します。",
    company: "Company",
    contact: "Contact",
    navMessage: "代表挨拶",
    navStrengths: "私たちの強み",
    navServices: "サービス内容",
    navProfile: "会社概要",
    address: "〒163-1302\n東京都新宿区西新宿6丁目5番1号\n新宿アイランドタワー2階",
    copyright: "© {year} J1 Business Solutions Co., Ltd. All Rights Reserved.",
    backToTop: "Back to top",
  },
  map: {
    sea1: "日本海",
    sea2: "太平洋",
    sea3: "ベンガル湾",
    sea4: "アラビア海",
    country1: "インド",
    country2: "日本",
    tokyo: "東京本社",
    pune: "プネ拠点",
    legend1: "東京本社（統括・PMO）",
    legend2: "プネ拠点（デリバリーセンター）",
    panelTag: "JAPAN × INDIA NETWORK",
  },
};

export type Dict = typeof ja;

const en: Dict = {
  header: {
    nav: [
      { href: "#message", label: "Message" },
      { href: "#strengths", label: "Our Strengths" },
      { href: "#services", label: "Services" },
      { href: "#global", label: "Global Delivery" },
      { href: "#profile", label: "Company" },
    ],
    contact: "Contact",
    switchTo: "日本語",
  },
  hero: {
    eyebrow: "J1 Business Solutions · Global SAP Consulting",
    headline1: "Winning the age of",
    headline2: "transformation with proven",
    highlight: "global",
    headline3: "expertise & vision.",
    mono: "Proven Expertise and Global Vision for Winning in the Age of Transformation.",
    paragraph:
      "We combine deep understanding of Japanese business with global SAP capability — supporting enterprise transformation end-to-end, from strategy to implementation and operations.",
    cta1: "Discuss Your SAP Project",
    cta2: "President's Message",
    points: [
      { en: "UPSTREAM", jp: "Upstream & PMO" },
      { en: "GLOBAL", jp: "English Support · Global Delivery" },
      { en: "SAP S/4", jp: "SAP Implementation Consulting" },
    ],
    bottom: "SAP Consulting / PMO / Global Delivery / Resource Solutions",
    scroll: "SCROLL",
    mapCaption: "Tokyo HQ ⇄ Pune Delivery Center — Management Map",
  },
  message: {
    index: "02",
    en: "Message from the President",
    title1: "A “conductor” that harmonizes",
    title2: "complex projects",
    p1: "In an era of rapid business transformation, advanced technologies like AI are essential tools. Yet success still comes down to human insight and experience. I believe complex projects need a “conductor” to bring them into harmony.",
    p2: "Drawing on a global perspective and a network built across industries and projects, J1BS delivers flexible resources — including collaboration with overseas bases. As a “partner” who puts client success first, we provide tangible value.",
    boxLabel: "日本語のメッセージ",
    box1: "急速なビジネス変革が求められる現代。AIをはじめとする先進技術は不可欠なツールですが、それらをビジネスの成功へ導くには、依然として「人」の知見と経験がカギとなります。私は、複雑なプロジェクトを調和させる「コンダクター」が必要だと考えています。",
    box2: "J1BSは、多様な業界・プロジェクトで培ったグローバルな視点と、これまでのネットワークを活かし、海外拠点との連携を含めた柔軟なリソース提供が可能です。クライアント様の成功を第一に考える「伴走者」として、確かな価値を提供してまいります。",
    name: "Hayato Misaki",
    role: "HAYATO MISAKI · PRESIDENT",
  },
  strengths: {
    index: "03",
    en: "Our Strengths",
    title: "Our Strengths",
    description:
      "The experience and execution capability ideal for partnerships with major consulting firms and SIers. J1BS supports client transformation with proven expertise and a global perspective.",
    items: [
      {
        no: "01",
        en: "UPSTREAM EXPERTISE",
        title: "Proven Upstream Expertise",
        body: "Flexible consulting from the concept stage with deep understanding of the field — requirements definition for SAP S/4 implementations and fitting business processes to standard solutions.",
      },
      {
        no: "02",
        en: "GLOBAL CAPABILITIES",
        title: "Global Capabilities & Network",
        body: "English-capable organization with flexible assignment of diverse domestic and international resources, enabling cross-border delivery between Japan and overseas.",
      },
      {
        no: "03",
        en: "EXPERIENCED CONDUCTORS",
        title: "Conductors Who Drive Success",
        body: "Experienced consultants drive projects smoothly as PMO and change management, harmonizing complex stakeholders.",
      },
    ],
  },
  services: {
    index: "04",
    en: "Our Services",
    title: "Services",
    description:
      "Everything needed for enterprise transformation — from upstream consulting to operations — delivered as one integrated service.",
    items: [
      {
        no: "01",
        en: "IT Strategy & Business Transformation",
        jp: "IT戦略・ビジネス変革",
        items: [
          "IT strategy & concept formulation support",
          "Business process re-engineering (BPR) support",
          "Vendor evaluation & selection support",
          "RFP preparation support",
        ],
      },
      {
        no: "02",
        en: "Enterprise Solutions — SAP S/4",
        jp: "エンタープライズソリューション",
        items: [
          "SAP S/4 implementation consulting",
          "Requirements definition & business fit support",
          "Fit-to-Standard implementation approach",
          "Global rollout support",
        ],
      },
      {
        no: "03",
        en: "Project Management & PMO",
        jp: "プロジェクトマネジメント",
        items: [
          "Project management support (PMO)",
          "Change management support",
          "IT organization transformation & process improvement",
          "Project quality & governance management",
        ],
      },
      {
        no: "04",
        en: "Resource Solutions",
        jp: "リソースソリューション",
        items: [
          "Placement of professional consultants & engineers",
          "Flexible resource assignment via overseas partnerships",
          "Offshore / nearshore model support",
        ],
      },
    ],
  },
  global: {
    index: "05",
    en: "Japan × India — Global Delivery",
    title1: "A delivery model connecting ",
    title2: "Tokyo and Pune, India",
    description:
      "Combining Japanese business requirements with global SAP capability from Pune, India — seamless cross-border support from concept to implementation and operations.",
    flow: [
      {
        step: "01",
        title: "Japan",
        sub: "Business Requirements & Challenges",
        desc: "Precise definition of business requirements and the drivers of transformation, grounded in deep understanding of Japanese enterprises.",
      },
      {
        step: "02",
        title: "Consulting",
        sub: "Upstream & PMO",
        desc: "Experienced consultants lead projects from concept formulation.",
      },
      {
        step: "03",
        title: "SAP / Enterprise",
        sub: "Implementation & Fit",
        desc: "Reliable implementation with Fit-to-Standard, including SAP S/4.",
      },
      {
        step: "04",
        title: "India / Global",
        sub: "Pune Delivery Center",
        desc: "Ongoing implementation and operations support leveraging SAP capability from Pune, India.",
      },
    ],
    managementEyebrow: "Management Structure — 管理・統制体制",
    managementTitle1: "One quality standard,",
    managementTitle2: "two connected locations",
    offices: [
      {
        tag: "TOKYO HQ",
        name: "Tokyo HQ",
        en: "J1 Business Solutions Co., Ltd.",
        address:
          "Shinjuku Island Tower 2F, 6-5-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo 163-1302",
        roles: ["Corporate & project control", "Upstream / PMO", "Single point of contact"],
      },
      {
        tag: "PUNE CENTER",
        name: "Pune Center",
        en: "India Global Delivery Center",
        address: "Pune, Maharashtra, India",
        roles: ["SAP implementation, dev & maintenance", "Global delivery execution", "Scalable resource supply"],
      },
    ],
    lines: [
      {
        title: "Cross-office control line",
        body: "Tokyo HQ governs overall project control, managing delivery quality at the Pune center under a single quality standard.",
      },
      {
        title: "Daily progress synchronization",
        body: "Progress, issues, and risks are shared daily under Japanese quality standards, preventing cross-border gaps.",
      },
    ],
    bandEyebrow: "Global Campus Network — Tokyo × Pune",
    bandTitle1: "Japanese-quality management and",
    bandTitle2: "India's SAP capability in",
    bandHighlight: "one organization",
    bandTitle3: ".",
    bandBody:
      "Tokyo HQ governs the whole; Pune executes SAP delivery. Two connected locations across borders support enterprise transformation with reliable quality.",
    campusPoints: [
      { value: "2", label: "Global Locations", en: "GLOBAL LOCATIONS" },
      { value: "TOKYO", label: "Management & PMO", en: "MANAGEMENT & PMO" },
      { value: "PUNE", label: "SAP Delivery", en: "DELIVERY CENTER" },
    ],
    advantages: [
      {
        title: "Reliable communication in Japanese",
        body: "Bridging Japanese requirements and global delivery without gaps in language or context.",
      },
      {
        title: "Scalable SAP delivery",
        body: "Flexibly scaling domestic and international resources to match project size and phase.",
      },
      {
        title: "Cost and capability in balance",
        body: "India is not merely a “low-cost offshore” — it is a high-capability SAP delivery center.",
      },
      {
        title: "Long-term support",
        body: "Building lasting partnerships that look beyond implementation to operations and continuous improvement.",
      },
    ],
  },
  cases: {
    index: "06",
    en: "Case Studies",
    title: "Case Studies",
    description: "Project achievements and case studies will be published progressively.",
    badge: "SOON",
    heading: "Case Studies Coming Soon",
    body: "Project track record and case studies will be published progressively. For individual inquiries and details, please contact us directly.",
    cta: "Contact Us",
  },
  profile: {
    index: "07",
    en: "Company Profile",
    title: "Company Profile",
    rows: [
      {
        label: "Company Name",
        value1: "J1 Business Solutions Co., Ltd.",
        value2: "J1ビジネスソリューションズ株式会社",
      },
      {
        label: "President",
        value1: "Hayato Misaki",
        value2: "三﨑 早人",
      },
      {
        label: "Location",
        value1: "Shinjuku Island Tower 2F, 6-5-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo 163-1302",
        value2: "〒163-1302 東京都新宿区西新宿6丁目5番1号 新宿アイランドタワー2階",
      },
      {
        label: "Phone",
        value1: "03-5050-6007",
        value2: "03-5050-6007",
      },
      {
        label: "Business",
        value1: "Business Consulting / Consultant & Engineer Staffing",
        value2: "業務コンサルティング / コンサルタント・エンジニア派遣",
      },
      {
        label: "Web / Email",
        value1: "http://j1bs.com / info@j1bs.com",
        value2: "http://j1bs.com / info@j1bs.com",
      },
    ],
    note: "※ This is the official corporate website of J1 Business Solutions Co., Ltd.",
  },
  contact: {
    index: "08",
    en: "Contact",
    title: "Contact",
    description:
      "Please feel free to discuss SAP projects, global delivery, and SAP resource support. Initial consultations are free of charge.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    addressLabel: "Address",
    address:
      "Shinjuku Island Tower 2F, 6-5-1 Nishi-Shinjuku,\nShinjuku-ku, Tokyo 163-1302, Japan",
    form: {
      name: "Name",
      company: "Company",
      email: "Email",
      message: "Message",
      namePh: "Taro Yamada",
      companyPh: "Company Inc.",
      emailPh: "you@example.com",
      messagePh:
        "Please describe your inquiry — SAP implementation, PMO, global delivery, staffing, etc.",
      submit: "Send (opens your mail app)",
      privacy:
        "This form opens your mail app addressed to info@j1bs.com. Personal information is used solely to respond to your inquiry.",
      sentTitle: "Your mail app has launched",
      sentBody:
        "Please review the content and send it as is. We look forward to hearing from you.",
      mailSubject: "[Inquiry]",
      mailHeader: "J1BS Contact Form",
      mailName: "Name",
      mailCompany: "Company",
      mailEmail: "Email",
      mailContent: "[Message]",
    },
  },
  footer: {
    description:
      "Proven expertise and global vision for winning in the age of transformation. Supporting enterprise transformation through SAP consulting, PMO, and global delivery.",
    company: "Company",
    contact: "Contact",
    navMessage: "Message",
    navStrengths: "Our Strengths",
    navServices: "Services",
    navProfile: "Company Profile",
    address: "Shinjuku Island Tower 2F,\n6-5-1 Nishi-Shinjuku, Shinjuku-ku,\nTokyo 163-1302, Japan",
    copyright: "© {year} J1 Business Solutions Co., Ltd. All Rights Reserved.",
    backToTop: "Back to top",
  },
  map: {
    sea1: "Sea of Japan",
    sea2: "Pacific Ocean",
    sea3: "Bay of Bengal",
    sea4: "Arabian Sea",
    country1: "India",
    country2: "Japan",
    tokyo: "Tokyo HQ",
    pune: "Pune Center",
    legend1: "Tokyo HQ (Management & PMO)",
    legend2: "Pune Center (Delivery Center)",
    panelTag: "JAPAN × INDIA NETWORK",
  },
};

export const translations: Record<Locale, Dict> = { ja, en };
