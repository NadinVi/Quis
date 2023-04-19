import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constant';

const filterQuizzez = createAction(`${moduleName}/filterQuizzez`, (payload) => ({ payload }));

export default {
  filterQuizzez,
};
