import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../images/profile.png';
import chartsImage from '../images/charts.png';
import clubsImage from '../images/clubs.png';
import logoImage from '../images/logo.png';
import logoutImage from '../images/logout.png';
import schoolsImage from '../images/schools.png';

export default function Navigation() {
    return (
        <div className="side-nav d-flex flex-column justify-content-between bg-light">
            <div className="logo-container mb-3">
                <Link to="/" className="d-flex align-items-center logo-link text-decoration-none">
                    <img src={logoImage} alt="Logo" className="logo-img img-fluid" />
                    <p className="logo-text ms-2 h5 mb-0">ShowMeCharts</p>
                </Link>
            </div>
            <ul className="nav flex-column p-0">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">
                        <img src={profileImage} alt="Profile" /><span>Profile</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <img src={chartsImage} alt="Charts" /><span>Charts</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <img src={schoolsImage} alt="Schools" /><span>Schools</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <img src={clubsImage} alt="Clubs" /><span>Clubs</span>
                    </Link>
                </li>
            </ul>
            <ul className="nav flex-column p-0">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <img src={logoutImage} alt="Logout" /><span>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

