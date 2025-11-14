// src\services\pagination\pagination-slice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PaginationState } from './pagination-types';
import { EXHIBIT_PAGE_SIZES } from '@const';


const initialState: PaginationState = {
  currentPage: 1,
  pageSize: EXHIBIT_PAGE_SIZES[0], 
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    resetPagination(state) {
      state.currentPage = 1;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
      state.currentPage = 1;
    },
  },
});

export const { setCurrentPage, resetPagination, setPageSize } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;

