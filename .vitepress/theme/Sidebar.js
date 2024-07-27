import date from './GetDate.js'

export default {
    '/vpn/': date.items,
    '/apps/': [
        {
            text: '软件列表',
            items: [
                { text: '辅助工具', link: '/apps/assistive' },
                { text: '网页浏览', link: '/apps/browser' },
                { text: '下载管理', link: '/apps/download' },
                { text: '扩展工具', link: '/apps/extensions' },
                { text: '字体编辑', link: '/apps/font' },
                { text: '图像软件', link: '/apps/graphics' },
                { text: '代理软件', link: '/apps/proxy' },
                { text: '文本编辑', link: '/apps/text' }
            ]
        }
    ]
}