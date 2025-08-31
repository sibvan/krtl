<template>
  <main class="main">
    <div class="typing">
      <div class="typing__phrase">
        <p @beforeinput.prevent="handleBeforeInput" contenteditable="true" class="typing__input">{{ model }}</p>
        <p class="typing__text">{{ props.phrase }}</p>
      </div>
      <div class="typing__translate">
        <p>Что-то случилось с душем</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

const emit = defineEmits<{
  (e: 'beforeInput', event: InputEvent): void
}>();

const handleBeforeInput = (e: Event) => {
  emit('beforeInput', e as InputEvent);
};

const model = defineModel();

const props = defineProps({
  phrase: String
});


</script>