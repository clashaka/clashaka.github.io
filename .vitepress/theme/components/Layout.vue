<script setup>
import DefaultTheme from 'vitepress/theme'
import Comment from "./Comment.vue";

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #doc-after>
            <p id="留言板" class="comment-title">留言板</p>
            <Comment />
        </template>
        <template #sidebar-nav-after>
            <a href="https://yunfan-d.uuvpn.xyz/#/register?code=7j3dYEtw" target="_blank" rel="noreferrer nofollow">
                <div class="gg-container">
                    <img src="/images/sponsor/vpnong/20250218.webp" alt="哆啦A梦VPN机场推荐" />
                    <span class="gg-text">赞助商广告</span>
                    <!-- <span class="re-text">前往体验</span> -->
                </div>
            </a>
            <div class="msg">
                <a href="/vpn/paid#ad-2">更多信息</a>
            </div>
        </template>
        <template #aside-outline-before>
            <a href="https://superbiu.com/#/register?code=KH6xv0ou" target="_blank" rel="noreferrer nofollow">
                <div class="gg-container">
                    <img src="/images/sponsor/superbiu/20250111.gif" alt="superbiu机场推荐" />
                    <span class="gg-text">赞助商广告</span>
                </div>
            </a>
            <div class="msg">
                <a href="/vpn/paid#ad-4">更多信息</a>
            </div>
            <br>
        </template>
        <template #home-features-before>
            <div class="container">
                <div class="home-features-before-ad">
                    <a href="https://candytally.com/web/#/login?code=foHbXFgg" target="_blank" rel="noreferrer nofollow">
                        <div class="gg-container">
                            <img src="/images/sponsor/candytally/20250228.webp" alt="糖果云机场推荐" />
                            <span class="gg-text">赞助商广告</span>
                            <span class="re-text">前往体验</span>
                            <div class="msg">
                                <a href="/vpn/paid#ad-3">更多信息</a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </template>
        <template #home-features-after>
            <br>
            <div class="container">
                <div class="home-features-after-ad">
                    <a href="https://candytally.com/web/#/login?code=foHbXFgg" target="_blank" rel="noreferrer nofollow">
                        <div class="gg-container">
                            <img src="/images/sponsor/candytally/20250228.webp" alt="糖果云机场推荐" />
                            <span class="gg-text">赞助商广告</span>
                            <span class="re-text">前往体验</span>
                            <div class="msg">
                                <a href="/vpn/paid#ad-3">更多信息</a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </template>
        <template #nav-screen-content-after>
            <br>
            <a href="https://superbiu.com/#/register?code=KH6xv0ou" target="_blank" rel="noreferrer nofollow">
                <div class="gg-container">
                    <img src="/images/sponsor/superbiu/20250111.gif" alt="superbiu机场推荐" />
                    <span class="gg-text">赞助商广告</span>
                </div>
            </a>
            <div class="msg">
                <a href="/vpn/paid#ad-4">更多信息</a>
            </div>
        </template>
    </Layout>
</template>

<style scoped>
img {
    box-shadow: 0 0 10px rgb(0 0 0 / 0.1);
}

.comment-title {
    margin: 48px 0 16px;
    border-top: 1px solid var(--vp-c-divider);
    padding-top: 24px;
    letter-spacing: -0.02em;
    line-height: 32px;
    font-size: 24px;
    position: relative;
    font-weight: 600;
    outline: none;
}

@media screen and (max-width: 768px) {
    .container {
        padding: 0 24px;
    }

    .home-features-after-ad {
        display: none;
    }
    .home-features-before-ad {
        display: flex;
        justify-content: center;
    }
    .re-text {
        bottom: 20%;
        background-color: rgb(255 255 255 / 0.9);
        color: black;
    }
}

@media screen and (min-width: 768px) {
    .home-features-before-ad {
        display: none;
    }
    .home-features-after-ad {
        display: flex;
        justify-content: center;
    }
    .container {
        padding: 0 64px;
    }
    .container img {
        width: 1152px;
    }
    .re-text {
        bottom: 10%;
        background-color: rgb(255 255 255 / 0.9);
        color: black;
    }
}

@media screen and (min-width: 640px) {
    .container {
        padding: 0 48px;
    }
    .re-text {
        bottom: 15%;
    }
}

@media screen and (min-width: 960px) {
    .container {
        padding: 0 64px;
    }
    .re-text {
        bottom: 10%;
    }
}
</style>