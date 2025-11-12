// src\api\picsumApi.ts

import { API_BASE_URL, PAGE_SIZE } from "@const";

export type Product = {
  id: string;
  author: string;
  download_url: string;
  url: string;
  width: number;
  height: number;
};

export async function getProducts(page = 1, limit = PAGE_SIZE): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/list?page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error(`Ошибка загрузки данных: ${res.status}`);
  }
  return res.json();
}