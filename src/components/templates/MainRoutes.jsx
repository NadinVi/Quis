import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GridTemplate from './GridTemplate';
import Main from '../../pages/Main';
import Favorites from './Favorites';
import HomePage from './HomePage';
import NewTest from './NewTest';
import Quizz from '../../pages/Quizz';

export default function MainRoutes() {
  return (
    <GridTemplate>
      <Routes>
        <Route index element={<Main />} />
        <Route element={<Main />} path='/' />
        <Route path='favorites' element={<Favorites />} />
        <Route path='home_page' element={<HomePage />} />
        <Route path='new_quizz' element={<NewTest />} />
        <Route path='/:name' element={<Quizz />} />
      </Routes>
    </GridTemplate>
  );
}
