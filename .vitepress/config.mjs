import { defineConfig } from 'vitepress'
import themeConfig from './theme/ThemeConfig.js'
import head from './theme/HeadConfig.js'

export default defineConfig({
  title: '一个朋友',
  description: '一个免费 VPN 推荐网站。本网站提供各种免费的机场资源订阅，包括免费机场节点、免费机场 Clash 配置、免费机场 SSR 节点等。我们收集整理了 2024 年最新的免费机场资源，包括订阅链接、节点分享等，方便用户快速获取优质的免费代理服务。对于一些付费机场，我们也会提供优惠信息和测评，为用户选择合适的机场提供参考。无论您是需要访问国外网站还是观看海外视频，这里都能找到适合您的免费机场解决方案。欢迎大家持续关注我们的最新动态和更新。',
  head,
  lang: 'zh',
  srcDir: './src',
  metaChunk: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://ygpy.net',
    lastmodDateOnly: false
  },
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
  themeConfig,
})