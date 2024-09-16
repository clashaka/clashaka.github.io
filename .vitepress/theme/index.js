import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './components/Layout.vue'
import Card from './components/Card.vue'
import Deadline from './components/Deadline.vue'

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('Card', Card)
        app.component('Deadline', Deadline)
    }
}