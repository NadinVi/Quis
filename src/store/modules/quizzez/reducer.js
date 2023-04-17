import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import thunks from './thunks';

const initialState = {
  quizzez: [],
};

/* eslint-disable no-param-reassign */
export const quizzezSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchQuizzez.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.quizzez = payload;
    });
  },
});

export default quizzezSlice.reducer;
