// src\components\exhibits-grid\selectors.ts

import { createSelector } from '@reduxjs/toolkit';
import { EXHIBIT_PAGE_SIZE } from '@const';
import type { RootState } from '@services/store';

export const selectCurrentPageExhibits = createSelector(
  [
    (state: RootState) => state.search.objectIDs,
    (state: RootState) => state.exhibits.entities,
    (state: RootState) => state.pagination.currentPage,
  ],
  (objectIDs, entities, currentPage) => {
    const start = (currentPage - 1) * EXHIBIT_PAGE_SIZE;
    const end = start + EXHIBIT_PAGE_SIZE;
    const idsForPage = objectIDs.slice(start, end);
    return idsForPage.map((id) => entities[id]).filter(Boolean);
  }
);
