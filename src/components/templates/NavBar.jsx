import { Component } from "react";
import Favorites from "./Favorites";
import HomePage from "./HomePage";
import NewTest from "./NewTest";


export default class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='navBar'>
        <HomePage />
        <Favorites />
        <NewTest />
      </div>
    )
  }
}
