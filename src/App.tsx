import { Suspense } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundary from '@ui/ErrorBoundary/ErrorBoundary'
import FallbackErrorView from '@ui/ErrorBoundary/FallbackErrorView'
import { router } from '@router'
import { RouterProvider } from 'react-router-dom'
// import { Header } from '@components/header'

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<FallbackErrorView message="Загрузка…" />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}


// export default function App() {

//   // const [count, setCount] = useState(0)
//   // const apiUrl = import.meta.env.VITE_API_URL

//   return (
//     <ErrorBoundary>
//       <Suspense fallback={<FallbackErrorView message="Загрузка…" />}>
//         <Header />
//         <RouterProvider router={router} />
//       </Suspense>
//     </ErrorBoundary>
//   );
// }


