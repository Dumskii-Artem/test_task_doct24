// src\services\stolen\stolen-slice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TExhibit } from '@services/exhibits';

export type TStolenState = {
  ids: number[];
  items: TExhibit[];
};

const initialState: TStolenState = {
  ids: [],
  items: [],
};

export const stolenSlice = createSlice({
  name: 'stolen',
  initialState,
  reducers: {
    steal(state, action: PayloadAction<TExhibit>) {
      const exhibit = action.payload;

      if (!state.ids.includes(exhibit.objectID)) {
        state.ids.push(exhibit.objectID);
        state.items.push(exhibit);
      }
    },
  },
});

export const { steal } = stolenSlice.actions;
export default stolenSlice.reducer;
