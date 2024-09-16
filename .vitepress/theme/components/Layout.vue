<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #sidebar-nav-after>
            <!-- <a class="sponsor-sidebar" href="/contact">成为赞助商</a> -->
            <a href="https://webcc01.galaxycloud.pro/#/register?code=QmQ8c9eY" target="_blank">
                <img src="/images/ads/20240821.webp" alt="赞助商广告" title="点击访问" />
            </a>
            <span class="sponsor-code">优惠码：zhuanshu8</span>
        </template>
        <template #nav-bar-content-after>
            <div class="before"></div>
            <a href="/contact" class="nav VPBadge info">成为赞助商</a>
        </template>
    </Layout>
</template>

<style scoped>
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

.sponsor-sidebar,
.sponsor-aside,
.sponsor-doc {
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
    background-color: var(--vp-c-bg);
}

img {
    box-shadow: 0 0 10px rgb(0 0 0 / 0.1);
}

.sponsor-code {
    font-size: 12px;
    text-align: right;
    display: block;
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
</style>