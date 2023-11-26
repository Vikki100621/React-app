import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { recipeAPI } from '../API/api';
import pageSlice from './reducers/pageSlice';

export const setupStore = () => {
  return configureStore({
    reducer: {
      pageSlice,
      [recipeAPI.reducerPath]: recipeAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(recipeAPI.middleware),
  });
};

export default setupStore;

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });
