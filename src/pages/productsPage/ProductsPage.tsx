// src\pages\productsPage\ProductsPage.tsx

// import { getProducts, type Product } from "@api/picsumApi";
// import { PAGE_SIZE } from "@const";
// import { useEffect, useState } from "react";
import styles from './ProductsPage.module.css';

export default function ProductsPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Коллекция MET</h1>
      <p className={styles.text}>
        Здесь будет список произведений искусства из музея MET.
      </p>
      <div className={styles.placeholder}>
        <p>⚙️ Страница в разработке...</p>
      </div>
    </section>
  );
}
