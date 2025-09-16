import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsStore = defineStore("settings", () => {
  const volume = ref(true);

  if (localStorage.volume) {
    volume.value = JSON.parse(localStorage.volume);
  }

  const switchVolume = () => {
    volume.value = !volume.value;
    localStorage.setItem("volume", JSON.stringify(volume.value));
  };

  return { volume, switchVolume };
});
