<script setup lang="ts">

</script>

<template lang="pug">
footer.footer
    a.footer__btn(href='https://moneypot.mycredo.ge/?publicId=fdf495f0-2bc2-4156-b27c-3388097e3c79' target='_blank') Поддержать проект
    p.footer__dev Сделано в 
        a.footer__link(href = 'https://sibvan.dev/' target = '_blank') sibvan.dev
</template>

<style scoped lang="scss">
.footer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;

    &__btn {
        color: #E9E8E4;
        font-size: 16px;
        font-weight: 700;
        line-height: 100%;
        padding: 8px 16px;
        background: #000;
        border-radius: 100px;
        box-sizing: border-box;
        cursor: pointer;
        text-decoration: none;
        box-shadow: inset 0 0 0 1.5px rgba($color: #000000, $alpha: 1);
        transition: background .5s, color .5s;

        &:hover {
            background: none;
            color: #000;

        }
    }

    &__link {
        color: #000;
        text-decoration-color: rgba($color: #000000, $alpha: .2);
        transition: text-decoration-color .5s;

        &:hover {
            text-decoration-color: rgba($color: #000000, $alpha: 1);
        }
    }

    &__dev {
        color: #000;
        font-size: 12px;
        font-weight: 400;
        line-height: 100%;
    }
}
</style>
