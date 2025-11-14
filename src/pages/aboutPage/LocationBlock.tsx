// src\pages\aboutPage\LocationBlock.tsx
import styles from './LocationBlock.module.css';

export default function LocationBlock() {
  return (
    <div className={styles.locationBlock}>

      {/* <h2 className={styles.title}>Расположение и часы работы</h2> */}

      {/* <img
        className={styles.image}
        src="https://images.metmuseum.org/CRDImages/ad/original/DT907.jpg"
        alt="The Metropolitan Museum of Art"
      /> */}

      <div className={styles.bottomRow}>
        <span className={styles.address}>
          1000 Fifth Avenue, New York, NY
        </span>

        <a
          className={styles.mapLink}
          href="https://maps.google.com/?q=The+Metropolitan+Museum+of+Art"
          target="_blank"
          rel="noopener noreferrer"
        >
          Открыть на карте →
        </a>
      </div>
    </div>
  );
}
