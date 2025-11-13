// src\services\search\search-slice.ts

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { TSearchResult, TSearchState } from './search-types';
import { fetchSearch } from './search-api';

// export type TSearchState = {
//   total: number;
//   objectIDs: number[];
//   loading: boolean;
//   error: string | null;
// };

const initialState: TSearchState = {
  params: {},   
  total: 0,
  objectIDs: [],
  status: 'idle',
  error: null,
};

/** Асинхронный thunk для выполнения поиска */
export const fetchSearchThunk = createAsyncThunk(
  'search/fetch',
  async (_, { getState }): Promise<TSearchResult> => {
    const state = getState() as { search: TSearchState };
    const result = await fetchSearch(state.search.params);
    return result;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearSearch: (state) => {
      // state.params = {};
      state.total = 0;
      state.objectIDs = [];
      state.error = null;
      state.status = 'idle';
    },
    // Редьюсер для установки параметров поиска
    setSearchParams(state, action) {
      state.params = action.payload; // Полная замена params
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchSearchThunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchSearchThunk.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.total = action.payload.total;
      state.objectIDs = action.payload.objectIDs || [];
    })
    .addCase(fetchSearchThunk.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Ошибка загрузки поиска';
    });
  },
});

export const { clearSearch } = searchSlice.actions;
export const { setSearchParams } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
