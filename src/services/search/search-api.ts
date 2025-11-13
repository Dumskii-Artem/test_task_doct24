// src\services\search\search-api.ts

import { API_BASE_URL } from '@const';
import type { TSearchParams, TSearchResult } from './search-types';


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
  const res = await fetch(url);

  if (!res.ok) throw new Error('Ошибка загрузки результатов поиска');
  const data = (await res.json()) as TSearchResult;

  return {
    total: data.total || 0,
    objectIDs: data.objectIDs || [],
  };
}
