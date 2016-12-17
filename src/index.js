import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Register from './register';
import ForgotPassword from './forgotPassword';
import './index.css';
import Parse from 'parse';
import { Router, Route, browserHistory } from 'react-router';
import './forgotPassword.js'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

Parse.serverURL = 'http://bookup-parse-server-dev.herokuapp.com/parse';
Parse.initialize("myAppId");

// the current version of routing.
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/register" component={Register} />
    <Route path="/forgotPassword" component={ForgotPassword} />
  </Router>
), document.getElementById('root'));

// the previous version of routing.
/*
console.log(`IN INDEX WINDOW LOCATION IS ${window.location}`);
if (window.location ==  '/')
 {
  console.log('look at this if statement woohoo');
  ReactDOM.render(
    <Register />,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
*/
