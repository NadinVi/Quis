import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GridTemplate from './GridTemplate';
import Main from '../../pages/Main';
import Favorites from './Favorites';
import HomePage from './HomePage';
import Quizz from '../../pages/Quizz';
import CreateQuizz from '../../pages/CreateQuizz';

export default function MainRoutes() {
  return (
    <GridTemplate>
      <Routes>
        <Route index element={<Main />} />
        <Route element={<Main />} path='/' />
        <Route path='favorites' element={<Favorites />} />
        <Route path='home_page' element={<HomePage />} />
        <Route path='create' element={<CreateQuizz />} />
        <Route path='/:name' element={<Quizz />} />
      </Routes>
    </GridTemplate>
  );
}
