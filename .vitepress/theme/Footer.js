import link from './Link.js'

let linkString = '';

for (let i = 0; i < link.length; i++) {
    linkString += `<a style="color:transparent;" href="${link[i].link}" target="_blank" rel="noopener noreferrer">${link[i].name}</a>`
}

export default {
    message: `<small><a href="/about">关于我们</a>&nbsp;|&nbsp;<a href="/contact">联系我们</a>&nbsp;|&nbsp;<a href="/link-exchange">友情链接</a>&nbsp;|&nbsp;<a href="/privacy-policy">隐私权政策</a></small>`,
    copyright: `<small>© ${new Date().getFullYear()} 一个朋友</small><br /><small style="display:flex;justify-content:center;gap:8px;">${linkString}</small>`
}