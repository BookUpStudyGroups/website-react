import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Register from './register';
// import Header from './header';
import './index.css';
import Parse from 'parse';
import { Router, Route, browserHistory } from 'react-router';
// import Bootstrap from 'bootstrap';
 import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import JQuery from 'jquery';

Parse.serverURL = 'http://bookup-parse-server-dev.herokuapp.com/parse';
Parse.initialize("myAppId");

// the current version of routing.
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/register" component={Register} />
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
