import date from './GetDate.js'

export default [
    { text: '首页', link: '/' },
    { text: '机场', link: `/vpn/${date.year}/${date.month}`, activeMatch: '/vpn/' },
    { text: '软件', link: '/app/', activeMatch: '/app/' },
    { text: '网址', link: '/nav/', activeMatch: '/nav/' }
]