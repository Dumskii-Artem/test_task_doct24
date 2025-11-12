// src\services\departments\departments-api.ts

import { API_BASE_URL } from "@const";
import type { TDepartment } from "./departments-types";

export async function getDepartments(): Promise<TDepartment[]> {
  const res = await fetch(`${API_BASE_URL}/departments`);
  if (!res.ok) throw new Error('Ошибка загрузки списка отделов');
  const data = await res.json();
  return data.departments;
}
