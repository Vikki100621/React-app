/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { AppState, initialSearchState } from '../../interface/interface';
// import { recipeAPI } from '../../API/api';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isError: false,
    inputValue: '',
    results: [],
    isLoading: false,
    queryParam: localStorage.getItem('searchQuery')! || 'fish',
    isResult: true,
    page: 0,
    limit: 4,
    totalResults: 0,
  },
  reducers: {
    searchRequestStarted: (state) => {
      state.isLoading = true;
    },
    searchSetTotalPages: (state, action) => {
      state.totalResults = action.payload;
    },
    searchChangePage: (state, action) => {
      state.page = action.payload;
    },
    searchChangeLimit: (state, action) => {
      state.page = action.payload;
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
    updateValue: (state, action: PayloadAction<string>) => {
      state.queryParam = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addMatcher(
  //       recipeAPI.endpoints.fetchAllRecipes.matchFulfilled,
  //       (state, action) => {
  //         if (action.payload && action.payload.results) {
  //           state.results = action.payload.results;
  //         }
  //         if (action.payload && action.payload.totalResults) {
  //           state.totalPages = action.payload.totalResults;
  //         }
  //         searchSlice.caseReducers.searchRequestSuccess(state, action);
  //       }
  //     )
  //     .addMatcher(recipeAPI.endpoints.fetchAllRecipes.matchPending, (state) => {
  //       searchSlice.caseReducers.searchRequestStarted(state);
  //     })
  //     .addMatcher(
  //       recipeAPI.endpoints.fetchAllRecipes.matchRejected,
  //       (state) => {
  //         // Вызываем дополнительный редюсер для отклонения запроса
  //         searchSlice.caseReducers.searchRequestFailed(state);
  //       }
  //     );
  // },
});

export const {
  searchRequestStarted,
  searchRequestSuccess,
  searchRequestFailed,
  updateValue,
  searchChangePage,
  searchChangeLimit,
  searchSetError,
  searchSetTotalPages,
} = searchSlice.actions;

export default searchSlice.reducer;
