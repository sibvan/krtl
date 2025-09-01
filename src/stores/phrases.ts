import { defineStore } from "pinia";
import { ref } from "vue";
import { getData } from "../utils/fetcher";

export const usePhrasesStore = defineStore("phrases", () => {
  const phraseList = ref([]);

    const getPhraseList = async () => {
    phraseList.value = await getData('phrases');
  }

  const getRandomPhrase = () => {
    const arrLength = phraseList.value.length;
    const randomId = Math.floor(Math.random() * arrLength);
    const randomPhrase = phraseList.value[randomId];
    return randomPhrase;
  };

  return { getPhraseList, getRandomPhrase };
});
