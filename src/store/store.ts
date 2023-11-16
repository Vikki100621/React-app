import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { recipeAPI } from '../API/api';
import searchReducer from './reducers/SearchSlice';

const rootReducer = combineReducers({
  searchReducer,
  [recipeAPI.reducerPath]: recipeAPI.reducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(recipeAPI.middleware),
  });
};

export default setupStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
