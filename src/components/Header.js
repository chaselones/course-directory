import React from 'react';
//NavLink will give us the ability to see whether or not a link is "active" for styling with "active"
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      {/* Value for to should match the path for the route */}
      {/* below are 2 examples for manually doing inline styling/updating classes for active NavLinks */}
      <li><NavLink exact to="/" activeStyle={{ background: 'tomato' }}>Home</NavLink></li>
      <li><NavLink to="/about" activeClassName="myActiveClass">About</NavLink></li>

      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>
  </header>
);

export default Header;