import React from 'react';
import Favorites from './Favorites';
import HomePage from './HomePage';
import NewTest from './NewTest';
import Search from './Search';

export default function NavBar() {
  return (
    <>
    <div className='navBar'>
      <HomePage />
      <Favorites />
      <NewTest />
      <Search />
    </div>
    </>
  );
}
