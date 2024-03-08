import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/">
          <div className="navbar-brand">
            <span className="navbar-name">
              <span className="navbar-name-part1">potenS</span>
              <span className="navbar-name-part2">Dev</span>
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
