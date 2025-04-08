import nav from './NavItem.js'
import sidebar from './Sidebar.js'
import socialLinks from './SocialLinks.js';
import footer from './Footer.js'

export default {
    logo: {
        src: '/images/logo.webp',
        alt: '一个朋友标志'
    },
    nav,
    sidebar,
    outline: {
        label: '页面导航'
    },
    // socialLinks,
    footer,
    lastUpdated: {
        text: '最后更新于'
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
                        navigateText: '切换',
                        closeText: '关闭'
                    }
                }
            }
        }
    }
}