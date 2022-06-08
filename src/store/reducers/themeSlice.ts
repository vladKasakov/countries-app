import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Theme } from '../../models';

const initialState = 'dark';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => (state === 'dark' ? 'light' : 'dark'),
    setTheme: (state, action: PayloadAction<Theme>) => (state = action.payload),
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
