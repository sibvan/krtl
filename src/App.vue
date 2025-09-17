<template>
  <div class="container">
    <Header :speed="speed" :errors-number="errorsNumber" :btn-text="btnText" @change-lang="changeLang()" />
    <Typing :current-lang="currentLang.title" ref="typingRef" :has-error="hasError" :is-loading="isLoading" @get-new-phrase="getNewPhrase"
      :translate="translate" :is-finished="isFinished" v-model="inputModel" :phrase="phrase" :errors="errors" />
    <Keyboard v-if="!isLoading && !hasError" :next-letter="nextLetter" :keyboard="keyboard" :volume="volume"
      @switch-volume="switchVolume" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'

import Header from './assets/components/Header.vue';
import Footer from './assets/components/Footer.vue';
import Typing from './assets/components/Typing.vue';
import Keyboard from './assets/components/Keyboard.vue';

import { ref, computed, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import { languages } from './keyboards';

import { useBgsStore } from './stores/bgs';
import { usePhrasesStore } from './stores/phrases';
import { useSettingsStore } from './stores/settings';

import type { Phrase } from './types';

import buttonPressSound from "./assets/sounds/button-press.mp3"


const bgsStore = useBgsStore();
const { currentBg } = storeToRefs(bgsStore);
const phrasesStore = usePhrasesStore();
const settingsStore = useSettingsStore();
const { switchVolume } = settingsStore;
const { volume } = storeToRefs(settingsStore);

const currentLang = ref(languages.en);
const phrase = ref("");
const translate = ref("");
const inputModel = ref("");
const startTime = ref(0);
const isTyping = ref(false);
const isFinished = ref(false);
const typingRef = ref<any>(null);
const isLoading = ref(true);
const hasError = ref(false);




onMounted(async () => {

  try {
    await phrasesStore.getPhraseList();
    getNewPhrase();
  } catch {
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }

  try {
    await bgsStore.getBgList();
    bgsStore.getRandomBg();
  } catch {
    console.error("Не удалось загрузить фон");
  }

});


const errorsNumber = computed(() => errors.value.length);
const btnText = computed(() => currentLang.value.btnText);
const keyboard = computed(() => currentLang.value.keyboard);
const nextLetter = computed(() => phrase.value[inputModel.value.length]);

const errors = computed(() => {
  const arr: number[] = [];
  [...inputModel.value].forEach((letter, index) => {
    if (letter !== phrase.value[index]) {
      arr.push(index)
    }
  });
  return arr;
});

const speed = computed(() => {
  const typedChars = inputModel.value.length;
  const phraseLength = phrase.value.length;

  if (typedChars === 0) return 0;

  const smoothing = Math.min(typedChars / phraseLength, 1);
  const elapsed = new Date().getTime() - startTime.value;

  if (elapsed <= 0) return 0;

  const rawSpeed = (typedChars / elapsed) * 60000;
  return Math.round(rawSpeed * smoothing);
});



const getNewPhrase = () => {
  const randomPhrase: Phrase = phrasesStore.getRandomPhrase();
  phrase.value = randomPhrase[currentLang.value.title as keyof Phrase];
  translate.value = currentLang.value.title === "ru" ? randomPhrase.en : randomPhrase.ru;
  inputModel.value = "";
  isFinished.value = false;
  typingRef.value?.resetShift();
}

onKeyStroke('Enter', () => {
  getNewPhrase();
})

const changeLang = () => {

  const langList = Object.keys(languages) as (keyof typeof languages)[];
  const langId = langList.findIndex(item => item === currentLang.value.title);

  let newId: number;
  let newLang: keyof typeof languages;

  newId = langId < langList.length - 1 ? langId + 1 : 0;
  newLang = langList[newId];

  currentLang.value = languages[newLang];
  getNewPhrase();
}



watch(currentBg, (newBg) => {
  document.body.style.backgroundImage = `url(${newBg})`;
});




watch(inputModel, (newVal) => {

  if (newVal.length !== 0 && !isTyping.value) {
    isTyping.value = true;
    startTime.value = new Date().getTime();
  }


  if (newVal.length === phrase.value.length) {
    isTyping.value = false;
    isFinished.value = true;
  }
});

const audio = new Audio(buttonPressSound);

watch(errors, (newVal, oldVal) => {
  if (!volume.value || !audio.paused) return;
  if (newVal.length > oldVal.length) {
    audio.play();
  }
});


</script>
