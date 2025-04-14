<script setup>
import { computed } from 'vue'

const props = defineProps({
    href: {
        type: String,
        required: true
    }
})

const displayText = computed(() => {
    try {
        // 使用 URL API 解析链接
        const url = new URL(props.href)

        // 如果是 t.me 链接，直接返回 host + pathname，不去除末尾的 /
        if (url.hostname === 't.me') {
            return url.host + url.pathname
        }

        // 如果是其他链接，去除路径末尾的 /
        let path = url.host + url.pathname
        if (path.endsWith('/')) {
            path = path.slice(0, -1)  // 去除路径末尾的 /
        }

        return path
    } catch (e) {
        // 如果无法解析为有效的 URL，则直接返回链接
        return props.href
    }
})
</script>

<template>
    <a :href="href" target="_blank" rel="noreferrer nofollow">
        {{ displayText }}
    </a>
</template>