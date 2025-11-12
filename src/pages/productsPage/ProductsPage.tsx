// src\pages\productsPage\ProductsPage.tsx

import { getProducts, type Product } from "@api/picsumApi";
import { PAGE_SIZE } from "@const";
import { useEffect, useState } from "react";
import styles from './ProductsPage.module.css';


export default function  ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  async function loadMore() {
    if (loading) return;
    setLoading(true);

    try {
      const newProducts = await getProducts(page, PAGE_SIZE);
      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prev) => [...prev, ...newProducts]);
        setPage((p) => p + 1);
      }
    } catch (err) {
      console.error(err);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMore(); // первая загрузка
  }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Галерея</h1>
      <div className={styles.grid}>
        {products.map((p) => (
          <figure key={p.id} className={styles.card}>
            <img src={p.download_url} alt={p.author} className={styles.image} />
            <figcaption className={styles.caption}>{p.author}</figcaption>
          </figure>
        ))}
      </div>

      {hasMore && (
        <button onClick={loadMore} disabled={loading} className={styles.button}>
          {loading ? 'Загрузка...' : 'Загрузить ещё'}
        </button>
      )}
    </section>
  );
}

// export default ProductsPage;