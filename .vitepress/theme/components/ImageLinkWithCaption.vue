<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    src: {
        type: String,
        required: true,
        validator: value => value.startsWith('http') || value.startsWith('/'), // 验证 src 是有效的图片 URL
    },
        alt: {
        type: String,
        default: 'Image description', // 默认值，确保图片有 alt
    }
})
</script>

<template>
    <figure>
        <a :href="src" target="_blank" rel="noreferrer nofollow">
            <img :src="src" :alt="alt" />
        </a>
        <figcaption>{{ alt }}</figcaption>
    </figure>
</template>