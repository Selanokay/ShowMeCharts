import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

export default function Header()  {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logoImage} alt="Logo" className="logo-img" />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Log In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};