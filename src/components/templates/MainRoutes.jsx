import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GridTemplate from './GridTemplate';
import Main from '../../pages/Main';
import Favorites from './Favorites';
import HomePage from './HomePage';
import NewTest from './NewTest';

export default function MainRoutes() {
  return (
    <GridTemplate>
      <Routes>
        <Route index element={<Main />} path='/quizzes'/>
        <Route path='/' element={<Main />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='home_page' element={<HomePage />} />
        <Route path='new_quizz' element={<NewTest />} />
      </Routes>
    </GridTemplate>
  );
}
