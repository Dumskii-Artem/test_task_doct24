// src\pages\aboutPage\AboutPage.tsx


import styles from './AboutPage.module.css';
import LocationBlock from './LocationBlock';
import metImage from '@assets/met.avif';

export default function AboutPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>О музее Метрополитен</h1>

      <img
        className={styles.image}
        src={metImage}
        alt="The Metropolitan Museum of Art"
      />

      <p className={styles.text}>
        Музей Метрополитен — один из крупнейших художественных музеев мира,
        основанный в 1870 году в Нью-Йорке. Его коллекция охватывает более
        пяти тысяч лет истории искусства.
      </p>

      {/* ← Вот сюда вставляется твой блок */}
      <LocationBlock />
    </section>
  );
}

