// src\pages\stolenPage\stolenPage.tsx

import ExhibitsGrid from '@components/exhibits-grid/ExhibitsGrid';
import { useSelector } from '@services/store';
import styles from '../productsPage/ProductsPage.module.css';

export default function StolenPage() {
  const stolenIds = useSelector((state) => state.stolen.ids);
  const entities = useSelector((state) => state.exhibits.entities);

  const stolenExhibits = stolenIds
    .map((id) => entities[id])
    .filter(Boolean);

  return (
    <section className={styles.section}>
      <ExhibitsGrid items={stolenExhibits} />
    </section>
  );
}
