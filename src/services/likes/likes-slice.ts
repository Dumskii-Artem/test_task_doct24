// src\services\likes\likes-slice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type TLikesState = {
  ids: number[]; // массив лайкнутых айдишников
};

const initialState: TLikesState = {
  ids: [],
};

export const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<number>) {
      const id = action.payload;

      // если есть — удалить
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((x) => x !== id);
      } else {
        // если нет — добавить
        state.ids.push(id);
      }
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;

