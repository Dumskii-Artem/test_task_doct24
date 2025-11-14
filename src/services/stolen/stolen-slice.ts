// src\services\stolen\stolen-slice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type TStolenState = {
  ids: number[];
};

const initialState: TStolenState = {
  ids: [],
};

export const stolenSlice = createSlice({
  name: 'stolen',
  initialState,
  reducers: {
    steal(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (!state.ids.includes(id)) {
        state.ids.push(id);
      }
    }
  }
});

export const { steal } = stolenSlice.actions;
export default stolenSlice.reducer;
