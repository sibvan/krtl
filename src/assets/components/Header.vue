<template>
  <header class="header">
    <h1 class="header__logo">KRTL</h1>
    <ul class="statistics">
      <li class="statistics__item">
        <p class="statistics__number">{{ speed }}</p>
        <p class="statistics__description">скорость</p>
      </li>
      <li class="statistics__slash">/</li>
      <li class="statistics__item">
        <p class="statistics__number">{{ errorsNumber }}</p>
        <p class="statistics__description">ошибки</p>
      </li>
    </ul>
    <button @click="$emit('changeLang')" class="header__button">
      <img class="header__button-icon" src="/icons/language.svg" alt="">
      <span class="header__button-text">{{ btnText }}</span>
    </button>
  </header>
</template>

<script setup lang="ts">

import { toRefs } from "vue";

const props = defineProps({
  btnText: String,
  errorsNumber: Number,
  speed: Number
});

const { btnText, errorsNumber, speed } = toRefs(props);

</script>