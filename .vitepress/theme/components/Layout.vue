<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #doc-footer-before>
            <div class="important custom-block github-alert">
                <p class="custom-block-title">许可协议</p>
                <p></p>
                <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
                    <a property="dct:title" rel="cc:attributionURL" href="/about.html">免费机场推荐</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="/">一个朋友</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display: inline-block;">CC BY-NC-ND 4.0</a>
                </p>
            </div>
        </template>
        <template #sidebar-nav-after>
            <a href="https://o8269.no-yes-doraemon.xyz/#/register?code=7j3dYEtw" target="_blank" rel="noreferrer nofollow">
                <div class="gg-img">
                    <img src="/images/sponsor/vpnong/20250218.webp" alt="哆啦A梦VPN机场推荐" width="256" height="456" />
                </div>
            </a>
            <div class="gg-msg">
                <a href="/vpn/paid#2">更多信息</a>
            </div>
        </template>
        <template #aside-outline-before>
            <a href="https://superbiu.com/#/register?code=KH6xv0ou" target="_blank" rel="noreferrer nofollow">
                <div class="gg-img">
                    <img src="/images/sponsor/superbiu/20250414.gif" alt="superbiu机场推荐" width="224" height="126" />
                </div>
            </a>
            <div class="gg-msg">
                <a href="/vpn/paid#4">更多信息</a>
            </div>
            <br>
        </template>
        <template #home-features-before>
            <div class="container">
                <div class="home-features-before-gg">
                    <a href="https://candytally.com/web/#/login?code=foHbXFgg" target="_blank" rel="noreferrer nofollow">
                        <div class="gg-img">
                            <img src="/images/sponsor/candytally/2025022801.webp" class="testimg" alt="糖果云机场推荐" width="669" height="204" />
                            <div class="gg-msg">
                                <a href="/vpn/paid#3">更多信息</a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </template>
        <template #home-features-after>
            <div class="container">
                <div class="home-features-after-gg">
                    <a href="https://candytally.com/web/#/login?code=foHbXFgg" target="_blank" rel="noreferrer nofollow">
                        <div class="gg-img">
                            <img src="/images/sponsor/candytally/2025022800.webp" alt="糖果云机场推荐" width="1152" height="206" />
                            <div class="gg-msg">
                                <a href="/vpn/paid#3">更多信息</a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </template>
        <template #nav-screen-content-after>
            <br>
            <a href="https://superbiu.com/#/register?code=KH6xv0ou" target="_blank" rel="noreferrer nofollow">
                <div class="gg-img">
                    <img src="/images/sponsor/superbiu/20250414.gif" alt="superbiu机场推荐" width="288" height="162" />
                </div>
            </a>
            <div class="gg-msg">
                <a href="/vpn/paid#4">更多信息</a>
            </div>
        </template>
    </Layout>
</template>

<style scoped>
/* 网络广告 */

.gg-img {
    position: relative;
}

.gg-img::after {
    content: "广告";
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgb(0 0 0 / 0.1);
    color: white;
    padding: 2px 6px;
    font-size: 12px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
}

.gg-text {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgb(0 0 0 / 0.1);
    color: white;
    padding: 2px 6px;
    font-size: 12px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
}

.gg-msg:hover,
.gg-msg.active {
    color: var(--vp-c-text-1);
    transition: color 0.25s;
}

.gg-msg {
    display: block;
    line-height: 32px;
    font-size: 14px;
    font-weight: 400;
    color: var(--vp-c-text-2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.5s;
}

/* 首页广告 */

@media screen and (max-width: 768px) {
    .container {
        padding: 0 24px;
    }

    .home-features-after-gg {
        display: none;
    }
}

@media screen and (min-width: 768px) {
    .home-features-before-gg {
        display: none;
    }

    .home-features-after-gg {
        padding-top: 16px;
        display: flex;
        justify-content: center;
    }
}

@media screen and (min-width: 640px) {
    .container {
        padding: 0 48px;
    }
}

@media screen and (min-width: 960px) {
    .container {
        padding: 0 64px;
    }
}
</style>