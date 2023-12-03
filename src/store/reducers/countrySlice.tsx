/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { countries } from '../../interface/interface';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries,
    selectedCountry: null,
  },
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setCountries, selectCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
