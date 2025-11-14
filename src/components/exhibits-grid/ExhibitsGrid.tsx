// src\components\exhibits-grid\ExhibitsGrid.tsx

import { useSelector } from '@services/store';
import ExhibitCard from '../exhibit-card/ExhibitCard';
import styles from './ExhibitsGrid.module.css';
import { selectCurrentPageExhibits } from './selectors';
import type { TExhibit } from '@services/exhibits';
import { useState } from 'react';
import ExhibitModal from '@components/exhibit-modal/ExhibitModal';

type GridProps = {
  items?: TExhibit[];
  gridClassName?: string; 
  cardClassName?: string; 
};

export default function ExhibitsGrid({ items, gridClassName, cardClassName }: GridProps) {
  const stolenIds = useSelector(state => state.stolen.ids);
  const exhibits = useSelector(selectCurrentPageExhibits);
  const [activeExhibit, setActiveExhibit] = useState<TExhibit | null>(null);

  // Если items переданы → используем их
  const list = items ? items : exhibits.filter(item => !stolenIds.includes(item.objectID));

  return (
    <>
    <div className={`${styles.grid} ${gridClassName || ''}`}>
      {list.map((exhibit) => (
        <ExhibitCard 
          key={exhibit.objectID} 
          exhibit={exhibit} 
          cardClassName={cardClassName}
          onCardClick={() => setActiveExhibit(exhibit)}
        />
      ))}
    </div>

    { activeExhibit && (
      <ExhibitModal
        exhibit={activeExhibit}
        onClose={() => setActiveExhibit(null)}
      />
    )}
    </>  
  )

}
