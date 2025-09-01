import { defineStore } from "pinia";
import { ref } from "vue";
import { getData } from "../utils/fetcher";
import { getRandomId } from "../utils/random";

import type { Bg } from "../types";

export const useBgsStore = defineStore("bgs", () => {
  const bgList = ref([]);

  const assetsUrl = "https://s1112388.smrtp.ru/krtl/storage/uploads";

  const getBgList = async () => {
    bgList.value = await getData("bgs");
  };

  const getRandomBg = () => {

    const id = getRandomId(bgList.value);
    const randomBg: Bg = bgList.value[id];
    return assetsUrl + randomBg.bg.path;

  };

  return { getBgList, getRandomBg };
});
