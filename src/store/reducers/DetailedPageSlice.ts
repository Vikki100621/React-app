/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  DetailedPage,
  initialDetailedPageState,
} from '../../interface/interface';

const detailedPageSlice = createSlice({
  name: 'detailedPage',
  initialState: initialDetailedPageState,
  reducers: {
    detaildPageSetLoading: (state, action) => {
      state.isLoadingItem = action.payload;
    },
    detaildPageSetIsItem: (state, action) => {
      state.isItem = action.payload;
    },
    detaildPageIsItemResult: (state, action) => {
      state.isItemResult = action.payload;
    },
    detaildPageItemResult: (state, action: { payload: DetailedPage }) => {
      state.ItemResult = action.payload;
    },
  },
});

export const {
  detaildPageIsItemResult,
  detaildPageSetLoading,
  detaildPageSetIsItem,
  detaildPageItemResult,
} = detailedPageSlice.actions;

export default detailedPageSlice.reducer;
