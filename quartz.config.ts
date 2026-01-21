import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "RRDAC",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ja-JP", // 日本語向けに修正
    baseUrl: "rrdac-origin.vercel.app", // Midoのアドレスに変更
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#1a1b41",       // 背景：深い紺色
          lightgray: "#2e2f5e",   // 検索バーや点線
          gray: "#b8b8b8",        // 補助テキスト
          darkgray: "#e0e0e0",    // 本文テキスト（読みやすい明るいグレー）
          dark: "#ffffff",        // タイトル・見出し（純白）
          secondary: "#6ec1ff",   // リンク：透き通る青
          tertiary: "#a178df",    // ホバー時：神秘的な紫
          highlight: "rgba(110, 193, 255, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1a1b41",       // ダークモードも統一
          lightgray: "#2e2f5e",
          gray: "#b8b8b8",
          darkgray: "#e0e0e0",
          dark: "#ffffff",
          secondary: "#6ec1ff",
          tertiary: "#a178df",
          highlight: "rgba(110, 193, 255, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-dark", // 背景が暗いので、コードもダーク用を適用
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config