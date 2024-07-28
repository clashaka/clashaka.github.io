<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #sidebar-nav-after>
            <!-- <a class="sponsor-sidebar" href="/contact">成为赞助商</a> -->
            <a href="https://hjhjhj.hjdns.top/#/register?code=zuhkz7lQ" target="_blank">
                <img src="/images/ads/20240721.gif" alt="赞助商广告" />
            </a>
        </template>
        <template #aside-outline-after>
            <a class="sponsor-aside" href="/contact">成为赞助商</a>
        </template>
        <template #nav-bar-content-after>
            <div class="before"></div>
            <a href="/contact" class="nav VPBadge info">成为赞助商</a>
        </template>
    </Layout>
</template>

<style scoped>
.sponsor-sidebar,
.sponsor-aside,
.sponsor-doc {
    margin-top: 14px;
    width: 100%;
    height: 96px;
    font-size: 12px;
    color: var(--vp-c-text-3);
    background-color: var(--vp-c-bg-soft);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
}

.sponsor-sidebar,
img {
    margin-top: 0;
    background-color: var(--vp-c-bg);
}

img {
    margin-top: 14px;
    box-shadow: 0 0 10px rgb(0 0 0 / 0.1);
}

.nav.VPBadge {
    margin-left: 14px;
    transform: none;
}

div.before {
    margin-left: 16px;
    display: inline-block;
    width: 1px;
    height: 24px;
    background-color: var(--vp-c-divider);
    content: "";
}

@media screen and (max-width: 768px) {
    .nav.VPBadge {
        margin-left: 0;
        transform: none;
    }

    div.before {
        margin-left: 0;
        width: 0;
        height: 0;
    }
}
</style>