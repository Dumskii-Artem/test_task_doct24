// src\pages\router.tsx

import { createBrowserRouter, Navigate } from "react-router-dom";
import ProductsPage from "@pages/productsPage";
import RootLayout from "@layouts/RootLayout";
import NotFoundPage from "@pages/notFoundPage";
import LikedPage from "@pages/likedPage";
import StolenPage from "@pages/stolenPage";
import AboutPage from "@pages/aboutPage";




export const router = createBrowserRouter([
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
        element: <ProductsPage />,
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
