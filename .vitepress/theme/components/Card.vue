<script setup>
defineProps({
    href: String,
    target: String,
    image: String,
    title: String,
    details: String
});
</script>

<template>
    <div class="card">
        <a :href="href" class="link" :target="target">
            <article class="box">
                <div class="logo">
                    <div class="image-bg">
                        <img class="image" :src="image" :alt="title">
                    </div>
                    <h3 class="title">{{ title }}</h3>
                </div>
                <p class="details">{{ details }}</p>
            </article>
        </a>
    </div>
</template>

<style scoped>
.card {
    display: block;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    height: 100%;
    background-color: var(--vp-c-bg-soft);
    transition: border-color 0.25s, background-color 0.25s;
}

.card:hover {
    border-color: var(--vp-c-brand-1);
}

a,
a:hover {
    color: inherit;
    text-decoration: inherit;
}

:is(.vp-external-link-icon, .vp-doc a[href*='://'], .vp-doc a[target='_blank']):not(.no-icon)::after {
    display: none;
}

.box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    height: 100%;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
}

.image-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: var(--vp-c-default-soft);
    width: 48px;
    height: 48px;
    transition: background-color 0.25s;
}

.image {
    width: 32px;
}

.title {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
}

.vp-doc h3 {
    margin: 0;
    border-top: 0;
    padding-top: 0;
    line-height: 0;
}

.details {
    flex-grow: 1;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.vp-doc p {
    margin: 0;
}
</style>

<!-- 示例：
<div class="items-card">
    <card href="/games/2024/05.html" target="_blank" image="/images/logo.webp" title="免费游戏" details="领取免费游戏，享受适度休闲。"/>
</div>
-->