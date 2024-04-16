import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Header() {
    return (
        <div className="header p-5 text-center bg-light">
            <h1 className="display-1">Welcome to ShowMeCharts</h1>
            <p className="lead">Sign up today to view what everyone's listening to at your University!</p>
            <Link to="/signup" className="btn btn-primary mt-3">SignUp</Link>
        </div>
    );
}
