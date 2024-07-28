import nav from './NavItem.js'
import sidebar from './Sidebar.js'
// import socialLinks from './SocialLink.js'

export default {
    logo: {
        light: '/images/logo-dark.webp',
        dark: '/images/logo-light.webp',
        alt: '一个朋友 Logo'
    },
    nav,
    sidebar,
    outline: {
        label: '页面导航'
    },
    // socialLinks,
    footer: {
        message: `<a href="/about">关于我们</a>&nbsp;<a href="/contact">联系我们</a>&nbsp;<a href="/link-exchange">友情链接</a>`,
        copyright: `版权所有 © ${new Date().getFullYear()} 一个朋友&nbsp;|&nbsp;<a href="/privacy-policy">隐私权政策</a>`
    },
    lastUpdated: {
        text: '最后更新于',
        formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short'
        }
    },
    docFooter: {
        prev: '上一页',
        next: '下一页'
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    externalLinkIcon: true,
    search: {
        provider: 'local',
        options: {
            translations: {
                button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                },
                modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    footer: {
                        selectText: '选择',
                        navigateText: '切换'
                    }
                }
            },
            _render(src, env, md) {
                const html = md.render(src, env)
                if (env.frontmatter?.title)
                    return md.render(`# ${env.frontmatter.title}`) + html
                return html
            }
        }
    }
}