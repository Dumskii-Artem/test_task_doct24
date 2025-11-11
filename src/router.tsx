// src\pages\router.tsx

import { createBrowserRouter, Navigate } from "react-router-dom";
import ProductsPage from "@pages/productsPage";
import ProductDetailsPage from "@pages/productDetailsPage";
import CreateProductPage from "@pages/createProductPage";
import RootLayout from "@layouts/RootLayout";
import NotFoundPage from "@pages/notFoundPage";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,      // тут Header
    children: [
      {
        index: true,
        element: <Navigate to="/products" replace />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:id',
        element: <ProductDetailsPage />,
      },
      {
        path: 'create-product',
        element: <CreateProductPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navigate to="/products" replace />,
//   },
//   {
//     path: '/products',
//     element: <ProductsPage />,
//   },
//   {
//     path: '/products/:id',
//     element: <ProductDetailsPage />,
//   },
//   {
//     path: '/create-product',
//     element: <CreateProductPage />,
//   },
// ]);