import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Parse from 'parse';


Parse.serverURL = 'http://bookup-parse-server-dev.herokuapp.com/parse';
Parse.initialize("myAppId");


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
