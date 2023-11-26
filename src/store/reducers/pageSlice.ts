/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PageState {
  isError: boolean;
}

const pageSlice = createSlice({
  name: 'detailedPage',
  initialState: { isError: false } as PageState,
  reducers: {
    setError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
});

export const { setError } = pageSlice.actions;

export default pageSlice.reducer;
