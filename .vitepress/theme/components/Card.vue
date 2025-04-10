<script setup>
defineProps({
    href: String,
    image: String,
    title: String,
    details: String
});
</script>

<template>
    <div data-v-f5090ebe="" class="item grid-3">
        <a data-v-549c013f="" data-v-f5090ebe="" class="VPLink link no-icon VPFeature" :href="href" target="_blank"
            :title="details">
            <article data-v-549c013f="" class="box">
                <div class="top">
                    <div data-v-549c013f="" class="icon">
                        <img :src="image" :alt="title" width="32" height="32">
                    </div>
                    <h3 data-v-549c013f="" class="title">{{ title }}</h3>
                </div>
                <p data-v-549c013f="" class="details">{{ details }}</p>
            </article>
        </a>
    </div>
</template>

<style scoped>
a {
    color: inherit;
    text-decoration: inherit;
    touch-action: manipulation;
}

a:hover {
    color: inherit;
}

h3,
p {
    overflow-wrap: break-word;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.item {
    padding: 0;
}

.box {
    padding: 8px;
}

.top {
    display: flex;
    align-items: center;
    gap: 8px;
}

.icon {
    margin-bottom: 0;
}
</style>