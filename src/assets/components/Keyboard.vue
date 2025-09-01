<template>

  <div class="keyboard">
    <div class="keyboard__left">
      <button class="button-icon">
        <img class="button-icon__ic" src="/icons/vol-off.svg" alt="">
      </button>
    </div>
    <div class="keyboard__center">
      <div class="keyboard__rows">
        <div v-for="(row, index) in props.keyboard" :key="index" class="keyboard__row">
          <button v-for="(button, index) in row" :key="index" :class="getClass(button)">

            <template v-if="Array.isArray(button.content)">
              <span v-for="(item, index) in button.content" :key="index">{{ item }}</span>
            </template>

            <template v-else-if="typeof button.content === 'string'">
              {{ getContent(button) }}
            </template>

          </button>
        </div>
      </div>
    </div>
    <div class="keyboard__right">
      <button class="button-icon">
        <img class="button-icon__bg" src="" alt="">
      </button>
    </div>
  </div>

</template>


<script setup lang="ts">

import type { Keyboard, KeyboardKey } from '../../types';
import { computed } from 'vue';

const props = defineProps<{
  keyboard: Keyboard,
  nextLetter?: string
}>();

const getContent = (button: KeyboardKey) => {
  return typeof button.content === "string" && button.type === "letter"
    ? button.content.toUpperCase()
    : button.content;
};



const getClass = (button: KeyboardKey) => {

  const arrClass = [];
  const content = getContent(button);
  const nextCharIsLetter = props.nextLetter?.toLowerCase() !== props.nextLetter?.toUpperCase();
  const nextCharisCapital = props.nextLetter === props.nextLetter?.toUpperCase();


  arrClass.push("keyboard__key");
  arrClass.push(`keyboard__key_size-${button.size}`);
  arrClass.push(`keyboard__key_type-${button.type}`);


  if (button.content === "shift" && nextCharIsLetter && nextCharisCapital) {
    arrClass.push("keyboard__key_animation-blink");
  }


  if (props.nextLetter && typeof content === "string") {
    if (props.nextLetter.toLowerCase() === content.toLowerCase()) {
      arrClass.push("keyboard__key_animation-blink");
    }


  }

  if (button.extraClass) arrClass.push(button.extraClass);
  if (button.align) arrClass.push(`keyboard__key_align-${button.align}`);
  if (button.opacity) arrClass.push("keyboard__key_opacity-20");

  return arrClass;
};

</script>