<template>
  <main class="main">
    <div class="typing">
      <div class="typing__text">

        <input :disabled="disabled" spellcheck="false" ref="input" v-if="props.phrase" :maxlength="props.phrase?.length"
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
        <p>Что-то случилось с душем</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

import { useTemplateRef, onMounted } from 'vue';

const input = useTemplateRef('input');

onMounted(() => {


  input.value?.focus();
});




const model = defineModel();

const updateModel = () => {
  model.value = input.value?.value;

}


const props = defineProps({
  phrase: String,
  errors: Array,
  disabled: Boolean
});


</script>