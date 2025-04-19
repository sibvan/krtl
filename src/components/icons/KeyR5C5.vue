<script setup lang="ts">

defineProps<{ current: string }>();
const keyValue = ' '; 


</script>

<template>
<svg :class="['keyboard__key', { 'keyboard__key_active': current === keyValue }]" width="356" height="69" viewBox="0 0 356 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.16602" y="1.38892" width="353.667" height="66.5556" rx="5.12963" stroke="black"/>
</svg>
</template>