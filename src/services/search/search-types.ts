// src\services\search\search-types.ts

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


export type TSearchResult = {
  total: number;
  objectIDs: number[];
};

export type TSearchState = {
  params: TSearchParams;
  total: number;
  objectIDs: number[];
  // loading: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed'; 
  error: string | null;
};
