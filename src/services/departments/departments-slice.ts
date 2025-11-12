// src\services\departments\departments-slice.ts

import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TDepartment, TDepartmentsState } from "./departments-types";
import { getDepartments } from "./departments-api";

const initialState: TDepartmentsState = {
  items: [],
  current: null,
  loading: false,
  error: null,
};

export const fetchDepartmentsThunk = createAsyncThunk(
  'departments/fetchAll',
  async () => {
    const data = await getDepartments();
    return data;
  }
);

export const departmentsSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {
    setCurrentDepartment(state, action: PayloadAction<TDepartment>) {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartmentsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDepartmentsThunk.fulfilled, (state, action) => {
        state.loading = false;
        const sorted = [...action.payload].sort((a, b) =>
          a.displayName.localeCompare(b.displayName)
        );
        state.items = sorted;
        const random = action.payload[Math.floor(Math.random() * action.payload.length)];
        state.current = random;
        // ✅ пока выбираем первый отдел
        state.current = sorted[0] || null;
      })
      .addCase(fetchDepartmentsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки';
      });
  },
});

export const { setCurrentDepartment } = departmentsSlice.actions;
export const departmentsReducer = departmentsSlice.reducer;