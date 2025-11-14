// src\pages\stolenPage\stolenPage.tsx

import ExhibitsGrid from '@components/exhibits-grid/ExhibitsGrid';
import { useSelector } from '@services/store';
import styles from './stolenPage.module.css';

export default function StolenPage() {
  const stolen = useSelector(state => state.stolen.items);

  return (
    <section className={styles.section}>
      {stolen.length === 0 && (
        <p className={styles.emptyMessage}>Вы пока ничего не лайкнули.</p>
      )}
      <ExhibitsGrid 
        items={stolen} 
        gridClassName={styles.gridLiked} 
        cardClassName={styles.cardFixed}
      />
    </section>
  );
}
