interface KeyboardKey {
  content: string | string[];
  size: number;
  type: "letter" | "text";
  align?: "bottom-right" | "bottom-left" | "left" | "right" | "center";
  opacity?: boolean;
  extraClass?: string;
}

interface Phrase {
  ru: string;
  en: string;
}

type KeyboardRow = KeyboardKey[];

type Keyboard = KeyboardRow[];

interface Bg {
  bg: { path: string };
}

export type { KeyboardKey, KeyboardRow, Keyboard, Bg, Phrase };
