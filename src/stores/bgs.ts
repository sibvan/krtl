import { defineStore } from "pinia";
import { ref } from "vue";

export const useBgsStore = defineStore("bgs", () => {
  const bgList = ref([]);

  const assetsUrl = "https://s1112388.smrtp.ru/krtl/storage/uploads";

  async function getBgList() {
    const url = "https://s1112388.smrtp.ru/krtl/api/content/items/bgs";
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
      bgList.value = result;
    } catch (error) {}
  }

  const getRandomBg = () => {
    const arrLength = bgList.value.length;
    const randomId = Math.floor(Math.random() * arrLength);
    const randomBg = bgList.value[randomId];
    const url = assetsUrl + randomBg.bg.path;
    return url;
  };

  return { getBgList, getRandomBg };
});
