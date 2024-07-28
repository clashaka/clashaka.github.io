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
    <div class="item">
        <a :href="href" class="link" :target="target">
            <article class="box">
                <div class="image-bg">
                    <img class="image" :src="image" :alt="title">
                </div>
                <h3 class="title">{{ title }}</h3>
                <p class="details">{{ details }}</p>
            </article>
        </a>
    </div>
</template>

<style scoped>
@media screen and (min-width: 450px) {
    .item {
        padding: 8px;
        width: calc(100% / 3);
    }
}

@media screen and (max-width: 450px) {
    .item {
        padding: 8px;
        width: calc(100% / 2);
    }
}

.link {
    display: block;
    border: 1px solid transparent;
    border-radius: 12px;
    height: 100%;
    background-color: var(--vp-c-bg-soft);
    transition: border-color 0.25s, background-color 0.25s;
}

a,
a:hover {
    color: inherit;
    text-decoration: inherit;
    border-color: var(--vp-c-brand-1);
}

:is(.vp-external-link-icon, .vp-doc a[href*='://'], .vp-doc a[target='_blank']):not(.no-icon)::after {
    display: none;
}

.box {
    /* display: flex; */
    flex-direction: column;
    padding: 8px;
    height: 100%;
}

.image-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 20px; */
    border-radius: 6px;
    background-color: var(--vp-c-default-soft);
    width: 40px;
    height: 40px;
    font-size: 24px;
    transition: background-color 0.25s;
    float: left;
    margin-right: 8px;
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
    line-height: 40px;
}

.details {
    flex-grow: 1;
    /* padding-top: 8px; */
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