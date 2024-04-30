import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (  
    <div>
      {/* Home Link */}
      <div className="logo-container">
        <Link to="/" className="logo-link"> 
          <img src={logoImage} alt="Logo" className="logo-img" />
        </Link>
      </div>

      {/* Sign Up Form */}
      <div className="container">
        <div className="form-container">
          <form id="login" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Log In</legend>

              <br></br>
              <p>Don't have an account? <Link to="/signup" className="button">Sign Up</Link></p>
              <br></br>

              <label htmlFor="email">Email:</label>
              <input 
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

            </fieldset>
            <input type="submit" value="Log In" className="button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;