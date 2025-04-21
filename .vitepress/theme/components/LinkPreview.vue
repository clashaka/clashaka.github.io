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
        let url = props.href
        const parsedUrl = new URL(url)
        if (parsedUrl.hostname === 't.me') {
            return parsedUrl.hostname + parsedUrl.pathname + parsedUrl.search
        }
        url = url.replace(/^https?:\/\//, '')
        url = decodePunycode(url)
        let domain = url.replace(/\/.*$/, '')
        return domain
    } catch (e) {
        return props.href
    }
})

function decodePunycode(domain) {
    const punycodeRegex = /xn--([a-zA-Z0-9]+)/g
    return domain.replace(punycodeRegex, (match, encoded) => {
        return decodeURIComponent('%' + encoded.replace(/([a-fA-F0-9]{2})/g, '$1%'))
    })
}
</script>

<template>
    <a :href="href" target="_blank" rel="noreferrer nofollow">
        {{ displayText }}
    </a>
</template>