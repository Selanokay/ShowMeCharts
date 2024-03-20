import React from 'react';
import profileImage from '../images/profile.png';
import chartsImage from '../images/charts.png';
import clubsImage from '../images/clubs.png';
import logoImage from '../images/logo.png';
import logoutImage from '../images/logout.png';
import schoolsImage from '../images/schools.png';

export default function Navigation() {
    return (
        //<> and </> is used to call multiple functions in JS HTML
        <div className="side-nav">
          <div className="logo">
          <img src={logoImage} className="logo-img" alt="Logo" />
          </div>
          <ul>
            <li><img src={profileImage} alt="Profile"/><p>Profile</p></li>
            <li><img src={chartsImage} alt="Charts"/><p>Charts</p></li>
            <li><img src={schoolsImage} alt="Schools"/><p>Schools</p></li>
            <li><img src={clubsImage} alt="Clubs"/><p>Clubs</p></li>
          </ul>
          <ul>
            <li><img src={logoutImage} alt="Logout"/><p>Logout</p></li>
          </ul>
        </div>
      );
    }
