import { BsDownload, BsFillGearFill, BsFillLightbulbFill } from "react-icons/bs";

import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

export const FEATURES_EN = [
  {
    title: "STEP 1 - Add to browser",
    content: "Add AutoSwitchPrompt extension to your browser. It's free, privacy-friendly, and ready to enhance your web browsing with smart AI prompts.",
    icon: BsDownload,
  },
  {
    title: "STEP 2 - Customize your prompts",
    content:
      "Set up your favorite AI prompts for for various websites. AutoSwitchPrompt will automatically apply the right prompt for each page you visit.",
    icon: BsFillGearFill,
  },
  {
    title: "STEP 3 - Enjoy smarter browsing",
    content:
      "Experience seamless, context-aware AI assistance across the web, boosting your productivity without any extra effort.",
    icon: BsFillLightbulbFill,
  }
];

export const FEATURES_ZH = [
  {
    title: "步骤 1 - 添加到浏览器",
    content: "一键安装 AutoSwitchPrompt 扩展程序。完全免费，保护隐私，立即提升您的网页浏览体验。",
    icon: BsDownload,
  },
  {
    title: "步骤 2 - 定制您的提示",
    content:
      "轻松设置适用于不同网站的 AI 提示。AutoSwitchPrompt 会根据您浏览的页面自动切换最合适的提示。",
    icon: BsFillGearFill,
  },
  {
    title: "步骤 3 - 尽享智能浏览",
    content:
      "体验智能 AI 助手在各类网站的无缝协作，轻松提升工作效率。",
    icon: BsFillLightbulbFill,
  }
];

export const FEATURES_JA = [
  {
    title: "ステップ 1 - ブラウザに追加",
    content: "AutoSwitchPrompt拡張機能をワンクリックでインストール。完全無料でプライバシーに配慮し、ウェブブラウジング体験を即座に向上させます。",
    icon: BsDownload,
  },
  {
    title: "ステップ 2 - プロンプトをカスタマイズ",
    content: "様々なウェブサイト用のAIプロンプトを簡単に設定。AutoSwitchPromptが訪れるページごとに最適なプロンプトを自動的に適用します。",
    icon: BsFillGearFill,
  },
  {
    title: "ステップ 3 - スマートなブラウジングを楽しむ",
    content: "あらゆるウェブサイトでシームレスで状況に応じたAIアシスタンスを体験。生産性を向上させ、複雑なオンラインタスクを簡単に処理できます。",
    icon: BsFillLightbulbFill,
  }
];

export const FEATURES_AR = [
  {
    title: "الخطوة 1 - أضف إلى المتصفح",
    content: "ثبّت إضافة AutoSwitchPrompt بنقرة واحدة. إنها مجانية تمامًا، وتحترم خصوصيتك، وترفع فورًا من تجربة تصفحك للإنترنت.",
    icon: BsDownload,
  },
  {
    title: "الخطوة 2 - خصص إشاراتك",
    content: "اضبط بسهولة إشارات الذكاء الاصطناعي المفضلة لديك لمختلف المواقع. سيقوم AutoSwitchPrompt تلقائيًا بتطبيق الإشارة المناسبة لكل صفحة تزورها.",
    icon: BsFillGearFill,
  },
  {
    title: "الخطوة 3 - استمتع بتصفح أكثر ذكاءً",
    content: "اختبر مساعدة ذكاء اصطناعي سلسة ومراعية للسياق عبر جميع المواقع، مما يزيد من إنتاجيتك ويبسط المهام المعقدة على الإنترنت دون جهد إضافي.",
    icon: BsFillLightbulbFill,
  }
];

export const FEATURES_ES = [
  {
    title: "PASO 1 - Añadir al navegador",
    content: "Instale la extensión AutoSwitchPrompt con un solo clic. Es gratuita, respeta su privacidad y mejora instantáneamente su experiencia de navegación.",
    icon: BsDownload,
  },
  {
    title: "PASO 2 - Personalice sus prompts",
    content: "Configure fácilmente sus prompts de IA favoritos para diferentes sitios web. AutoSwitchPrompt aplicará automáticamente el prompt adecuado en cada página que visite.",
    icon: BsFillGearFill,
  },
  {
    title: "PASO 3 - Disfrute de una navegación más inteligente",
    content: "Experimente una asistencia de IA fluida y contextual en todos los sitios web, aumentando su productividad y simplificando tareas complejas en línea sin esfuerzo adicional.",
    icon: BsFillLightbulbFill,
  }
];

export const FEATURES_RU = [
  {
    title: "ШАГ 1 - Добавить в браузер",
    content: "Установите расширение AutoSwitchPrompt одним кликом. Оно бесплатное, защищает вашу конфиденциальность и мгновенно улучшает ваш опыт веб-серфинга.",
    icon: BsDownload,
  },
  {
    title: "ШАГ 2 - Настройте ваши подсказки",
    content: "Легко настройте любимые AI-подсказки для разных сайтов. AutoSwitchPrompt автоматически применит нужную подсказку для каждой страницы, которую вы посещаете.",
    icon: BsFillGearFill,
  },
  {
    title: "ШАГ 3 - Наслаждайтесь умным просмотром",
    content: "Испытайте плавную, контекстно-зависимую AI-помощь на всех сайтах, повышая продуктивность и упрощая сложные онлайн-задачи без дополнительных усилий.",
    icon: BsFillLightbulbFill,
  }
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType | LucideIcon | string;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_ZH,
  FEATURES_JA,
  FEATURES_AR,
  FEATURES_ES,
  FEATURES_RU
}