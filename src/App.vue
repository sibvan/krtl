<template>
  <div class="container">
    <Header @change-lang="changeLang()" :btn-text="currentLang.btnText" />
    <Typing @before-input="test" v-model="inputModel" :phrase="phrase" />
    <Keyboard :keyboard="currentLang.keyboard" />
    <Footer />
  </div>
</template>

<script setup lang="ts">

import { ref, nextTick, watch } from 'vue';
import { languages } from './keyboards';

import Header from './assets/components/Header.vue';
import Footer from './assets/components/Footer.vue';
import Typing from './assets/components/Typing.vue';
import Keyboard from './assets/components/Keyboard.vue';

const currentLang = ref(languages.ru);
const phrase = ref("Something wrong with shower".replaceAll(" ", " "));
const inputModel = ref("");


const changeLang = () => {

  const langList = Object.keys(languages) as (keyof typeof languages)[];
  const langId = langList.findIndex(item => item === currentLang.value.title);

  let newId: number;
  let newLang: keyof typeof languages;

  newId = langId < langList.length - 1 ? langId + 1 : 0;
  newLang = langList[newId];

  currentLang.value = languages[newLang];

}




const test = (e: InputEvent) => {

  if (e.inputType === "deleteContentBackward") {
    inputModel.value = phrase.value.slice(0, inputModel.value.length - 1);
  } else {
    inputModel.value = phrase.value.slice(0, inputModel.value.length + 1);
  }

  nextTick(() => window.getSelection()?.collapse(e.target as HTMLElement, (e.target as HTMLElement).childNodes.length));
};

</script>
