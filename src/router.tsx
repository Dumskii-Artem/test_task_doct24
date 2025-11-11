// src\pages\router.tsx

import { createBrowserRouter, Navigate } from "react-router-dom";
import ProductsPage from "@pages/productsPage";
import ProductDetailsPage from "@pages/productDetailsPage";
import CreateProductPage from "@pages/createProductPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/products" replace />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/products/:id',
    element: <ProductDetailsPage />,
  },
  {
    path: '/create-product',
    element: <CreateProductPage />,
  },
]);