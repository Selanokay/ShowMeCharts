import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpLogin() {
  return (
    <div className="signup-login">
      <Link to="/signup"><button>Sign Up</button></Link>
      <Link to="/login"><button>Login</button></Link>
    </div>
  );
}