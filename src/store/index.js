import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { quizzezReducer } from './modules/quizzez';
import { quizzReducer } from './modules/quizz';

const rootReducer = combineReducers({
  quizzezReducer,
  quizzReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
