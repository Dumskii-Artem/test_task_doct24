// src\services\reducers.ts

import { combineSlices } from '@reduxjs/toolkit';
import { departmentsSlice } from './departments';

export const rootReducer = combineSlices(
  departmentsSlice
);

