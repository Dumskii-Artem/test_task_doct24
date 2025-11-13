// src\components\footer\Footer.tsx
import styles from './Footer.module.css';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
          <a href='https://github.com/Dumskii-Artem' target='_blank' rel='noopener noreferrer'>
          Dumskii‑Artem — 2025
        </a>
      </div>
      <div className={styles.right}>I think all rights reserved</div>
    </footer>
  );
}