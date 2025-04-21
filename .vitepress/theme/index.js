import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import Card from './components/Card.vue'
import LinkPreview from './components/LinkPreview.vue'
import ImageLinkWithCaption from './components/ImageLinkWithCaption.vue'
import './custom.css'

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('Card', Card)
        app.component('LinkPreview', LinkPreview)
        app.component('ImageLinkWithCaption', ImageLinkWithCaption)
    }
}