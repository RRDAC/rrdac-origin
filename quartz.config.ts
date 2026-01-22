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
    locale: "ja-JP",
    baseUrl: "rrdac-origin.vercel.app",
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
          light: "#242442",       // 背景：さらに深く、落ち着いた真夜中の紺色
          lightgray: "#2b2b47",   // 検索バーなど：背景に馴染む暗い色
          gray: "#5a5d8a",        // 補助テキスト：落ち着いたブルーグレー
          darkgray: "#cfd1e6",    // 本文テキスト：少し青みのある白（目に優しい）
          dark: "#cfd1e6",        // ページタイトル：★コンセプトカラーのティール
          secondary: "#5fb8bc",   // リンク：★コンセプトカラーのティール
          tertiary: "#52c2c9",    // ホバー時：少し濃いティール
          highlight: "rgba(135, 241, 246, 0.1)", // ハイライト：ティールの淡い光
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#0b0c1f",       // 背景
          lightgray: "#1e1f3a",
          gray: "#5a5d8a",
          darkgray: "#cfd1e6",
          dark: "#87f1f6",        // ページタイトル
          secondary: "#87f1f6",   // リンク
          tertiary: "#52c2c9",
          highlight: "rgba(135, 241, 246, 0.1)",
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
          light: "github-dark",
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
      Plugin.CustomOgImages(),
    ],
  },
}

export default config