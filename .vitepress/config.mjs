import { defineConfig } from 'vitepress'
import themeConfig from './theme/ThemeConfig.js'
import head from './theme/HeadConfig.js'

export default defineConfig({
  title: '一个朋友',
  description: '一个免费 VPN 推荐网站。涵盖免费机场、加速器等。在这里找到价格折扣、促销活动以及免费试用的机会。',
  head,
  lang: 'zh-CN',
  srcDir: './src',
  metaChunk: true,
  mpa: true,
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
  transformHead({ assets }) {
    const myFontFile = assets.find(file => /fonts\/NotoSansMonoCJKsc-.\w+\.woff2/)
    if (myFontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: myFontFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ]
    }
  },
  themeConfig,
})