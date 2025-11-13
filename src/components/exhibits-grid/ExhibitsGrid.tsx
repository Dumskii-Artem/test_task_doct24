// src\components\exhibits-grid\ExhibitsGrid.tsx

import { useSelector } from '@services/store';
import ExhibitCard from '../exhibit-card/ExhibitCard';
import styles from './ExhibitsGrid.module.css';
import { selectCurrentPageExhibits } from './selectors';

export default function ExhibitsGrid() {
  const exhibits = useSelector(selectCurrentPageExhibits);

  return (
    <div className={styles.grid}>
      <div className={styles.grid}>
        {exhibits.map((exhibit) => (
          <ExhibitCard key={exhibit.objectID} exhibit={exhibit} />
        ))}
      </div>
    </div>
  );      
}
