// src\components\header\Header.tsx

import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/products" className={({ isActive }) => (isActive ? styles.active : '')}>
          Продукты
        </NavLink>
        <NavLink to="/create-product" className={({ isActive }) => (isActive ? styles.active : '')}>
          Создать продукт
        </NavLink>
        <NavLink to="/products/1" className={({ isActive }) => (isActive ? styles.active : '')}>
          Продукт 1
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>
          О нас
        </NavLink>
      </nav>
    </header>
  );
}
