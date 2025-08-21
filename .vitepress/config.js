import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import head from './theme/config/head';
import themeConfig from './theme/themeConfig';

// 不要“/”结尾
const webSiteUrl = 'https://example.com';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  head,
  lang: 'zh-CN',
  srcDir: './src',
  metaChunk: true,
  lastUpdated: true,
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    image: {
      lazyLoading: true
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ],
    server: {
      host: '0.0.0.0',
      port: 3000,
      cors: true
    }
  },
  sitemap: {
    hostname: webSiteUrl,
    lastmodDateOnly: false
  },
  transformPageData(pageData) {
    const canonicalUrl = `${webSiteUrl}/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  },
  themeConfig
})