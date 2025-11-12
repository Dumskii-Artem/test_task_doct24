// src\services\search\search-types.ts

export type TSearchResult = {
  total: number;
  objectIDs: number[];
};

export type TSearchState = {
  total: number;
  objectIDs: number[];
  loading: boolean;
  error: string | null;
};
