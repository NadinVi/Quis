import React from "react";
import Favorites from "./Favorites";
import HomePage from "./HomePage";
import NewTest from "./NewTest";
  
export default function NavBar() {
    return (
      <div className='navBar'>
        <HomePage />
        <Favorites />
        <NewTest />
      </div>
    )
}
