import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = 'https://github.com/weijunext/landing-page-boilerplate'

const baseSiteConfig = {
  name: "AutoSwitchPrompt",
  description:
    "Effortless Personalization: AutoSwitchPrompt seamlessly tailors your favorite prompts to each page.",
  url: "https://autoswitchprompt.learnprompt.pro/",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: '/',
  keywords: ["Prompts Assistant", "Prompt Manager", "Automation", "AI compose", "AI Copilot", "ChatGPT for Google", "AI extension"],
  authors: [
    {
      name: "casperlee",
      url: "https://www.learnprompt.pro",
      twitter: 'https://x.com/aiwarts',
    }
  ],
  creator: '@casperlee',
  openSourceURL: 'https://github.com/LearnPrompt/AutoSwitchPrompt-landing-page',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    { name: 'twitter', href: "https://x.com/aiwarts", icon: BsTwitterX },
    { name: 'buyMeCoffee', href: "https://buymeacoffee.com/casperlee", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:learnprompt2023@gmail.com", icon: MdEmail },
    { name: 'twitter', href: "https://x.com/aiwarts", icon: BsTwitterX },
    { name: 'github', href: "https://github.com/LearnPrompt", icon: BsGithub },
    { name: 'buyMeCoffee', href: "https://buymeacoffee.com/casperlee", icon: SiBuymeacoffee },
    { name: 'weChat', href: "https://www.learnprompt.pro/multimedia", icon: BsWechat }
  ],
  footerProducts: [
    { url: 'https://phcopilot.ai/', name: 'Product Hunt Copilot' },
    { url: 'https://www.learnprompt.pro/', name: 'Learn Prompt' },
    { url: 'https://autoswitchprompt.learnprompt.pro/', name: 'AutoSwitchPrompt' },
    { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
