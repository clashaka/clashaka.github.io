<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

// 加载 Disqus
const loadDisqus = () => {
  // 1. 先删除现有的 Disqus 容器，避免重复加载
  const oldThread = document.getElementById('disqus_thread')
  if (oldThread) {
    oldThread.innerHTML = ''
  }

  // 2. 插入新的 Disqus 脚本
  var d = document, s = d.createElement('script')
  s.src = 'https://ygpy.disqus.com/embed.js'
  s.setAttribute('data-timestamp', +new Date())
  ;(d.head || d.body).appendChild(s)
}

// 页面加载时初始化
onMounted(loadDisqus)

// 监听路由变化，重新加载 Disqus
watch(() => route.path, () => {
  loadDisqus()
})
</script>

<template>
    <div id="disqus_thread"></div>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
</template>
