<script setup>
defineProps({
    href: String,
    image: String,
    title: String,
    details: String
});
</script>

<template>
    <div data-v-f5090ebe="" class="item grid-3">
        <a data-v-549c013f="" data-v-f5090ebe="" class="VPLink link no-icon VPFeature" :href="href">
            <article data-v-549c013f="" class="box">
                <div class="logo">
                    <img data-v-549c013f="" class="icon" :src="image" :alt="title">
                    <h3 data-v-549c013f="" class="title">{{ title }}</h3>
                </div>
                <p data-v-549c013f="" class="details">{{ details }}</p>
            </article>
        </a>
    </div>
</template>

<style scoped>
.logo {
    display: flex;
}

a {
    color: inherit;
    text-decoration: inherit;
}

a,
area,
button,
[role='button'],
input,
label,
select,
summary,
textarea {
    touch-action: manipulation;
}

h1,
h2,
h3,
h4,
h5,
h6,
li,
p {
    overflow-wrap: break-word;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6,
li,
p {
    overflow-wrap: break-word;
}

p {
    margin: 0;
}
</style>

<!-- 示例：
<div class="items-card">
    <card href="/games/2024/05.html" target="_blank" image="/images/logo.webp" title="免费游戏" details="领取免费游戏，享受适度休闲。"/>
</div>
-->