// src\components\footer\Footer.tsx
import { useDispatch, useSelector } from '@services/store';
import styles from './Footer.module.css';
import { EXHIBIT_PAGE_SIZES } from '@const';
import { setPageSize } from '@services/pagination';
import { useLocation } from 'react-router-dom';


export default function Footer() {
  const dispatch = useDispatch();
  const pageSize = useSelector((state) => state.pagination.pageSize);
  const location = useLocation();
  const showPageSizeSelector = location.pathname === '/exhibits';
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
          <a href='https://github.com/Dumskii-Artem' target='_blank' rel='noopener noreferrer'>
          Dumskii‑Artem — 2025
        </a>
      </div>

 {showPageSizeSelector && (
      <div className={styles.pageSizeBlock}>
        <label htmlFor="pageSize" className={styles.pageSizeLabel}>
          Показывать на странице:
        </label>

        <select
          id="pageSize"
          value={pageSize}
          onChange={(e) => dispatch(setPageSize(Number(e.target.value)))}
          className={styles.pageSizeSelect}
        >
          {EXHIBIT_PAGE_SIZES.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
 )}

      <div className={styles.right}>I think all rights reserved</div>
    </footer>
  );
}