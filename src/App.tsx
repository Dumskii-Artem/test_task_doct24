// src\App.tsx

import { Suspense, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundary from '@ui/ErrorBoundary/ErrorBoundary'
import FallbackErrorView from '@ui/ErrorBoundary/FallbackErrorView'
import { router } from '@router'
import { RouterProvider } from 'react-router-dom'
import { useDispatch, useSelector } from '@services/store'
import { fetchDepartmentsThunk } from '@services/departments'
import { fetchSearchThunk, setSearchParams } from '@services/search/search-slice'

export default function App() {
  const dispatch = useDispatch();
  
  // При первом запуске — загрузить список отделов
  useEffect(() => {
    dispatch(fetchDepartmentsThunk());
  }, [dispatch]);

  const { current, loading: depsLoading, items: departments } = useSelector(
    (state) => state.departments
  );

  // Когда отделы загрузились и выбран текущий — запустить поиск
  useEffect(() => {
  if (!depsLoading && current && departments.length > 0) {
    // Сначала сохраняем параметры поиска в стор
    dispatch(
      setSearchParams({
        departmentId: current.departmentId,
        hasImages: true,
        q: '*',
      })
    );

    // Затем выполняем поиск, thunk возьмёт params из state.search.params
    dispatch(fetchSearchThunk());
  }
}, [dispatch, depsLoading, current, departments]);

  // useEffect(() => {
  //   if (!depsLoading && current && departments.length > 0) {
  //     dispatch(
  //       fetchSearchThunk({
  //         departmentId: current.departmentId,
  //         hasImages: true,
  //         q: '*',
  //       })
  //     );
  //   }
  // }, [dispatch, depsLoading, current, departments]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<FallbackErrorView message="Загрузка…" />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}



