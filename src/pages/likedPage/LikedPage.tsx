// src\pages\likedPage\LikedPage.tsx

import ExhibitsGrid from '@components/exhibits-grid/ExhibitsGrid';
import { useSelector } from '@services/store';
import styles from './LikedPage.module.css';

export default function LikedPage() {
  const likedIds = useSelector((state) => state.likes.ids);
  const entities = useSelector((state) => state.exhibits.entities);

  const likedExhibits = likedIds
    .map((id) => entities[id])
    .filter(Boolean);

  return (
    <section className={styles.section}>
      {likedExhibits.length === 0 && (
        <p className={styles.emptyMessage}>Вы пока ничего не лайкнули.</p>
      )}
      <ExhibitsGrid 
        items={likedExhibits} 
        gridClassName={styles.gridLiked} 
        cardClassName={styles.cardFixed}
      />
    </section>
  );
}
