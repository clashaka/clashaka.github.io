<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true,
        validator: value => value.startsWith('http') || value.startsWith('/'),
    },
        alt: {
        type: String,
        default: 'Image description',
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