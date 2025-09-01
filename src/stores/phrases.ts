import { defineStore } from "pinia";
import { ref } from "vue";
import { getData } from "../utils/fetcher";
import { getRandomId } from "../utils/random";

export const usePhrasesStore = defineStore("phrases", () => {
  const phraseList = ref([]);

    const getPhraseList = async () => {
    phraseList.value = await getData('phrases');
  }

  const getRandomPhrase = () => {

    const id = getRandomId(phraseList.value);
    const randomPhrase = phraseList.value[id];
    return randomPhrase;
  };

  return { getPhraseList, getRandomPhrase };
});
