import { defineStore } from "pinia";
import { ref } from 'vue';

export interface IPhrase {
    id: number,
    phrase: string,
    translation: string,
}

export const usePhrasesStore = defineStore('phrases', () => {

    const phrasesList = ref<IPhrase[]>([]);

    const getPhrases = async () => {
        const response = await fetch('/data.json');
        const json = await response.json();
        phrasesList.value = json;
        return phrasesList.value;
    }

    const getRandomPhrase = () => {
        const randomIndex = Math.floor(Math.random() * phrasesList.value.length);
        return phrasesList.value[randomIndex];
    }


    return {  getPhrases, getRandomPhrase }

});