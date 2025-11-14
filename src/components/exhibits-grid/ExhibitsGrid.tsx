// src\components\exhibits-grid\ExhibitsGrid.tsx

import { useSelector } from '@services/store';
import ExhibitCard from '../exhibit-card/ExhibitCard';
import styles from './ExhibitsGrid.module.css';
import { selectCurrentPageExhibits } from './selectors';

export default function ExhibitsGrid() {
  const stolenIds = useSelector(state => state.stolen.ids);
  const exhibits = useSelector(selectCurrentPageExhibits);
  const filtered = exhibits.filter(item => !stolenIds.includes(item.objectID));

  return (
    <div className={styles.grid}>
      <div className={styles.grid}>
        {filtered.map((exhibit) => (
          <ExhibitCard key={exhibit.objectID} exhibit={exhibit} />
        ))}
      </div>
    </div>
  );      
}
