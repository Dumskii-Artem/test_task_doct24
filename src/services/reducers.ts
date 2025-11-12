// src\services\reducers.ts

import { combineSlices } from '@reduxjs/toolkit';
import { departmentsSlice } from './departments';
import { searchSlice } from './search/search-slice';

export const rootReducer = combineSlices(
  departmentsSlice,
  searchSlice
);

