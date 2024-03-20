import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './/navigation';
import Header from './/header';
import SignUpLogin from './/signuplogin';
import SignUp from './/signup';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <SignUpLogin />
        <Header />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
