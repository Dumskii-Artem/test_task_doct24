// src\components\exhibits-grid\ExhibitsGrid.tsx

import { useSelector } from '@services/store';
import ExhibitCard from '../exhibit-card/ExhibitCard';
import styles from './ExhibitsGrid.module.css';
import { selectCurrentPageExhibits } from './selectors';
import type { TExhibit } from '@services/exhibits';

type GridProps = {
  items?: TExhibit[];
  gridClassName?: string; 
  cardClassName?: string; 
};

export default function ExhibitsGrid({ items, gridClassName, cardClassName }: GridProps) {
  const stolenIds = useSelector(state => state.stolen.ids);
  const exhibits = useSelector(selectCurrentPageExhibits);

  // Если items переданы → используем их
  const list = items ? items : exhibits.filter(item => !stolenIds.includes(item.objectID));

  return (
    <div className={`${styles.grid} ${gridClassName || ''}`}>
      {list.map((exhibit) => (
        <ExhibitCard 
          key={exhibit.objectID} 
          exhibit={exhibit} 
          cardClassName={cardClassName}
        />
      ))}
    </div>
  );      
}
