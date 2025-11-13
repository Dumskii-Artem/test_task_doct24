// src\components\pagination\Pagination.tsx

import styles from './Pagination.module.css';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const createPageNumbers = () => {
    const delta = 2;
    const range: number[] = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) range.unshift(NaN);
    if (currentPage + delta < totalPages - 1) range.push(NaN);

    return [1, ...range, totalPages];
  };

  const pages = createPageNumbers();

  return (
    <div className={styles.pagination}>
      <button disabled={currentPage === 1} onClick={() => onPageChange(1)}>
        « Первая
      </button>

      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        ‹ Назад
      </button>

      {pages.map((page, index) =>
        isNaN(page) ? (
          <span key={index}>…</span>
        ) : (
          <button
            key={index}
            className={page === currentPage ? styles.active : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}

      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Вперёд ›
      </button>

      <button disabled={currentPage === totalPages} onClick={() => onPageChange(totalPages)}>
        Последняя »
      </button>
    </div>
  );
}
