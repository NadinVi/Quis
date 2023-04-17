import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import thunks from './thunks';
import actions from './actions';

const initialState = {
  quizzez: [],
  filterQuizzez: [],
};

/* eslint-disable no-param-reassign */
export const quizzezSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterQuizzez, (state, { payload }) => {
      if (payload.search === '') {
        state.filterQuizzez = state.quizzez;
      } else {
        state.filterQuizzez = state.quizzez.filter((test) => {
          console.log(payload.search, test.title);
          return test.title.toLowerCase().indexOf(payload.search) >= 0;
        });
      }
    });
    builder.addCase(thunks.fetchQuizzez.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.quizzez = payload;
      state.filterQuizzez = payload;
    });
  },
});

export default quizzezSlice.reducer;
