<template>
  <div class="container">
    <Header @change-lang="changeLang()" :btn-text="currentLang.btnText" />
    <Typing v-model="inputModel" :phrase="phrase" :errors="errors" />
    <Keyboard :keyboard="currentLang.keyboard" />
    <Footer />
  </div>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';
import { languages } from './keyboards';

import Header from './assets/components/Header.vue';
import Footer from './assets/components/Footer.vue';
import Typing from './assets/components/Typing.vue';
import Keyboard from './assets/components/Keyboard.vue';



const currentLang = ref(languages.ru);
const phrase = ref("Something wrong with shower");
const inputModel = ref("");


const errors = computed(() => {
  const arr: number[] = [];
  [...inputModel.value].forEach((letter, index) => {
    if (letter !== phrase.value[index]) {
      arr.push(index)
    }
  });
  return arr;
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
