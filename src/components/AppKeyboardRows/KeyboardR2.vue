<script setup lang="ts">
import KeyR2C1 from '../icons/KeyR2C1.vue';
import KeyR2C2 from '../icons/KeyR2C2.vue';
import KeyR2C3 from '../icons/KeyR2C3.vue';
import KeyR2C4 from '../icons/KeyR2C4.vue';
import KeyR2C5 from '../icons/KeyR2C5.vue';
import KeyR2C6 from '../icons/KeyR2C6.vue';
import KeyR2C7 from '../icons/KeyR2C7.vue';
import KeyR2C8 from '../icons/KeyR2C8.vue';
import KeyR2C9 from '../icons/KeyR2C9.vue';
import KeyR2C10 from '../icons/KeyR2C10.vue';
import KeyR2C11 from '../icons/KeyR2C11.vue';
import KeyR2C12 from '../icons/KeyR2C12.vue';
import KeyR2C13 from '../icons/KeyR2C13.vue';
import KeyR2C14 from '../icons/KeyR2C14.vue';

defineProps<{ current: string, isShift: boolean }>();

</script>
<template>
    <KeyR2C1 :current="current" />
    <KeyR2C2 :current="current" />
    <KeyR2C3 :current="current" :isShift = "isShift"/>
    <KeyR2C4 :current="current" />
    <KeyR2C5 :current="current" :isShift = "isShift" />
    <KeyR2C6 :current="current" :isShift = "isShift" />
    <KeyR2C7 :current="current" />
    <KeyR2C8 :current="current" />
    <KeyR2C9 :current="current" />
    <KeyR2C10 :current="current" />
    <KeyR2C11 :current="current" />
    <KeyR2C12 :current="current" />
    <KeyR2C13 :current="current" />
    <KeyR2C14 :current="current" />
</template> 
