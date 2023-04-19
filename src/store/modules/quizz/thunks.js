import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { quizz } from '../../../api';

const fetchQuizz = createAsyncThunk(`${moduleName}/fetchQuizz`, async (name) => {
  const { data } = await quizz.fetch(name);
  return data;
});

export default {
  fetchQuizz,
};
