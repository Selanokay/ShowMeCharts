import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpLogin() {
  return (
    <div className="signup-login">
      <Link to="/signup" className="button">Sign Up</Link>
      <Link to="/login" className="button">Login</Link>
    </div>
  );
}