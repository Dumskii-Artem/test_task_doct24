import { Suspense } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundary from '@components/ErrorBoundary'
import FallbackErrorView from '@components/FallbackErrorView'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'


export default function App() {

  // const [count, setCount] = useState(0)
  // const apiUrl = import.meta.env.VITE_API_URL

  return (
    <ErrorBoundary>
      <Suspense fallback={<FallbackErrorView message="Загрузка…" />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}


