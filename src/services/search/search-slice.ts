// src\services\search\search-slice.ts

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { TSearchResult } from './search-types';
import type { TSearchParams } from './search-api';
import { fetchSearch } from './search-api';

export type TSearchState = {
  total: number;
  objectIDs: number[];
  loading: boolean;
  error: string | null;
};

const initialState: TSearchState = {
  total: 0,
  objectIDs: [],
  loading: false,
  error: null,
};

/** Асинхронный thunk для выполнения поиска */
export const fetchSearchThunk = createAsyncThunk(
  'search/fetch',
  async (params: TSearchParams): Promise<TSearchResult> => {
    const result = await fetchSearch(params);
    return result;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.total = 0;
      state.objectIDs = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action.payload.total;
        state.objectIDs = action.payload.objectIDs;
      })
      .addCase(fetchSearchThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки поиска';
      });
  },
});

export const { clearSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
