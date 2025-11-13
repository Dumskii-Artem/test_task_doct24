// src\services\pagination\pagination-slice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PaginationState } from './pagination-types';


const initialState: PaginationState = {
  currentPage: 1,
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
  },
});

export const { setCurrentPage, resetPagination } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
