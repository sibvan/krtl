<script setup lang="ts">
import KeyR3C1 from '../icons/KeyR3C1.vue';
import KeyR3C2 from '../icons/KeyR3C2.vue';
import KeyR3C3 from '../icons/KeyR3C3.vue';
import KeyR3C4 from '../icons/KeyR3C4.vue';
import KeyR3C5 from '../icons/KeyR3C5.vue';
import KeyR3C6 from '../icons/KeyR3C6.vue';
import KeyR3C7 from '../icons/KeyR3C7.vue';
import KeyR3C8 from '../icons/KeyR3C8.vue';
import KeyR3C9 from '../icons/KeyR3C9.vue';
import KeyR3C10 from '../icons/KeyR3C10.vue';
import KeyR3C11 from '../icons/KeyR3C11.vue';
import KeyR3C12 from '../icons/KeyR3C12.vue';
import KeyR3C13 from '../icons/KeyR3C13.vue';

defineProps<{ current: string, isShift: boolean }>();
</script>
<template>
    <KeyR3C1 :current="current" />
    <KeyR3C2 :current="current" />
    <KeyR3C3 :current="current" :isShift = "isShift"/>
    <KeyR3C4 :current="current" />
    <KeyR3C5 :current="current" />
    <KeyR3C6 :current="current" />
    <KeyR3C7 :current="current" />
    <KeyR3C8 :current="current" :isShift = "isShift"/>
    <KeyR3C9 :current="current" />
    <KeyR3C10 :current="current" />
    <KeyR3C11 :current="current" />
    <KeyR3C12 :current="current" />
    <KeyR3C13 :current="current" />
</template>