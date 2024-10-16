<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #sidebar-nav-after>
            <!-- <a class="sponsor-sidebar" href="/contact">成为赞助商</a> -->
            <a href="https://x.fengwo.online/#/register?code=V7viRyig" target="_blank">
                <img src="/images/ads/20240921.webp" alt="赞助商广告" title="点击访问" />
            </a>
            <!-- <span class="sponsor-code">优惠码：</span> -->
        </template>
        <template #nav-bar-content-after>
            <div class="before"></div>
            <a href="/contact" class="nav VPBadge info">成为赞助商</a>
        </template>
        <template #aside-outline-before>
            <a href="https://invite.jisujs.com?code=952550" target="_blank">
                <img src="/images/ads/2024101600.webp" alt="极速VPN 注册立即获得免费时长30分钟，绑定我的邀请码(952550)额外赠送免费时长30分钟" title="点击访问" />
            </a>
            <br>
        </template>
        <template #doc-footer-before>
            <a href="https://invite.jisujs.com?code=952550" target="_blank">
                <img src="/images/ads/2024101601.webp" alt="极速VPN 注册立即获得免费时长30分钟，绑定我的邀请码(952550)额外赠送免费时长30分钟" title="点击访问" />
            </a>
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