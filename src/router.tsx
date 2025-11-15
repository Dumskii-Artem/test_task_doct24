// src\pages\router.tsx

import { createHashRouter, Navigate } from "react-router-dom";
import ExhibitsPage from "@pages/exhibitsPage";
import RootLayout from "@layouts/RootLayout";
import NotFoundPage from "@pages/notFoundPage";
import LikedPage from "@pages/likedPage";
import StolenPage from "@pages/stolenPage";
import AboutPage from "@pages/aboutPage";



// GitHub Pages НЕ поддерживает BrowserRouter.
// export const router = createBrowserRouter([
export const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,      // тут Header
    children: [
      {
        index: true,
        element: <Navigate to="/exhibits" replace />,
      },
      {
        path: '/exhibits',
        element: <ExhibitsPage />,
      },
      {
        path: '/liked',
        element: <LikedPage />
      },
      {
        path: '/stolen',
        element: <StolenPage />
      },
      { 
        path: 'about', 
        element: <AboutPage /> 
      },  
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
