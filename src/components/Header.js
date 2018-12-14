import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => (
  <header ClassName="Header">
    <div className="title">
      <h1>Names</h1>
    </div>
    <nav className="main-nav">
      <ul>
        <Link to="/names"><li>Race Names</li></Link>
        <Link to="/locations"><li>Race Locations</li></Link>
      </ul>
    </nav>
  </header>
);

export default Header;