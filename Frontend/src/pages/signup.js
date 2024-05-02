import React, { useState } from 'react';
import { useSignUp } from '../hooks/useSignUp';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container-lg p-4 rounded shadow lighter-bg" style={{ maxWidth: "600px" }}>
        {/* Home Link */}
        <div className="text-center mb-4">
          <Link to="/" className="logo-link">
            <img src={logoImage} alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Sign Up Form */}
        <form id="signup" onSubmit={handleSubmit}>
          <fieldset>
            <legend className="text-center">Sign Up</legend>

            <div className="text-center">
              <p>Have an account? <Link to="/login" className="btn btn-custom-primary">Log In</Link></p>
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
            <button type="submit" className="btn btn-custom-primary" disabled={isLoading}>Sign Up</button>
          </div>

          {error && <div className='error text-center'>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
