<template>
  <main class="main">
    <div class="typing">
      <div v-if="!isLoading && !hasError" class="typing__text" :style="{ 'left': shift + 'px' }">

        <input autocomplete="off" :disabled="disabled" spellcheck="false" ref="input" v-if="props.phrase"
          :maxlength="props.phrase?.length" :style="{ width: `${props.phrase?.length + 0.2}ch` }" class="typing__input"
          type="text" name="" id="" :value="model" @input="updateModel">

        <input v-if="props.phrase" :style="{ width: `${props.phrase?.length + 0.2}ch` }" class="typing__phrase"
          type="text" name="" id="" :value="props.phrase">

        <div class="typing__progress">
          <div :class="['typing__line', { 'typing__line_error': errors?.includes(index) }]"
            v-for="(char, index) in props.phrase" :key="index"></div>
        </div>

      </div>
      <div class="typing__translate">

        <p class="typing__button" v-if="isLoading">Данные загружаются</p>
        <p class="typing__tranlation" v-if="hasError">Произошла ошибка</p>
        <p @click="emit('nextPhrase')" class="typing__button" v-if="disabled">Следующая фраза</p>

        <p class="typing__tranlation" v-if="!disabled && !isLoading && !hasError">{{ translate }}</p>

      </div>
    </div>
  </main>
</template>

<script setup lang="ts">



import { useTemplateRef, computed, watch, nextTick, defineExpose, ref } from 'vue';
import { useElementSize, useWindowSize } from '@vueuse/core';

const input = useTemplateRef('input');

const { width: inputWidth } = useElementSize(input);
const { width: winWidth } = useWindowSize();

const emit = defineEmits<{ (e: 'nextPhrase'): void }>();


const model = defineModel<String>();


const shift = ref(0);

function resetShift() {
  shift.value = 0;
}

defineExpose({ resetShift });


watch(model, (newVal) => {

  const difference = winWidth.value - inputWidth.value;

  const currentLength = newVal.length;
  const step = difference / props.phrase.length;

  const left = currentLength * step;

  shift.value = left < 0 ? left : 0;


});



const updateModel = () => {
  model.value = input.value?.value;
}


const props = defineProps({
  phrase: String,
  errors: Array,
  disabled: Boolean,
  translate: String,
  isLoading: Boolean,
  hasError: Boolean
});


const isReady = computed(() => !props.isLoading && !props.hasError);



watch(isReady, async (newVal) => {
  if (newVal) {
    await nextTick();
    input.value?.focus();
  }
});



</script>