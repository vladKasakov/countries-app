import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { countryApi } from '../services/countries';
import countryReducer from './reducers/countrySlice';

const rootReducer = combineReducers({
  [countryApi.reducerPath]: countryApi.reducer,
  countries: countryReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
