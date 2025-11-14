// src\pages\likedPage\LikedPage.tsx

import ExhibitsGrid from '@components/exhibits-grid/ExhibitsGrid';
import { useSelector } from '@services/store';
import styles from './LikedPage.module.css';

export default function LikedPage() {
  const liked = useSelector(state => state.likes.items);

  return (
    <section className={styles.section}>
      {liked.length === 0 && (
        <p className={styles.emptyMessage}>Вы пока ничего не лайкнули.</p>
      )}
      <ExhibitsGrid 
        items={liked} 
        gridClassName={styles.gridLiked} 
        cardClassName={styles.cardFixed}
      />
    </section>
  );
}
