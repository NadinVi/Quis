import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import thunks from './thunks';

const initialState = {
  quizz: [],
};

/* eslint-disable no-param-reassign */
export const quizzSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchQuizz.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.quizz = payload;
    });
  },
});

export default quizzSlice.reducer;
