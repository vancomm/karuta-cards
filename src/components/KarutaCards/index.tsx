import KarutaCard from "./KarutaCard";
import styles from "./KarutaCards.module.css";
import cardsJson from "../../data/cards.json";
import { Poem } from "../../data/types";

interface Card {
  index: number;
  poem: Poem;
}

export default function KarutaCards() {
  const cards: Card[] = cardsJson;

  return (
    <div className={styles.mat}>
      {cards
        .sort((a, b) => a.index - b.index)
        .map(({ poem }, i) => (
          <KarutaCard key={i} poem={poem} />
        ))}
    </div>
  );
}
