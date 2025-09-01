import { defineStore } from "pinia";
import { ref } from "vue";

export const usePhrasesStore = defineStore("phrases", () => {
  const phraseList = ref([]);


  async function getPhraseList() {
    const url = "https://s1112388.smrtp.ru/krtl/api/content/items/phrases";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "api-key": "API-3db20fa9a7c6318f1acdd670583342782170f725",
        },
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      phraseList.value = result;
    } catch (error) {}
  }

  const getRandomPhrase = () => {
    const arrLength = phraseList.value.length;
    const randomId = Math.floor(Math.random() * arrLength);
    const randomPhrase = phraseList.value[randomId];
    return randomPhrase;
  };

  return { getPhraseList, getRandomPhrase };
});
