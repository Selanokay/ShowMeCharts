import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

export default function SignUp() {
  return (
    <div>
      {/* Home Link*/}
      <div className="logo-container">
        <Link to="/" className="logo-link"> 
          <img src={logoImage} alt="Logo" className="logo-img" />
        </Link>
      </div>

      {/* Sign Up Form */}
      <div className="container">
        <div className="form-container">
          {/* Your sign-up form content */}
          <form id="signup" action="">
            <fieldset>
              <legend>Sign Up</legend>

              <br />
              <p>Have an account? <Link to="/login" className="button">Log In</Link></p>
              <br />

              <label htmlFor="email">Email:</label><br />
              <input type="text" id="email" name="email" /><br />

              <label htmlFor="password">Password:</label><br />
              <input type="password" id="password" name="password" /><br />
            </fieldset>
            
            <br />
            <input type="submit" value="Sign Up" className="button" />
          </form>
        </div>
      </div>
    </div>
  );
}