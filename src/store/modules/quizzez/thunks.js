import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { newTest, tests } from '../../../api';

const fetchQuizzez = createAsyncThunk(`${moduleName}/fetchQuizzez`, async () => {
  const { data } = await tests.fetch();
  return data;
});

const postQuizz = createAsyncThunk(`${moduleName}/postQuizz`, async (body) => {
  const { data } = await newTest.fetch(body);
  return data;
});

export default { fetchQuizzez, postQuizz };
