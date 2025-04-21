<script setup>
defineProps({
    href: String,
    image: String,
    title: String,
    details: String
});
</script>

<template>
    <div class="item grid-3">
        <a class="VPLink link no-icon VPFeature" :href="href" target="_blank" :title="title + '：' + details">
            <article class="box">
                <div class="top">
                    <div class="icon">
                        <img :src="image" :alt="title" width="32" height="32">
                    </div>
                    <h3 class="title">{{ title }}</h3>
                </div>
                <p class="details">{{ details }}</p>
            </article>
        </a>
    </div>
</template>

<style scoped>
.item.grid-3 {
    min-width: calc(100% / 3);
}

.VPFeature.link:hover {
    border-color: var(--vp-c-brand-1);
}

.VPFeature {
    display: block;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    height: 100%;
    background-color: var(--vp-c-bg-soft);
    transition: border-color .25s, background-color .25s;
}

a:hover {
    color: inherit;
}

a {
    color: inherit;
    text-decoration: none;
    touch-action: manipulation;
}

.box {
    display: flex;
    flex-direction: column;
    padding: 8px;
    height: 100%;
}

.top {
    display: flex;
    align-items: center;
    gap: 8px;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    border-radius: 6px;
    background-color: var(--vp-c-default-soft);
    width: 48px;
    height: 48px;
    font-size: 24px;
    transition: background-color 0.25s;
}

.title {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
}

h3,
p {
    overflow-wrap: break-word;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.details {
    flex-grow: 1;
    padding-top: 8px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}
</style>