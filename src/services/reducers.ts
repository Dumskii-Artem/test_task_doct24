// src\services\reducers.ts

import { combineSlices } from '@reduxjs/toolkit';
import { departmentsSlice } from './departments';
import { exhibitsSlice } from './exhibits';
import { searchSlice } from './search';
import { paginationSlice } from './pagination';
import { likesSlice } from './likes';
import { stolenSlice } from './stolen';

export const rootReducer = combineSlices(
  departmentsSlice,
  exhibitsSlice,
  likesSlice,
  paginationSlice,
  searchSlice,
  stolenSlice
);

