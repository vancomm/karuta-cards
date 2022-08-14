import KarutaCard from "./KarutaCard";
import * as poemsObj from "./poems";
import styles from "./KarutaCards.module.css";

export default function KarutaCards() {
  const poems = Object.values(poemsObj);
  return (
    <div className={styles.mat}>
      {poems.map((poem) => (
        <KarutaCard poem={poem} />
      ))}
    </div>
  );
}
