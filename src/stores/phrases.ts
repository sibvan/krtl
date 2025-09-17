import { defineStore } from "pinia";
import { ref } from "vue";
import { getData } from "../utils/fetcher";
import { getRandomId } from "../utils/random";

export const usePhrasesStore = defineStore("phrases", () => {
  const phraseList = ref([]);
  const oneMonth = 1000 * 60 * 60 * 24 * 10;

  const getPhraseList = async () => {
    const now = Date.now();
    const loadingDate = localStorage.getItem("loadingDate") ? JSON.parse(localStorage.getItem("loadingDate")!) : 0;
    const localPhrases = localStorage.getItem("phrases");
    let difference = 0;

    if (loadingDate) {
      difference = now - loadingDate;
    }

    if (localPhrases && difference < oneMonth) {
      phraseList.value = JSON.parse(localPhrases);
    } else {
      phraseList.value = await getData("phrases");
      localStorage.setItem("phrases", JSON.stringify(phraseList.value));
      localStorage.setItem("loadingDate", JSON.stringify(Date.now()));
    }
  };

  const getRandomPhrase = () => {
    const id = getRandomId(phraseList.value);
    const randomPhrase = phraseList.value[id];
    return randomPhrase;
  };

  return { getPhraseList, getRandomPhrase };
});
