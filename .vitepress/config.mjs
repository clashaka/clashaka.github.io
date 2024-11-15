import { defineConfig } from 'vitepress'
import themeConfig from './theme/ThemeConfig.js'
import head from './theme/HeadConfig.js'

export default defineConfig({
  title: '一个朋友',
  description: '一个免费机场、加速器、vpn推荐网站。涵盖免费机场、机场推荐、机场vpn、免费vpn、加速器vpn、免费加速器等。在这里找到价格折扣、促销活动以及免费试用的机会。',
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