// src\services\reducers.ts

import { combineSlices } from '@reduxjs/toolkit';
import { departmentsSlice } from '@services/';

export const rootReducer = combineSlices(
  departmentsSlice
);

