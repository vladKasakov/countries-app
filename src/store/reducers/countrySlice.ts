import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Theme } from '../../models';

interface InitialState {
  theme: Theme;
}

const initialState: InitialState = {
  theme: 'dark',
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = countrySlice.actions;
export default countrySlice.reducer;
