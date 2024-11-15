<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #sidebar-nav-after>
            <!-- <a class="sponsor-sidebar" href="/contact">成为赞助商</a> -->
            <a href="https://fengwo.online/#/login?code=V7viRyig" target="_blank">
                <img src="/images/sponsor/fengwo/20241021.webp" alt="蜂窝vpn机场推荐" title="点击访问" />
            </a>
            <!-- <small class="sponsor-code">* 可能需要代理访问</small> -->
        </template>
        <template #nav-bar-content-after>
            <div class="before"></div>
            <a href="/contact" class="nav VPBadge info">成为赞助商</a>
        </template>
        <template #aside-outline-before>
            <a href="https://guolicheng.cc/index.php#/register?code=shKXijFC" target="_blank">
                <img src="/images/sponsor/guolicheng/2024111100.gif" alt="果粒橙机场推荐" title="点击访问" />
            </a>
            <!-- <small class="sponsor-code">* 可能需要代理访问</small> -->
            <br>
        </template>
        <template #doc-footer-before>
            <a href="https://guolicheng.cc/index.php#/register?code=shKXijFC" target="_blank">
                <img src="/images/sponsor/guolicheng/2024111101.webp" alt="果粒橙机场推荐" title="点击访问" />
            </a>
            <!-- <small class="sponsor-code">* 可能需要代理访问</small> -->
            <br>
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
    background-color: var(--vp-c-bg-alt);
}

img {
    box-shadow: 0 0 10px rgb(0 0 0 / 0.1);
}

.sponsor-code {
    font-size: 12px;
    color: var(--vp-c-text-2);
    padding-top: 4px;
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