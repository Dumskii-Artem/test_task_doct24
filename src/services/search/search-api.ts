// src\services\search\search-api.ts

import { API_BASE_URL } from '@const';
import type { TSearchResult } from './search-types';

/**
 * Параметры поиска по коллекции MET Museum.
 *
 * Полный список поддерживаемых параметров API:
 *
 * | Параметр         | Тип      | Пример                     | Описание |
 * |------------------|----------|-----------------------------|-----------|
 * | `q`              | string   | `"Rembrandt"`               | Главный поисковый запрос — ищет по названию, автору, описанию. `*` — вернуть все объекты. |
 * | `departmentId`   | number   | `11`                        | Ограничить поиск объектами конкретного отдела. |
 * | `hasImages`      | boolean  | `true`                      | Искать только объекты, у которых есть изображения. |
 * | `isHighlight`    | boolean  | `true`                      | Искать только экспонаты из подборки "The Met Highlights". |
 * | `title`          | boolean  | `true`                      | Искать только в названиях экспонатов. |
 * | `tags`           | boolean  | `true`                      | Искать только по тегам. |
 * | `artistOrCulture`| boolean  | `true`                      | Искать только по авторам или культурам. |
 * | `medium`         | string   | `"Paintings"`               | Ограничить поиск по материалу или типу (например, "Paintings", "Ceramics", "Gold"). |
 * | `geoLocation`    | string   | `"France"`                  | Искать по географическому региону (стране, городу, культуре). |
 * | `dateBegin`      | number   | `1800`                      | Искать объекты, созданные после указанного года. |
 * | `dateEnd`        | number   | `1900`                      | Искать объекты, созданные до указанного года. |
 *
 * Документация: https://metmuseum.github.io/#search
 */
export type TSearchParams = {
  /** Главный поисковый запрос, например "Rembrandt" или "*" для всех */
  q?: string;
  /** ID отдела (departmentId) */
  departmentId?: number;
  /** Только объекты с изображениями */
  hasImages?: boolean;
  /** Только выделенные (The Met Highlights) */
  isHighlight?: boolean;
  /** Искать только в названиях */
  title?: boolean;
  /** Искать только по тегам */
  tags?: boolean;
  /** Искать только по авторам или культурам */
  artistOrCulture?: boolean;
  /** Фильтрация по материалу (например "Paintings") */
  medium?: string;
  /** Географический фильтр (например "Egypt") */
  geoLocation?: string;
  /** Нижняя граница года создания */
  dateBegin?: number;
  /** Верхняя граница года создания */
  dateEnd?: number;
};

/**
 * Выполняет поиск экспонатов в коллекции MET Museum.
 * Поддерживает фильтры: departmentId, q, hasImages, isHighlight, medium и др.
 * Возвращает общее количество и список objectIDs.
 */
export async function fetchSearch(params: TSearchParams): Promise<TSearchResult> {
  const query = new URLSearchParams();

  // сначала добавляем все параметры, кроме q
  Object.entries(params).forEach(([key, value]) => {
    if (key !== 'q' && value !== undefined) {
      query.append(key, String(value));
    }
  });

  // теперь добавляем q в конце
  query.append('q', params.q || '*');

  const url = `${API_BASE_URL}/search?${query.toString()}`;
  console.log('*** SEARCH URL:', url, 'current dep:');
  const res = await fetch(url);

  if (!res.ok) throw new Error('Ошибка загрузки результатов поиска');
  const data = (await res.json()) as TSearchResult;

  return {
    total: data.total || 0,
    objectIDs: data.objectIDs || [],
  };
}


// import { API_BASE_URL } from '@const';
// import type { SearchResult } from './search-types';

// /** Загружает список ID и общее количество экспонатов по отделу */
// export async function fetchSearchByDepartment(departmentId: number): Promise<SearchResult> {
//   const url = `${API_BASE_URL}/search?departmentId=${departmentId}&hasImages=true&q=*`;
//   const res = await fetch(url);
//   if (!res.ok) throw new Error('Ошибка загрузки списка экспонатов');
//   const data = await res.json();
//   return {
//     total: data.total || 0,
//     objectIDs: data.objectIDs || [],
//   };
// }
