// App.js

import React from 'react';
import './App.css';

function Navigation() {
  return (
    <div className="side-nav">
      <div className="logo">
        <img src="/images/logo.png" className="logo-img" alt="Logo" />
      </div>
      <ul>
        <li><img src="/images/profile.png" alt="Profile"/><p>Profile</p></li>
        <li><img src="/images/charts.png" alt="Charts"/><p>Charts</p></li>
        <li><img src="/images/schools.png" alt="Schools"/><p>Schools</p></li>
        <li><img src="/images/clubs.png" alt="Clubs"/><p>Clubs</p></li>
      </ul>
      <ul>
        <li><img src="/images/logout.png" alt="Logout"/><p>Logout</p></li>
      </ul>
    </div>
  );
}

function SignUpLogin() {
  return (
    <div className="signup-login">
      <a href="signup.html"><button>Sign Up</button></a>
      <a href="login.html"><button>Login</button></a>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>ProJect GraPhiNg</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navigation />
      <SignUpLogin />
      <Header />
    </div>
  );
}

export default App;
