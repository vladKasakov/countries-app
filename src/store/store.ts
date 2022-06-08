import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { countryApi } from '../services/countries';
import themeReducer from './reducers/themeSlice';

const rootReducer = combineReducers({
  [countryApi.reducerPath]: countryApi.reducer,
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
