<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue';
import KeyboardR1 from './AppKeyboardRows/KeyboardR1.vue';
import KeyboardR2 from './AppKeyboardRows/KeyboardR2.vue';
import KeyboardR3 from './AppKeyboardRows/KeyboardR3.vue';
import KeyboardR4 from './AppKeyboardRows/KeyboardR4.vue';
import KeyboardR5 from './AppKeyboardRows/KeyboardR5.vue';


import { usePhrasesStore } from '../stores/phrases';
import type { IPhrase } from '../stores/phrases';

const phrasesStore = usePhrasesStore();
const randomPhrase = ref<IPhrase>({} as IPhrase);

onMounted(async () => {
    await phrasesStore.getPhrases();
    randomPhrase.value = phrasesStore.getRandomPhrase();
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('keydown', checkShiftDown);
    window.addEventListener('keyup', checkShiftUp);

});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('keydown', checkShiftDown);
    window.removeEventListener('keyup', checkShiftUp);
});

const currentIndex = ref(0);
const isShift = ref(false);



const before = ref<string[]>([]);
const current = computed(() => randomPhrase.value.phrase?.slice(currentIndex.value, currentIndex.value + 1) || '');
const after = computed(() => randomPhrase.value.phrase?.slice(currentIndex.value + 1, randomPhrase.value.phrase.length) || '');

function checkShiftDown(event: KeyboardEvent) {
    if (event.key === 'Shift') {
        isShift.value = true;
    }
}

function checkShiftUp(event: KeyboardEvent) {
    if (event.key === 'Shift') {
        isShift.value = false;
    }
}


function handleKeydown(event: KeyboardEvent) {



    if (event.code === 'Space') event.preventDefault();
    if (event.code === 'Enter') {
        randomPhrase.value = phrasesStore.getRandomPhrase();
        currentIndex.value = 0;
        before.value = [];
    }
    if (event.code === 'Backspace' && before.value.length != 0) {
        before.value.pop();
        currentIndex.value--;
    }

    if (event.key.length !== 1) return;

    const expected = randomPhrase.value.phrase[currentIndex.value];
    if (!expected) return;

    if (event.key === expected) {
        before.value.push(expected);
    } else {
        before.value.push(`<span class="text__wrong">${expected}</span>`);
    }

    currentIndex.value++;
}

</script>

<template lang="pug">
main
    div.text
        div.text__string-for-print
            p.text__ka
                span(v-html = "before.join('')")
                span.text__current {{ current }}
                span(v-if="randomPhrase.phrase") {{ after }}
                span(v-else) Фраза загружается...
        p(v-if='randomPhrase.translation').text__ru {{ randomPhrase.translation }}
        p(v-else).text__ru Подождите или перезагрузите страницу
    div.keyboard
        button.keyboard__btn
            input.keyboard__input
            p.keyboard__title Открыть клавиатуру
            p.keyboard__desc Чтобы начать печатать текст
        div.keyboard__row
            <KeyboardR1 :current="current" />
        div.keyboard__row
            <KeyboardR2 :current="current" :isShift = "isShift"/>
        div.keyboard__row
            <KeyboardR3 :current="current" :isShift = "isShift" />
        div.keyboard__row
            <KeyboardR4 :current="current" :isShift = "isShift" />
        div.keyboard__row
            <KeyboardR5 :current="current" />
    p.keyboard__enter Enter — следующая фраза    
</template>

<style scoped lang="scss">
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

.text {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;



    &__string-for-print {
        position: relative;
    }


    &__ka {
        font-size: 24px;
        font-weight: 400;
        line-height: 120%;

        position: relative;
        white-space: pre-wrap;
        text-align: center;
    }

    &__ru {
        font-size: 16px;
        font-weight: 400;
        opacity: 0.5;
        text-align: center;
        line-height: 110%;
    }

    &__current {
        position: relative;

        &::after {
            content: '';
            display: block;
            background: #FCC151;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 2px;
            z-index: -1;
        }
    }

}

.keyboard {
    width: calc(100vw / 3 * 2);
    display: flex;
    flex-direction: column;
    gap: calc(100vw / 3 * 2 / 135);
    padding: calc(100vw / 3 * 2 / 67.5);
    box-sizing: border-box;
    box-shadow: inset 0 0 0 1px rgba($color: #000000, $alpha: .2);
    border-radius: calc(100vw / 3 * 2 / 33.75);
    position: relative;

    &__enter {
        font-size: 16px;
        font-weight: 400;
        line-height: 110%;
    }

    &__btn {
        display: none;
        border-radius: 100px;
        padding: 8px 16px;
        background: rgba($color: #000000, $alpha: 1);
        color: #E9E8E4;
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: none;

    }

    &__input {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 0px;
        padding: 0;
        text-align: center;
        background-color: #fff;
        font-size: 24px;
        color: transparent;
        background: rgba($color: #fff, $alpha: 0);
        font-size: 24px;
        border-radius: 100px;
    }


    &__title {
        font-size: 16px;
        font-weight: 700;
        line-height: 100%;
        white-space: nowrap;
    }

    &__desc {
        margin-top: 4px;
        font-size: 12px;
        font-weight: 400;
        line-height: 100%;
        white-space: nowrap;
    }

    &__row {
        display: flex;
        justify-content: space-between;
        z-index: -1;
    }




}


@media (max-width: 668px) {
    main {
        gap: 16px;
    }
}


@media (max-width: 444px) {
    .keyboard {
        width: 100%;
    }

}

@media (pointer:none),
(pointer:coarse) {
    .keyboard {
        .keyboard__row {
            opacity: .1;
        }

        &__btn {
            display: inline-block;
        }
    }

}
</style>
