import React from 'react';

import { useLogOut } from '../hooks/useLogOut'
import { useAuthContext } from '../hooks/useAuthContext'

import profileImage from '../images/profile.png';
import chartsImage from '../images/charts.png';
import clubsImage from '../images/clubs.png';
import logoImage from '../images/logo.png';
import logoutImage from '../images/logout.png';
import schoolsImage from '../images/arrowup.png';
import { Link } from 'react-router-dom';

export default function Navigation() {

  const { logout } = useLogOut()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

    return (
        <div className="side-nav">

          <div className="logo-container">
            <Link to="/" className="logo-link"> 
              <img src={logoImage} alt="Logo" className="logo-img" />
            </Link>
          </div>

          <ul>
              <Link to="/profile" className="profile-link">
                <li><img src={profileImage} alt="Profile"/><p>Profile</p></li>
              </Link>

              <Link to="/" className="profile-link">
                <li><img src={chartsImage} alt="Charts"/><p>Charts</p></li>
              </Link>

              <Link to="/songBillboard" className="profile-link">
                <li><img src={schoolsImage} alt="Schools"/><p>Top 100 Songs</p></li>
              </Link>

              <Link to="/" className="profile-link">
                <li><img src={clubsImage} alt="Clubs"/><p>Clubs</p></li>
              </Link>
              
          </ul>

          <ul>

            <li><img src={logoutImage} alt="Logout"/><p>Logout</p></li>
            
            
            {user && (
              <div>
                <span>{user.email}</span>
                <button onClick={handleClick}>Log out</button>
              </div>
            )}



          </ul>

        </div>
      );
    }
