// src\pages\router.tsx

import { createBrowserRouter, Navigate } from "react-router-dom";
import ProductsPage from "@pages/productsPage";
// import ProductDetailsPage from "@pages/productDetailsPage";
// import CreateProductPage from "@pages/createProductPage";
import RootLayout from "@layouts/RootLayout";
import NotFoundPage from "@pages/notFoundPage";
import LikedPage from "@pages/likedPage";
import StolenPage from "@pages/stolenPage";



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
        path: 'exhibits',
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
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
