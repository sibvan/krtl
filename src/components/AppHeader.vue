<script setup lang="ts">
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; 
import { onMounted } from 'vue';


onMounted(() => {
    tippy('.header__btn-theme', {
        content: 'Скоро',
        trigger: 'click',
        theme: 'tomato',
    });

    tippy('.header__btn-sound', {
        content: 'Скоро',
        trigger: 'click',
        theme: 'tomato',
    });
});



</script>

<template lang="pug">
header.header
    div.header__inner
        div.header__logo
            h1.header__title Клавиатурный тренажёр
            p.header__desc Бета-версия, об ошибках пишите 
                a.header__link(href = 'https://t.me/siberian_vanya' target='_blank') сюда
        div.header__btns
            div.header__btn.header__btn-theme
            div.header__btn.header__btn-sound
</template>

<style scoped lang="scss">
.header {

    display: flex;
    justify-content: center;

    &__link {
        color: #000;
        text-decoration-color: rgba($color: #000000, $alpha: .2);
        transition: text-decoration-color .5s;

        &:hover {
            text-decoration-color: rgba($color: #000000, $alpha: 1);
        }
    }

    &__inner {
        display: flex;
        flex-direction: row;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
    }

    &__logo {
        display: inline-block;
        border-radius: 100px;
        padding: 8px 16px;
        background: rgba($color: #000000, $alpha: .1);
        box-sizing: border-box;
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

    &__btn {
        width: 48px;
        height: 48px;
        box-shadow: inset 0 0 0 1px rgba($color: #000000, $alpha: .2);
        border-radius: 100px;
        transition: box-shadow .5s;

        &:hover {
            box-shadow: inset 0 0 0 1.5px rgba($color: #000000, $alpha: 1);
            cursor: pointer;
        }
    }

    &__btns {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }

    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;

        &-theme {
            &::after {
                content: '';
                display: block;
                width: 24px;
                height: 24px;
                background: url("../assets/icons/theme.svg") no-repeat center / cover;
            }
        }

        &-sound {
            &::after {
                content: '';
                display: block;
                width: 24px;
                height: 24px;
                background: url("../assets/icons/sound.svg") no-repeat center / cover;
            }
        }
    }
}
</style>
