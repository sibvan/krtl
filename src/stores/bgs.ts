import { defineStore } from "pinia";
import { ref } from "vue";
import { getData } from "../utils/fetcher";

export const useBgsStore = defineStore("bgs", () => {
  const bgList = ref([]);

  const assetsUrl = "https://s1112388.smrtp.ru/krtl/storage/uploads";

  
  const getBgList = async () => {
    bgList.value = await getData('bgs');
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
