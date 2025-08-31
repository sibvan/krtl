interface KeyboardKey {
  content: string | string[];
  size: number;
  type: "letter" | "text";
  align?: "bottom-right" | "bottom-left" | "left" | "right" | "center";
  opacity?: boolean;
  extraClass?: string;
}

interface Letter {
  text: string;
  wrong: boolean
}

type KeyboardRow = KeyboardKey[];

type Keyboard = KeyboardRow[];



export type { KeyboardKey, KeyboardRow, Keyboard, Letter }