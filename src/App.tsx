// src\App.tsx

import { Suspense, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundary from '@ui/ErrorBoundary/ErrorBoundary'
import FallbackErrorView from '@ui/ErrorBoundary/FallbackErrorView'
import { router } from '@router'
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from '@services/store'
import { fetchDepartmentsThunk } from '@services/departments'

export default function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // при первом рендере приложения загрузить отделы
    dispatch(fetchDepartmentsThunk());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<FallbackErrorView message="Загрузка…" />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}



