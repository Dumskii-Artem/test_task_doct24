// src\services\search\selectors.ts

import { EXHIBIT_PAGE_SIZE } from '@const';
import type { RootState } from '@services/store';

export const selectTotalPages = (state: RootState) => {
  return Math.ceil(state.search.total / EXHIBIT_PAGE_SIZE);
};
