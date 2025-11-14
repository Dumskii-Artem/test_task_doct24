// src\services\search\selectors.ts

import type { RootState } from '@services/store';

export const selectTotalPages = (state: RootState) => {
  const pageSize = state.pagination.pageSize; 
  return Math.ceil(state.search.total / pageSize);
};
