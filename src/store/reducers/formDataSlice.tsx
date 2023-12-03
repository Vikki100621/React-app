/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  InitialUserData,
  SubmittedData,
  UserData,
} from '../../interface/interface';

export const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    InitialUserData,
    submittedData: [] as SubmittedData,
  },
  reducers: {
    setFormData: (state, action) => {
      const newUserData = action.payload as UserData;
      state.InitialUserData = { ...newUserData };
    },

    setPicture: (state, action) => {
      state.InitialUserData.image = action.payload;
    },
    addSubmittedData: (state, action) => {
      state.submittedData.unshift(action.payload);
    },
  },
});

export const { setFormData, setPicture, addSubmittedData } =
  formDataSlice.actions;

export default formDataSlice.reducer;
