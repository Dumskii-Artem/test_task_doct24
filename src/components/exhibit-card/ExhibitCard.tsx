// src\components\exhibit-card\ExhibitCard.tsx

import styles from './ExhibitCard.module.css';
import type { TExhibit } from '@services/exhibits/exhibits-types';

type Props = {
  exhibit: TExhibit;
};

export default function ExhibitCard({ exhibit }: Props) {
  return (
    <div className={styles.card}>
      <img
        src={exhibit.primaryImageSmall || '/no-image.png'}
        alt={exhibit.title}
        className={styles.image}
      />

      <div className={styles.info}>
        <h3 className={styles.title}>{exhibit.title}</h3>
        <p className={styles.author}>{exhibit.artistDisplayName}</p>
        <p className={styles.date}>{exhibit.objectDate}</p>
        <p className={styles.department}>{exhibit.department}</p>
      </div>
    </div>
  );
}
