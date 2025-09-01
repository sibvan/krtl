<template>
  <main class="main">
    <div class="typing">
      <div class="typing__text" :style="{ 'left': shift + 'px' }">

        <input autocomplete="off" :disabled="disabled" spellcheck="false" ref="input" v-if="props.phrase" :maxlength="props.phrase?.length"
          :style="{ width: `${props.phrase?.length + 0.2}ch` }" class="typing__input" type="text" name="" id=""
          :value="model" @input="updateModel">

        <input v-if="props.phrase" :style="{ width: `${props.phrase?.length + 0.2}ch` }" class="typing__phrase"
          type="text" name="" id="" :value="props.phrase">

        <div class="typing__progress">
          <div :class="['typing__line', { 'typing__line_error': errors?.includes(index) }]"
            v-for="(char, index) in props.phrase" :key="index"></div>
        </div>

      </div>
      <div class="typing__translate">
        <p>{{ translate }}</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

import { useTemplateRef, onMounted, computed } from 'vue';
import { useElementSize, useWindowSize } from '@vueuse/core';

const input = useTemplateRef('input');

const { width: inputWidth } = useElementSize(input);
const { width: winWidth } = useWindowSize();

onMounted(() => {
  input.value?.focus();
});


const model = defineModel<String>();



const shift = computed(() => {

  if (model.value && props.phrase) {
    const difference = winWidth.value - inputWidth.value;

    const currentLength = model.value.length;
    const step = difference / props.phrase.length;

    const shift = currentLength * step;

    return shift < 0 ? shift : 0;
  }

});

const updateModel = () => {
  model.value = input.value?.value;
}


const props = defineProps({
  phrase: String,
  errors: Array,
  disabled: Boolean,
  translate: String
});


</script>