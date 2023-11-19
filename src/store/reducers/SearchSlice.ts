/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialSearchState } from '../../interface/interface';

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    searchSetLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    searchSetTotalResults: (state, action) => {
      state.totalResults = action.payload;
    },
    searchSetLimit: (state, action) => {
      state.limit = action.payload;
    },
    searchChangePage: (state, action) => {
      state.page = action.payload;
    },
    searchChangeLimit: (state, action) => {
      state.limit = action.payload;
    },
    searchSetError: (state, action) => {
      state.page = action.payload;
    },
    searchRequestSuccess: (state, action) => {
      state.isLoading = action.payload;
    },
    searchRequestFailed: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    updateInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    updateSearchQuery: (state, action: PayloadAction<string>) => {
      state.queryParam = action.payload;
    },
  },
});

export const {
  searchSetLoading,
  searchRequestSuccess,
  searchRequestFailed,
  updateInputValue,
  updateSearchQuery,
  searchChangePage,
  searchChangeLimit,
  searchSetError,
  searchSetTotalResults,
} = searchSlice.actions;

export default searchSlice.reducer;
