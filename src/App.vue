<template>
  <div class="container">
    <Header @change-lang="changeLang()" :speed="speed" :errors="errors.length" :btn-text="currentLang.btnText" />
    <Typing :disabled="isFinished" v-model="inputModel" :phrase="phrase" :errors="errors" />
    <Keyboard :nextLetter="nextLetter" :keyboard="currentLang.keyboard" />
    <Footer />
  </div>
</template>

<script setup lang="ts">

import { ref, computed, watch, onMounted } from 'vue';
import { languages } from './keyboards';

import Header from './assets/components/Header.vue';
import Footer from './assets/components/Footer.vue';
import Typing from './assets/components/Typing.vue';
import Keyboard from './assets/components/Keyboard.vue';
import { useBgsStore } from './stores/bgs';

const bgsStore = useBgsStore();

const currentLang = ref(languages.en);
const phrase = ref("Something wrong with shower");
const inputModel = ref("");
const start = ref(0);
const isTyping = ref(false);
const isFinished = ref(false);


onMounted(async() => {
  const bg = await bgsStore.getBgList();
  
  document.body.style.backgroundImage = `url(${bgsStore.getRandomBg()})`;
});



watch(inputModel, (newVal) => {

  if (newVal.length !== 0 && !isTyping.value) {
    isTyping.value = true;
    start.value = new Date().getTime();
  }


  if (newVal.length === phrase.value.length) {
    isTyping.value = false;
    isFinished.value = true;
  }
});


const speed = computed(() => {
  const typedChars = inputModel.value.length;
  const phraseLength = phrase.value.length;

  if (typedChars === 0) return 0;

  // коэффициент сглаживания: от 0 до 1 пропорционально прогрессу в фразе
  const smoothing = Math.min(typedChars / phraseLength, 1);

  const elapsed = new Date().getTime() - start.value; // мс
  if (elapsed <= 0) return 0;

  const rawSpeed = (typedChars / elapsed) * 60000;

  return Math.round(rawSpeed * smoothing);
});

const errors = computed(() => {
  const arr: number[] = [];
  [...inputModel.value].forEach((letter, index) => {
    if (letter !== phrase.value[index]) {
      arr.push(index)
    }
  });
  return arr;
});

const nextLetter = computed(() => {
  return phrase.value[inputModel.value.length];
});


const changeLang = () => {

  const langList = Object.keys(languages) as (keyof typeof languages)[];
  const langId = langList.findIndex(item => item === currentLang.value.title);

  let newId: number;
  let newLang: keyof typeof languages;

  newId = langId < langList.length - 1 ? langId + 1 : 0;
  newLang = langList[newId];

  currentLang.value = languages[newLang];

}




</script>
