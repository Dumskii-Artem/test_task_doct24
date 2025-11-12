// src\components\header\Header.tsx

import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useDispatch, useSelector } from '@services/store';
import { setCurrentDepartment } from '@services/departments';


export default function Header() {
  const dispatch = useDispatch();
  const { items: departments, current } = useSelector((state) => state.departments);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = departments.find(
      (dep) => dep.departmentId === Number(event.target.value)
    );
    if (selected) {
      dispatch(setCurrentDepartment(selected));
    }
  };

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

      {/* Комбобокс с отделами */}
      <div className={styles.selectContainer}>
        <label htmlFor="department" className={styles.label}>
          Отдел:
        </label>
        <select
          id="department"
          value={current?.departmentId || ''}
          onChange={handleChange}
          className={styles.select}
        >
          {departments.map((dep) => (
            <option key={dep.departmentId} value={dep.departmentId}>
              {dep.displayName}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
