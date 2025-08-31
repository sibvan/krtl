<template>

  <div class="keyboard">
    <div class="keyboard__left">
      <button class="button-icon">
        <img src="/icons/vol-off.svg" alt="">
      </button>
    </div>
    <div class="keyboard__center">
      <div class="keyboard__rows">
        <div v-for="(row, index) in currenentKeyboadr" :key=index class="keyboard__row">
          <button :class="getClass(button)" v-for="(button, index) in row" :key="index">

            <template v-if="Array.isArray(button.content)">
              <span v-for="(item, i) in button.content" :key="i">{{ item }}</span>
            </template>

            <template v-else-if="typeof button.content === 'string'">
              {{ getContent(button) }}
            </template>



          </button>
        </div>
      </div>
    </div>
    <div class="keyboard__right">
      <button class="button-icon">
        <img class="button-icon__bg" src="/bg.jpg" alt="">
      </button>
    </div>
  </div>

</template>


<script setup lang="ts">


interface KeyboardKey {
  content: string | string[];
  size: number;
  type: "letter" | "text";
  align?: "bottom-right" | "bottom-left" | "left" | "right" | "center";
  opacity?: boolean;
  extraClass?: string;
}

type KeyboardRow = KeyboardKey[];

type Keyboard = KeyboardRow[];

const keyboardRu: Keyboard = [
  [{ content: "ё", size: 96, type: "letter" },
  { content: "1", size: 96, type: "letter" },
  { content: "2", size: 96, type: "letter" },
  { content: "3", size: 96, type: "letter" },
  { content: "4", size: 96, type: "letter" },
  { content: "5", size: 96, type: "letter" },
  { content: "6", size: 96, type: "letter" },
  { content: "7", size: 96, type: "letter" },
  { content: "8", size: 96, type: "letter" },
  { content: "9", size: 96, type: "letter" },
  { content: "0", size: 96, type: "letter" },
  { content: "-", size: 96, type: "letter" },
  { content: "=", size: 96, type: "letter", opacity: true },
  { content: "delete", size: 168, type: "text", align: 'bottom-right' },],

  [{ content: "tab", size: 168, type: "text", opacity: true, align: "bottom-left" },
  { content: "й", size: 96, type: "letter" },
  { content: "ц", size: 96, type: "letter" },
  { content: "у", size: 96, type: "letter" },
  { content: "к", size: 96, type: "letter" },
  { content: "е", size: 96, type: "letter" },
  { content: "н", size: 96, type: "letter" },
  { content: "г", size: 96, type: "letter" },
  { content: "ш", size: 96, type: "letter" },
  { content: "щ", size: 96, type: "letter" },
  { content: "з", size: 96, type: "letter" },
  { content: "х", size: 96, type: "letter" },
  { content: "ъ", size: 96, type: "letter" },
  { content: "\\", size: 96, type: "letter", opacity: true },
  ],

  [
    {
      content: ["·", "capslock"], size: 192, type: "text", opacity: true, align: "left"
    },
    { content: "ф", size: 96, type: "letter" },
    { content: "ы", size: 96, type: "letter" },
    { content: "в", size: 96, type: "letter" },
    { content: "а", size: 96, type: "letter" },
    { content: "п", size: 96, type: "letter" },
    { content: "р", size: 96, type: "letter" },
    { content: "о", size: 96, type: "letter" },
    { content: "л", size: 96, type: "letter" },
    { content: "д", size: 96, type: "letter" },
    { content: "ж", size: 96, type: "letter" },
    { content: "э", size: 96, type: "letter" },
    { content: "return", size: 180, type: "text", align: "bottom-right" },
  ],

  [
    { content: "shift", size: 240, type: "text", align: "bottom-left" },
    { content: "я", size: 96, type: "letter" },
    { content: "ч", size: 96, type: "letter" },
    { content: "с", size: 96, type: "letter" },
    { content: "м", size: 96, type: "letter" },
    { content: "и", size: 96, type: "letter" },
    { content: "т", size: 96, type: "letter" },
    { content: "ь", size: 96, type: "letter" },
    { content: "б", size: 96, type: "letter" },
    { content: "ю", size: 96, type: "letter" },
    { content: ".", size: 96, type: "letter" },
    { content: "shift", size: 240, type: "text", align: "bottom-right" },
  ],

  [
    { content: "fn", size: 96, type: "text", align: "bottom-right", opacity: true },
    { content: ["⌃", "сontrol"], size: 96, type: "text", align: "right", opacity: true },
    { content: ["⌥", "option"], size: 96, type: "text", align: "right", opacity: true },
    { content: ["⌘", "command"], size: 144, type: "text", align: "right", opacity: true },
    { content: "", size: 504, type: "text" },
    { content: ["⌘", "command"], size: 144, type: "text", align: "right", opacity: true },
    { content: ["⌥", "option"], size: 96, type: "text", align: "right", opacity: true },
    { content: "◀", size: 96, type: "text", align: "center", opacity: true },
    { content: ["▲", "▼"], size: 96, type: "text", align: "center", opacity: true, extraClass: "rename" },
    { content: "▶", size: 96, type: "text", align: "center", opacity: true },
  ]

]


const keyboardEn: Keyboard = [
  [{ content: "`", size: 96, type: "letter", opacity: true },
  { content: "1", size: 96, type: "letter" },
  { content: "2", size: 96, type: "letter" },
  { content: "3", size: 96, type: "letter" },
  { content: "4", size: 96, type: "letter" },
  { content: "5", size: 96, type: "letter" },
  { content: "6", size: 96, type: "letter" },
  { content: "7", size: 96, type: "letter" },
  { content: "8", size: 96, type: "letter" },
  { content: "9", size: 96, type: "letter" },
  { content: "0", size: 96, type: "letter" },
  { content: "-", size: 96, type: "letter" },
  { content: "=", size: 96, type: "letter", opacity: true },
  { content: "delete", size: 168, type: "text", align: 'bottom-right' },],

  [{ content: "tab", size: 168, type: "text", opacity: true, align: "bottom-left" },
  { content: "q", size: 96, type: "letter" },
  { content: "w", size: 96, type: "letter" },
  { content: "e", size: 96, type: "letter" },
  { content: "r", size: 96, type: "letter" },
  { content: "t", size: 96, type: "letter" },
  { content: "y", size: 96, type: "letter" },
  { content: "u", size: 96, type: "letter" },
  { content: "i", size: 96, type: "letter" },
  { content: "o", size: 96, type: "letter" },
  { content: "p", size: 96, type: "letter" },
  { content: "[", size: 96, type: "letter", opacity: true },
  { content: "]", size: 96, type: "letter", opacity: true },
  { content: "\\", size: 96, type: "letter", opacity: true },
  ],

  [
    {
      content: ["·", "capslock"], size: 192, type: "text", opacity: true, align: "left"
    },
    { content: "a", size: 96, type: "letter" },
    { content: "s", size: 96, type: "letter" },
    { content: "d", size: 96, type: "letter" },
    { content: "f", size: 96, type: "letter" },
    { content: "g", size: 96, type: "letter" },
    { content: "h", size: 96, type: "letter" },
    { content: "j", size: 96, type: "letter" },
    { content: "k", size: 96, type: "letter" },
    { content: "l", size: 96, type: "letter" },
    { content: ";", size: 96, type: "letter", opacity: true },
    { content: "'", size: 96, type: "letter" },
    { content: "return", size: 180, type: "text", align: "bottom-right" },
  ],

  [
    { content: "shift", size: 240, type: "text", align: "bottom-left" },
    { content: "z", size: 96, type: "letter" },
    { content: "x", size: 96, type: "letter" },
    { content: "c", size: 96, type: "letter" },
    { content: "v", size: 96, type: "letter" },
    { content: "b", size: 96, type: "letter" },
    { content: "n", size: 96, type: "letter" },
    { content: "m", size: 96, type: "letter" },
    { content: ",", size: 96, type: "letter" },
    { content: ".", size: 96, type: "letter" },
    { content: "/", size: 96, type: "letter", opacity: true },
    { content: "shift", size: 240, type: "text", align: "bottom-right" },
  ],

  [
    { content: "fn", size: 96, type: "text", align: "bottom-right", opacity: true },
    { content: ["⌃", "сontrol"], size: 96, type: "text", align: "right", opacity: true },
    { content: ["⌥", "option"], size: 96, type: "text", align: "right", opacity: true },
    { content: ["⌘", "command"], size: 144, type: "text", align: "right", opacity: true },
    { content: "", size: 504, type: "text" },
    { content: ["⌘", "command"], size: 144, type: "text", align: "right", opacity: true },
    { content: ["⌥", "option"], size: 96, type: "text", align: "right", opacity: true },
    { content: "◀", size: 96, type: "text", align: "center", opacity: true },
    { content: ["▲", "▼"], size: 96, type: "text", align: "center", opacity: true, extraClass: "rename" },
    { content: "▶", size: 96, type: "text", align: "center", opacity: true },
  ]

]



const currenentKeyboadr = keyboardEn;

const getContent = (button: KeyboardKey) => {
  return typeof button.content === "string" && button.type === "letter"
    ? button.content.toUpperCase()
    : button.content;
};

const getClass = (button: KeyboardKey) => {
  const arrClass = [];

  arrClass.push("keyboard__key");
  arrClass.push(`keyboard__key_size-${button.size}`);
  arrClass.push(`keyboard__key_type-${button.type}`);

  if (button.extraClass) arrClass.push(button.extraClass);
  if (button.align) arrClass.push(`keyboard__key_align-${button.align}`);
  if (button.opacity) arrClass.push("keyboard__key_opacity-20");

  return arrClass;
};

</script>