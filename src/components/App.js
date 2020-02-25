import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'


import Nav from './Nav'
import LandingPage from './LandingPage'
// import SignupForm from './forms/SignupForm'
// import LoginForm from './forms/LoginForm'
// import SearchArea from './SearchArea'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <LandingPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
