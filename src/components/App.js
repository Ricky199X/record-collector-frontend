import React, { Component } from 'react';
import Nav from './Nav'
import HomeScreenMenu from './HomeScreenMenu'
import SignupForm from './forms/SignupForm'
import LoginForm from './forms/LoginForm'
// import SearchArea from './SearchArea'


function App() {
  return (
    <div className="App">
      <Nav />
      <HomeScreenMenu />
    </div>
  );
}

export default App;
