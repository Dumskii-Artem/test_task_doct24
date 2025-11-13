// src\components\exhibits-grid\ExhibitsGrid.tsx

import { useSelector } from '@services/store';
import ExhibitCard from '../exhibit-card/ExhibitCard';
import styles from './ExhibitsGrid.module.css';

export default function ExhibitsGrid() {
  const exhibits = useSelector((state) => state.exhibits.entities);
  const loadedIds = useSelector((state) => state.exhibits.loadedIds);

  return (
    <div className={styles.grid}>
      {loadedIds.map((id) => (
        <ExhibitCard key={id} exhibit={exhibits[id]} />
      ))}
    </div>
  );
}
