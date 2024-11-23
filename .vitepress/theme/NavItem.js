import date from './GetDate.js'

export default [
    { text: '首页', link: '/' },
    { text: '机场推荐', link: `/vpn/${date.year}/${date.month}`, activeMatch: '/vpn/' },
    { text: '软件列表', link: '/app/', activeMatch: '/app/' },
    { text: '网址导航', link: '/nav/', activeMatch: '/nav/' },
    { text: '常见问题', link: '/faq', activeMatch: '/faq' }
]