import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { tests } from '../../../api';

const fetchQuizzez = createAsyncThunk(`${moduleName}/fetchQuizzez`, async () => {
  const { data } = await tests.fetch();
  return data;
});

export default {
  fetchQuizzez,
};
