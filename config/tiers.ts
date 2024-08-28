import { Tier, TiersEnum } from "@/types/pricing";

import { siteConfig } from "@/config/site";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Free",
    price: "Free",
    href: siteConfig.openSourceURL || "#",
    description:
      "Experience AI browsing without any cost",
    features: [
      "Use all the features for free",
      "Basic prompt library access",
      "Set up to 10 custom prompt-switching rules",
      "Use your own API KEY to access various AI model services",
    ],
    buttonText: "Install Now",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "AutoSwitchPrompt Pro",
    href: siteConfig.authors[0].twitter || "#",
    description: "Enhance Your Web Browsing Experience.",
    price: "$3.99 / month",
    features: [
      "X,000,000 token usage quota per month",
      "Set up to 100 custom prompt-switching rules",
      "Auto switch to the best prompt based on webpage",
      "Priority access to new features and updates",
      "Includes all free version features",
    ],
    buttonText: "Contact us",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "免费版",
    price: "免费",
    href: siteConfig.openSourceURL || "#",
    description: "体验无缝衔接的AI智能浏览",
    features: [
      "无限制使用AutoSwitchPrompt核心功能",
      "访问基础提示库",
      "设置最多10条自定义提示切换规则",
      "使用您自己的API密钥访问各种AI模型服务",
    ],
    buttonText: "立即安装",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "AutoSwitchPrompt Pro",
    href: siteConfig.authors[0].twitter || "#",
    description: "无缝智能化您的网页浏览体验",
    price: "$3.99 / month",
    features: [
      "每月X,000,000 token使用配额",
      "设置多达100条自定义提示切换规则",
      "根据网页内容自动切换最佳提示",
      "优先访问新功能和更新",
      "包含所有免费版功能",
    ],
    buttonText: "联系我们",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "無料プラン",
    price: "無料",
    href: siteConfig.openSourceURL || "#",
    description: "AI駆動のブラウジングを無料で体験",
    features: [
      "すべての機能を無料で利用可能",
      "基本的なプロンプトライブラリにアクセス",
      "最大10個のカスタムプロンプト切り替えルールを設定可能",
      "各種AIモデルサービスに自前のAPIキーでアクセス可能",
    ],
    buttonText: "今すぐインストール",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "AutoSwitchPrompt Pro",
    href: siteConfig.authors[0].twitter || "#",
    description: "シームレスにウェブ閲覧体験を最適化",
    price: "月額3.99ドル",
    features: [
      "月間X,000,000トークン使用枠",
      "最大100個のカスタムプロンプト切り替えルールを設定する",
      "ウェブページの内容に基づき最適なプロンプトに自動切替",
      "新機能とアップデートへの優先アクセス",
      "無料版の全機能を含む",
    ],
    buttonText: "お問い合わせ",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "الخطة المجانية",
    price: "هذا الامتداد مجاني",
    href: siteConfig.openSourceURL || "#",
    description: "استمتع بتجربة تصفح مدعومة بالذكاء الاصطناعي بدون أي تكلفة",
    features: [
      "استخدم جميع الميزات مجانًا",
      "قم بإعداد ما يصل إلى 100 قاعدة مخصصة لتبديل الإرشادات",
      "الوصول إلى مكتبة الإشارات الأساسية",
      "إعداد ما يصل إلى 10 قواعد مخصصة لتبديل الإشارات",
      "استخدم مفتاح API الخاص بك للوصول إلى خدمات نماذج الذكاء الاصطناعي المختلفة",
    ],
    buttonText: "التثبيت الآن",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "AutoSwitchPrompt Pro",
    href: siteConfig.authors[0].twitter || "#",
    description: "تحسين تجربة تصفح الويب بسلاسة",
    price: "$3.99 / month",
    features: [
      "حصة استخدام 2,000,000 رمز شهريًا",
      "تبديل تلقائي لأفضل إشارة بناءً على محتوى صفحة الويب",
      "أولوية الوصول إلى الميزات الجديدة والتحديثات",
      "يشمل جميع ميزات النسخة المجانية",
    ],
    buttonText: "اتصل بنا",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Gratuito",
    price: "Esta extensión es gratuita",
    href: siteConfig.openSourceURL || "#",
    description:
      "Experimenta la navegación potenciada por IA sin costo alguno.",
    features: [
      "Usa todas las funciones de forma gratuita",
      "Acceso a la biblioteca básica de prompts",
      "Configura hasta 10 reglas personalizadas de cambio de prompts",
      "Usa tu propia clave API para acceder a varios servicios de modelos de IA",
    ],
    buttonText: "Instalar Ahora",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "AutoSwitchPrompt Pro",
    href: siteConfig.authors[0].twitter || "#",
    description: "Mejora tu experiencia de navegación web sin problemas",
    price: "$3.99 / month",
    features: [
      "Cuota de uso de X,000,000 tokens por mes",
      "Configura hasta 100 reglas personalizadas de cambio de indicaciones",
      "Cambio automático al mejor prompt según el contenido de la página web",
      "Acceso prioritario a nuevas funciones y actualizaciones",
      "Incluye todas las funciones de la versión gratuita",
    ],
    buttonText: "Contáctanos",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Бесплатный план",
    price: "Это расширение бесплатно",
    href: siteConfig.openSourceURL || "#",
    description:
      "Испытайте просмотр с поддержкой ИИ без каких-либо затрат",
    features: [
      "Используйте все функции бесплатно",
      "Доступ к базовой библиотеке подсказок",
      "Настройка до 10 пользовательских правил переключения подсказок",
      "Используйте собственный API-ключ для доступа к различным сервисам ИИ-моделей",
    ],
    buttonText: "Установить сейчас",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "AutoSwitchPrompt Pro",
    href: siteConfig.authors[0].twitter || "#",
    description: "Плавно оптимизируйте ваш опыт веб-серфинга",
    price: "$3.99 / month",
    features: [
      "Ежемесячная квота X,000,000 токенов",
      "Настройте до 100 пользовательских правил переключения подсказок",
      "Автоматическое переключение на лучший промпт на основе содержания веб-страницы",
      "Приоритетный доступ к новым функциям и обновлениям",
      "Включает все функции бесплатной версии",
    ],
    buttonText: "Связаться с нами",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU
}