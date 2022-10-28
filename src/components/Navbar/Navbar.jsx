import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Hotel Paradise</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <Link to="/login">
            <button className="navButton">Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar