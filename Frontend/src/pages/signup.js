import React, { useState } from 'react';

import { useSignUp } from '../hooks/useSignUp';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignUp()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await signup(email, password)
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
          <form id="signup" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Sign Up</legend>

              <br></br>
              <p>Have an account? <Link to="/login" className="button">Log In</Link></p>
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
            <input type="submit" value="Sign Up" className="button" />
            {error && <div className='error'>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
