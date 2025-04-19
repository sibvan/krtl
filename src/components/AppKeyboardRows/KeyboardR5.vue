<script setup lang="ts">
import KeyR5C1 from '../icons/KeyR5C1.vue';
import KeyR5C2 from '../icons/KeyR5C2.vue';
import KeyR5C3 from '../icons/KeyR5C3.vue';
import KeyR5C4 from '../icons/KeyR5C4.vue';
import KeyR5C5 from '../icons/KeyR5C5.vue';
import KeyR5C6 from '../icons/KeyR5C6.vue';
import KeyR5C7 from '../icons/KeyR5C7.vue';
import KeyR5C8 from '../icons/KeyR5C8.vue';
import KeyR5C9 from '../icons/KeyR5C9.vue';
import KeyR5C10 from '../icons/KeyR5C10.vue';

defineProps<{ current: string }>();
</script>
<template>
    <KeyR5C1 :current="current" />
    <KeyR5C2 :current="current" />
    <KeyR5C3 :current="current" />
    <KeyR5C4 :current="current" />
    <KeyR5C5 :current="current" />
    <KeyR5C6 :current="current" />
    <KeyR5C7 :current="current" />
    <KeyR5C8 :current="current" />
    <KeyR5C9 :current="current" />
    <KeyR5C10 :current="current" />

</template>