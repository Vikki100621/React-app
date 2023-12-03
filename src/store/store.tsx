import { combineReducers, configureStore } from '@reduxjs/toolkit';

import formReducer from './reducers/formDataSlice';
import countryReducer from './reducers/countrySlice';

export const rootReducer = combineReducers({
  formReducer,
  countryReducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export default setupStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
