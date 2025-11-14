// src\services\likes\likes-slice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TExhibit } from '@services/exhibits';

export type TLikesState = {
  ids: number[];
  items: TExhibit[];
};

const initialState: TLikesState = {
  ids: [],
  items: [],
};

export const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<TExhibit>) {
      const exhibit = action.payload;

      if (state.ids.includes(exhibit.objectID)) {
        state.ids = state.ids.filter(id => id !== exhibit.objectID);
        state.items = state.items.filter(x => x.objectID !== exhibit.objectID);
      } else {
        state.ids.push(exhibit.objectID);
        state.items.push(exhibit);
      }
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;

