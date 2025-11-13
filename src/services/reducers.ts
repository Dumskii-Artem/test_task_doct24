// src\services\reducers.ts

import { combineSlices } from '@reduxjs/toolkit';
import { departmentsSlice } from './departments';
import { exhibitsSlice } from './exhibits';
import { searchSlice } from './search';
import { paginationSlice } from './pagination';

export const rootReducer = combineSlices(
  departmentsSlice,
  exhibitsSlice,
  paginationSlice,
  searchSlice

);

