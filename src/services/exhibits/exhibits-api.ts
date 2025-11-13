// src\services\exhibits\exhibits-api.ts

import { API_BASE_URL } from "@const";
import type { TExhibit } from "./exhibits-types";

// // Загружает экспонаты для указанного отдела
// export async function getObjectIdsByDepartment(departmentId: number): Promise<number[]> {
//   const url = `${API_BASE_URL}/search?departmentId=${departmentId}&hasImages=true&q=*`;
//   const res = await fetch(url);
//   if (!res.ok) throw new Error('Ошибка загрузки списка ID');
//   const data = await res.json();
//   return data.objectIDs || [];
// }

// детали одного экспоната
export async function getObjectById(id: number): Promise<TExhibit> {
  const res = await fetch(`${API_BASE_URL}/objects/${id}`);
  if (!res.ok) throw new Error(`Ошибка загрузки объекта ${id}`);
  const obj = await res.json();
  return {
    objectID: obj.objectID,
    title: obj.title,
    primaryImage: obj.primaryImage, 
    primaryImageSmall: obj.primaryImageSmall,
    artistDisplayName: obj.artistDisplayName,
    objectDate: obj.objectDate,
    department: obj.department,
    objectURL: obj.objectURL,
  };
}

// //  детали по нескольким ID 
// export async function getObjectsByIds(ids: number[]): Promise<TExhibit[]> {
//   const results = await Promise.all(
//     ids.map(async (id) => {
//       try {
//         const obj = await getObjectById(id);
//         return obj.primaryImageSmall ? obj : null;
//       } catch {
//         return null;
//       }
//     })
//   );
//   return results.filter(Boolean) as TExhibit[];
// }


// export async function fetchExhibitsByDepartment(
//   departmentId: number,
//   limit = 20,
//   page = 1
// ): Promise<TExhibit[]> {
//   const ids = await getObjectIdsByDepartment(departmentId);
//   if (!ids.length) return [];
//   const start = (page - 1) * limit;
//   const limited = ids.slice(start, start + limit);
//   return getObjectsByIds(limited);
// }