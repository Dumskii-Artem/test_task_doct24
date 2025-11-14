// src\components\exhibits-grid\selectors.ts

import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@services/store';

export const selectCurrentPageExhibits = createSelector(
  [
    (state: RootState) => state.search.objectIDs,
    (state: RootState) => state.exhibits.entities,
    (state: RootState) => state.pagination.currentPage,
    (state: RootState) => state.pagination.pageSize,
  ],
  (objectIDs, entities, currentPage, pageSize) => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const idsForPage = objectIDs.slice(start, end);
    return idsForPage.map((id) => entities[id]).filter(Boolean);
  }
);
