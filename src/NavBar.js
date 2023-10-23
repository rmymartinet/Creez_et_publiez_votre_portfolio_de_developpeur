import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/NavBar.scss';

const NavBar = () => {
  return (
    <div className="nav">
      <div className="item-left">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link">Project</Link>
      </div>
      <div className="item-right">
        <Link className="nav-link">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
