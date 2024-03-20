import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';


export default function MainPage() {
    return (
        <div>
      {/* Home Link*/}
      <div className="logo-container">
        <Link to="/" className="logo-link"> 
          <img src={logoImage} alt="Logo" className="logo-img" />
        </Link>
        <p className="logo-text">ProJect GraPhiNg</p>
      </div>

      {/* Log In Up Form */}
      <div className="container">
        <div className="form-container">
          {/* Your login-up form content */}
          <form id="login" action="">
            <fieldset>
              <legend>Log In</legend>

              <br />
              <p>Don't have an account? <Link to="/signup" className="button">Sign Up</Link></p>
              <br />

              <label htmlFor="email">Email:</label><br />
              <input type="text" id="email" name="email" /><br />

              <label htmlFor="password">Password:</label><br />
              <input type="password" id="password" name="password" /><br />
            </fieldset>
            
            <br />
            <input type="submit" value="Log In" className="button" />
          </form>
        </div>
      </div>
    </div>
    )
}