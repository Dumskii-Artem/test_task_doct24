// src\pages\productsPage\ProductsPage.tsx

// import { getProducts, type Product } from "@api/picsumApi";
// import { PAGE_SIZE } from "@const";
// import { useEffect, useState } from "react";
import ExhibitsGrid from '@components/exhibits-grid/ExhibitsGrid';
import styles from './ProductsPage.module.css';
import Pagination from '@components/pagination/Pagination';
import { useState } from 'react';

export default function ProductsPage() {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
