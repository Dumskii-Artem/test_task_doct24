// src\pages\productsPage\ProductsPage.tsx

// import { getProducts, type Product } from "@api/picsumApi";
// import { PAGE_SIZE } from "@const";
// import { useEffect, useState } from "react";
import ExhibitsGrid from '@components/exhibits-grid/ExhibitsGrid';
import styles from './ProductsPage.module.css';
import Pagination from '@components/pagination/Pagination';
import { useDispatch, useSelector } from '@services/store';
import { setCurrentPage } from '@services/pagination';
import { selectTotalPages } from '@services/search/selectors';

export default function ProductsPage() {
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const dispatch = useDispatch();

  const totalPages = useSelector(selectTotalPages);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <section className={styles.section}>
      <ExhibitsGrid />
      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
