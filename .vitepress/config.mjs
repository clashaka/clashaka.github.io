import { defineConfig } from 'vitepress'
import head from './theme/HeadConfig.js'
import themeConfig from './theme/ThemeConfig.js'

export default defineConfig({
  title: '一个朋友',
  description: '免费机场收集站，聚合全网免费机场，收录最新机场信息。免费机场试用、公益机场列表、电报群更新，Clash/V2Ray/Shadowrocket 全支持。实时测速推荐！永久免费机场每日更新。',
  head,
  lang: 'zh',
  srcDir: './src',
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
  transformHead({ assets }) {
    // 相应地调整正则表达式以匹配字体
    const myFontFile = assets.find(file => /\/font\/NotoSansMonoCJKsc-\.\w+\.woff2/)
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
  sitemap: {
    hostname: 'https://ygpy.net',
    lastmodDateOnly: false
  },
  themeConfig
})