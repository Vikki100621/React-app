/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'detailedPage',
  initialState: { isItem: false, isError: false },
  reducers: {
    setIsItem: (state, action) => {
      state.isItem = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { setIsItem, setError } = pageSlice.actions;

export default pageSlice.reducer;
