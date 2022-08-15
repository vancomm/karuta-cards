export interface Sym {
  sym: string;
  furigana?: string;
}

export interface Num {
  num: number;
}

export interface Empty {}

export type Char = Readonly<Sym | Num | Empty>;

export type Col = Readonly<Char[]>;

export type Poem = Readonly<Col[]>;

export function isSym(obj: any): obj is Sym {
  return Object.hasOwn(obj, "sym");
}

export function isNum(obj: any): obj is Num {
  return Object.hasOwn(obj, "num");
}

export function sym(k: string, f?: string): Sym {
  return { sym: k, furigana: f };
}

export function num(n: number): Num {
  return { num: n };
}

export function empty(): Empty {
  return {};
}
