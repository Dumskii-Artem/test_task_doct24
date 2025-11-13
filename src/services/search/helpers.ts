// src\services\search\helpers.ts

import type { AppDispatch, RootState } from "@services/store";
import type { TSearchParams } from "./search-types";
import { fetchSearchThunk, setSearchParams } from "./search-slice";
import isEqual from 'lodash.isequal';

export function maybeFetchSearch(
  dispatch: AppDispatch,
  getState: () => RootState,
  newParams: TSearchParams
) {
  const { search } = getState();

  console.log(
    '🚨 maybeFetchSearch: ',
    new Date().toISOString(),
    JSON.stringify(newParams)
  );
  
  if (isEqual(search.params, newParams)) {
    console.log('++++++ maybeFetchSearch: параметры не изменились — пропускаем запрос');
    return;
  }

  dispatch(setSearchParams(newParams));
  dispatch(fetchSearchThunk());
}
