<script setup>
const props = defineProps(['src'], ['alt']);
const imageUrl = new URL(`/src/assets/${props.src}`, import.meta.url).href;
</script>

<template>
    <img :src="imageUrl" :alt="props.alt">
</template>