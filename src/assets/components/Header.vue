<template>
  <header class="header">
    <h1 class="header__logo">KRTL</h1>
    <ul class="statistics">
      <li class="statistics__item">
        <p class="statistics__number">0</p>
        <p class="statistics__description">скорость</p>
      </li>
      <li class="statistics__slash">/</li>
      <li class="statistics__item">
        <p class="statistics__number">0</p>
        <p class="statistics__description">ошибки</p>
      </li>
    </ul>
    <button @click="$emit('changeLang')" class="header__button">
      <img src="/icons/language.svg" alt="">
      <span class="header__button-text">{{ props.btnText }}</span>
    </button>
  </header>
</template>

<script setup lang="ts">

const props = defineProps({
  btnText: String
});

</script>