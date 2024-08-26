import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import charactersReducer from '@/features/charactersSlice';
import filtersReducer from '@/features/filtersAndSearchSlice';
import characterReducer from '@/features/selectedPersonSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    filters: filtersReducer,
    selectedPerson: characterReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;