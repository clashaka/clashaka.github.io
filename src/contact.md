---
title: 联系我们
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/images/logo.webp',
    name: '一个朋友',
    title: '频道',
    desc: '每日推送免费机场',
    links: [
      {
        icon: 'telegram',
        link: 'https://t.me/ygpy_net',
        ariaLabel: 'telegram link'
      }
    ]
  },
  {
    avatar: '/images/logo-light.webp',
    name: '一个朋友',
    title: '群组',
    desc: '每日抽奖付费节点',
    links: [
      {
        icon: 'telegram',
        link: 'https://t.me/ygpyChat',
        ariaLabel: 'telegram link'
      }
    ]
  },
  {
    avatar: '/images/logo-dark.webp',
    name: '一个朋友 Bot',
    title: '管理员',
    desc: '投稿、广告、友链',
    links: [
      {
        icon: 'telegram',
        link: 'https://t.me/ygpyChatBot',
        ariaLabel: 'telegram link'
      }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      {{ $frontmatter.title }}
    </template>
    <template #lead>
      加入我们或与我们合作
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="members" />
</VPTeamPage>