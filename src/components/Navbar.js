

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling
import logo from '../assets/logo12.jpeg'; // Import your logo file (e.g., logo.png)

const Navbar = () => {
  return (
    <nav className="navbar navbar-static navbar-shadow"> {/* Add the 'navbar-static' class */}
      <div className="navbar-container">
       <img src={logo} alt="Logo" className="logo-image" />
          <Link to="/" className="navbar-logo">
          {/* GooFood */}
        </Link>
    
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/login" className="nav-links">
              Login
            </Link>
          </li>
          {/* Add more navigation items here */}
          <li className="nav-item">
            <Link to="/Home1" className="nav-links">
             Menu
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/authRoutes" className="nav-links">
              Signup
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/Cart" className="nav-links">
              Mycart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
