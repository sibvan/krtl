<template>
  <main class="main">

    <div class="typing">
      <button @click="speak" v-if="!isLoading && !hasError" class="typing__btn">
        <img class="" src="/icons/play.svg" alt="">
      </button>
      <div v-if="!isLoading && !hasError" class="typing__text" :style="{ 'left': shift + 'px' }">

        <input autocomplete="off" :disabled="isFinished" spellcheck="false" ref="input" v-if="props.phrase"
          :maxlength="props.phrase?.length" :style="{ width: `${props.phrase?.length}ch` }" class="typing__input"
          type="text" name="" id="" :value="model" @input="updateModel">

        <input v-if="props.phrase" :style="{ width: `${props.phrase?.length}ch` }" class="typing__phrase" type="text"
          name="" id="" :value="props.phrase">

        <div class="typing__progress">
          <div :class="['typing__line', { 'typing__line_error': errors?.includes(index) }]"
            v-for="(_, index) in props.phrase" :key="index"></div>
        </div>

      </div>
      <div class="typing__translate">

        <p class="typing__button" v-if="isLoading">Данные загружаются</p>
        <p class="typing__tranlation" v-if="hasError">Произошла ошибка</p>
        <p @click="getNewPhrase" class="typing__button" v-if="isFinished">Следующая фраза</p>

        <p class="typing__tranlation" v-if="!isFinished && !isLoading && !hasError">{{ translate }}</p>

      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

// import

import { useTemplateRef, computed, watch, nextTick, defineExpose, ref } from 'vue';
import { useElementSize, useWindowSize } from '@vueuse/core';

// import


// props

const props = defineProps({
  phrase: String,
  errors: Array,
  isFinished: Boolean,
  translate: String,
  isLoading: Boolean,
  hasError: Boolean,
  currentLang: String
});

// props

// emit
const emit = defineEmits(["getNewPhrase"]);

const getNewPhrase = async () => {
  emit("getNewPhrase");

  await nextTick();
  input.value?.focus();
}

// emit


// model

const updateModel = () => {
  model.value = input.value?.value;
}

const model = defineModel<String>();

// model

// shift

const input = useTemplateRef('input');
const { width: inputWidth } = useElementSize(input);
const { width: winWidth } = useWindowSize();

const shift = ref(0);

const resetShift = () => {
  shift.value = 0;
}

defineExpose({ resetShift });


watch([model, winWidth], ([newModel, newWinWidth], _) => {
  if (!props.phrase) return;

  const difference = newWinWidth - inputWidth.value;
  const currentLength = newModel?.length ?? 0;
  const step = difference / props.phrase.length;

  const left = currentLength * step;
  shift.value = left < 0 ? left : 0;
});

// shift



// isReady

const isReady = computed(() => !props.isLoading && !props.hasError);

watch(isReady, async (newVal) => {
  if (newVal) {
    await nextTick();
    input.value?.focus();
  }
});

// isReady


// speech
const speak = () => {
  const speech = props.currentLang === "en" ? props.phrase : props.translate;
  const utterance = new SpeechSynthesisUtterance(speech);
  utterance.lang = "en-US";
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();
  const enVoices = voices.filter(v => v.lang.startsWith("en"));
  utterance.voice = enVoices[Math.floor(Math.random() * enVoices.length)];
  synth.cancel();
  synth.speak(utterance);
};

// speech

</script>