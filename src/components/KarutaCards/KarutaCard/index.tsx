/* eslint-disable react/no-array-index-key */
import cn from "classnames";
import { Char, isSym, isNum, Poem } from "../../../data/types";
import styles from "./KarutaCard.module.css";

function renderChar(char: Char, i?: number) {
  if (isSym(char)) {
    return (
      <div key={`char-${i}`} className={cn(styles.char, styles.jp)}>
        <ruby>
          {char.sym}
          {char.furigana && <rt>{char.furigana}</rt>}
        </ruby>
      </div>
    );
  }

  if (isNum(char)) {
    return (
      <div key={`char-${i}`} className={cn(styles.char, styles.num)}>
        <span>{char.num}</span>
      </div>
    );
  }
  return <div key={`char-${i}`} className={styles.char} />;
}

interface KarutaCardProps {
  poem: Poem;
}

export default function KarutaCard({ poem }: KarutaCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.poem}>
        {poem
          .slice()
          .reverse()
          .map((col, i) => (
            <div key={`col-${i}`} className={styles.col}>
              {col.map(renderChar)}
            </div>
          ))}
      </div>
    </div>
  );
}
