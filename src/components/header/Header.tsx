// src\components\header\Header.tsx

import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import store, { useDispatch, useSelector } from '@services/store';
import { setCurrentDepartment } from '@services/departments';
import { maybeFetchSearch } from '@services/search/helpers';


export default function Header() {
  const dispatch = useDispatch();
  const { items: departments, current } = useSelector((state) => state.departments);
  const { total, status, error } = useSelector((state) => state.search);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = departments.find(
      (dep) => dep.departmentId === Number(event.target.value)
    );

   if (selected) {
      // Обновляем текущий отдел
      dispatch(setCurrentDepartment(selected));

      // Запускаем поиск только если параметры изменились
      maybeFetchSearch(
        dispatch,
        store.getState,
        {
          departmentId: selected.departmentId,
          hasImages: true,
          q: '*',
        }
      );
    }
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Коллекция The Metropolitan Museum of Art (MET)</h1>
      <div className={styles.subheader}>
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

        <div className={styles.rightContainer}>
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

          {/* Количество экспонатов */}
          <div className={styles.countBox}>

            {(status === 'loading') && <span>Загрузка экспонатов…</span>}
            {((status !== 'loading')&& !error && total > 0) && (
              <span>Экспонатов найдено: {total.toLocaleString('ru-RU')}</span>
            )}
            {error && <span className={styles.error}>Ошибка загрузки</span>}
          </div>
        </div>
      </div>
    </header>
  );
}
