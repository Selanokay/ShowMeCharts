import React from 'react';
import profileImage from '../images/profile.png';
import chartsImage from '../images/charts.png';
import clubsImage from '../images/clubs.png';
import logoImage from '../images/logo.png';
import logoutImage from '../images/logout.png';
import schoolsImage from '../images/schools.png';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        //<> and </> is used to call multiple functions in JS HTML
        <div className="side-nav">
          <div className="logo-container">
            <Link to="/" className="logo-link"> 
              <img src={logoImage} alt="Logo" className="logo-img" />
            </Link>
            <p className="logo-text">ShowMeCharts</p>
          </div>
          <ul>
              <Link to="/" className="profile-link">
                <li><img src={profileImage} alt="Profile"/><p>Profile</p></li>
              </Link>
              <Link to="/" className="profile-link">
                <li><img src={chartsImage} alt="Charts"/><p>Charts</p></li>
              </Link>
              <Link to="/" className="profile-link">
                <li><img src={schoolsImage} alt="Schools"/><p>Schools</p></li>
              </Link>
              <Link to="/" className="profile-link">
                <li><img src={clubsImage} alt="Clubs"/><p>Clubs</p></li>
              </Link>
          </ul>
          <ul>
            <li><img src={logoutImage} alt="Logout"/><p>Logout</p></li>
          </ul>
        </div>
      );
    }
