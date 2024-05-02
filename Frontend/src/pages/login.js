import React, { useState } from 'react';
import { useLogIn } from '../hooks/useLogIn';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

const LogIn = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (  
    <div className="d-flex justify-content-center align-items-center min-vh-100 "> 
      <div className="container-lg p-4 rounded shadow lighter-bg" style={{ maxWidth: "600px", backgroundColor: "#c0c0c0" }}>
        {/* Home Link */}
        <div className="text-center mb-4">
          <Link to="/" className="logo-link"> 
            <img src={logoImage} alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Log In Form */}
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="text-center">Log In</legend>

            <div className="text-center">
              <p>Don't have an account? <Link to="/signup" className="btn btn-custom-primary">Sign Up</Link></p>
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label visually-hidden">Email</label>
              <input 
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label visually-hidden">Password</label>
              <input 
                type="password" 
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>

          </fieldset>

          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-custom-primary" disabled={isLoading}>Log in</button>
          </div>

          {error && <div className="error text-center">{error}</div>}

        </form>

      </div>
    </div>
  );
};

export default LogIn;
