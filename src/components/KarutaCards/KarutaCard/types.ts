export interface Kanji {
  kanji: string;
  furigana?: string;
}

export interface Kana {
  kana: string;
}

export interface Num {
  num: number;
}

export interface Empty {}

export type Char = Readonly<Kanji | Kana | Num | Empty>;

export type Col = Readonly<Char[]>;

export type Poem = Readonly<Col[]>;

export function isKanji(obj: any): obj is Kanji {
  return Object.hasOwn(obj, "kanji");
}

export function isKana(obj: any): obj is Kana {
  return Object.hasOwn(obj, "kana");
}

export function isNum(obj: any): obj is Num {
  return Object.hasOwn(obj, "num");
}

export function kanji(k: string, f?: string): Kanji {
  return { kanji: k, furigana: f };
}

export function kana(k: string): Kana {
  return { kana: k };
}

export function num(n: number): Num {
  return { num: n };
}

export function empty(): Empty {
  return {};
}
