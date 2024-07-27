<template>
  <div>
    <template v-if="timeLeft">
      截止于：
      <template v-if="timeLeft.days > 0">
        <span :style="timeStyle">{{ timeLeft.days }} 天 </span>
      </template>
      <template v-if="timeLeft.days > 0 || timeLeft.hours > 0">
        <span :style="timeStyle">{{ timeLeft.hours }} 小时 </span>
      </template>
      <template v-if="timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0">
        <span :style="timeStyle">{{ timeLeft.minutes }} 分钟 </span>
      </template>
      <span :style="timeStyle">{{ timeLeft.seconds }} 秒 </span>
    </template>
    <template v-else>
      已截止：{{ targetDate }}
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  targetDate: {
    type: String,
    required: true,
  },
});

const timeLeft = ref(calculateTimeLeft(props.targetDate));

// 样式计算属性
const timeStyle = computed(() => {
  return timeLeft.value && timeLeft.value.totalHours < 24 ? { color: 'red' } : {};
});

// 更新剩余时间的函数
function updateTimeLeft() {
  timeLeft.value = calculateTimeLeft(props.targetDate);
}

// 计算目标日期与当前日期的差值
function calculateTimeLeft(date) {
  const target = new Date(date).getTime();
  const now = new Date().getTime();
  const difference = target - now;

  if (difference <= 0) {
    return null;
  }

  const totalHours = difference / (1000 * 60 * 60);

  return {
    totalHours,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

// 在mounted生命周期钩子中设置定时器，定期更新剩余时间
let intervalId;
onMounted(() => {
  intervalId = setInterval(updateTimeLeft, 1000);
});

// 在组件卸载之前清除定时器
onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<!-- 示例：
 <CountdownTimer targetDate="2024-05-21 1:00:00" />
 -->