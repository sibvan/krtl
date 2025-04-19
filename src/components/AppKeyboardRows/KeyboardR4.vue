<script setup lang="ts">
import KeyR4C1 from '../icons/KeyR4C1.vue';
import KeyR4C2 from '../icons/KeyR4C2.vue';
import KeyR4C3 from '../icons/KeyR4C3.vue';
import KeyR4C4 from '../icons/KeyR4C4.vue';
import KeyR4C5 from '../icons/KeyR4C5.vue';
import KeyR4C6 from '../icons/KeyR4C6.vue';
import KeyR4C7 from '../icons/KeyR4C7.vue';
import KeyR4C8 from '../icons/KeyR4C8.vue';
import KeyR4C9 from '../icons/KeyR4C9.vue';
import KeyR4C10 from '../icons/KeyR4C10.vue';
import KeyR4C11 from '../icons/KeyR4C11.vue';
import KeyR4C12 from '../icons/KeyR4C12.vue';

defineProps<{ current: string, isShift: boolean }>();
</script>
<template>
    <KeyR4C1 :current="current" />
    <KeyR4C2 :current="current" :isShift = "isShift"/>
    <KeyR4C3 :current="current" />
    <KeyR4C4 :current="current" :isShift = "isShift"/>
    <KeyR4C5 :current="current" />
    <KeyR4C6 :current="current" />
    <KeyR4C7 :current="current" />
    <KeyR4C8 :current="current" />
    <KeyR4C9 :current="current" />
    <KeyR4C10 :current="current" />
    <KeyR4C11 :current="current" />
    <KeyR4C12 :current="current" />
</template>