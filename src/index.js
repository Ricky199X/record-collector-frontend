import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/containers/Home'
import Albums from './components/containers/Albums'
import Nav from './components/Nav'
import Signup from './components/forms/Signup'
import Login from './components/forms/Login'


ReactDOM.render((
   <Router>
     <div>
       <Nav />
       <Route exact path="/" component={Home} />
       <Route path='/albums' component={Albums} />>
       <App />
       <Route exact path="/sign_up" component={Signup} />
       <Route exact path="/login" component={Login} />
     </div>
   </Router>),
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
