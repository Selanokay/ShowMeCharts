import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpLogIn() {
  return (
    <div className="signup-login">
      <Link to="/signup"><button>Sign Up</button></Link>
      <Link to="/login"><button>Log In</button></Link>
    </div>
  );
}