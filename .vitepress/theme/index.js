import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import Card from './components/Card.vue'
import Card2 from './components/Card2.vue'
import './custom.css'

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('Card', Card)
        app.component('Card2', Card2)
    }
}