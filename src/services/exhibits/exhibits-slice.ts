// src\services\exhibits\exhibits-slice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { TExhibit, TExhibitsState } from './exhibits-types';
import { getObjectById } from './exhibits-api'; // функция, которая грузит один объект по ID
import type { RootState } from '@services/store';


// Асинхронный thunk для загрузки пачки экспонатов
export const fetchExhibitsByIdsThunk = createAsyncThunk<
  { entities: Record<number, TExhibit>; hasError: boolean },
  number[],                                                 
  {
    state: RootState;                                       
    rejectValue: string;                                    
  }
>(
  'exhibits/fetchByIds',
  async (ids, { rejectWithValue, getState }) => {
    try {
      const state = getState(); 
      const alreadyLoaded = state.exhibits.loadedIds;

      // Исключаем уже загруженные
      const uniqueIds = ids.filter((id) => !alreadyLoaded.includes(id));

      // Если загружать нечего
      if (uniqueIds.length === 0) {
        return { entities: {}, hasError: false };
      }

      // Параллельно загружаем все экспонаты по их ID
      const results = await Promise.allSettled(uniqueIds.map((id) => getObjectById(id)));

      // Фильтруем успешные
      const fulfilled = results.filter((r): r is PromiseFulfilledResult<TExhibit> => r.status === 'fulfilled');

      // Преобразуем в Record<number, TExhibit>
      const entities: Record<number, TExhibit> = {};
      fulfilled.forEach((r) => {
        entities[r.value.objectID] = r.value;
      });

      // Если есть хоть один rejected — вернём сообщение
      const hasError = results.some((r) => r.status === 'rejected');
      
      return { entities, hasError };

    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  }
)


const initialState: TExhibitsState = {
  entities: {},
  loadedIds: [],
  status: 'idle',
  pendingCount: 0,
  error: null,
};

export const exhibitsSlice = createSlice({
  name: 'exhibits',
  initialState,
  reducers: {
    clearExhibits(state) {
      state.entities = {};
      state.loadedIds = [];
      state.status = 'idle';
      state.pendingCount = 0;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExhibitsByIdsThunk.pending, (state, action) => {
        const ids = action.meta.arg || [];
        state.pendingCount += ids.length;
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchExhibitsByIdsThunk.fulfilled, (state, action) => {
        const { entities, hasError } = action.payload;

        // Добавляем все новые объекты
        Object.entries(entities).forEach(([id, exhibit]) => {
          state.entities[Number(id)] = exhibit;
          if (!state.loadedIds.includes(exhibit.objectID)) {
            state.loadedIds.push(exhibit.objectID);
          }
        });

        // Сбрасываем счётчик (все запросы завершены)
        state.pendingCount = 0;
        state.status = hasError ? 'failed' : 'succeeded';
        state.error = hasError ? 'Ошибка загрузки части экспонатов' : null;
      })
      .addCase(fetchExhibitsByIdsThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.pendingCount = 0;
        state.error = action.payload as string;
      });
  },
});

export const { clearExhibits } = exhibitsSlice.actions;
export default exhibitsSlice.reducer;
