import date from './GetDate.js'
import sidebar from './Sidebar.js'

export default [
    { text: '首页', link: '/' },
    { text: '机场', link: `/vpn/${date.year}/${date.month}`, activeMatch: '/vpn/' },
    { text: '网址', link: '/nav/', activeMatch: '/nav/' },
    { text: '软件', link: `${sidebar['/apps/'][0].items[0].link}`, activeMatch: '/apps/' },
    {
        text: '其他',
        items: [
            { text: '游戏', link: '/games/', activeMatch: '/games/' },
        ]
    }
]