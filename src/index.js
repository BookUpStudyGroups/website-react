import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Register from './register';
import './index.css';
import Parse from 'parse';

Parse.serverURL = 'http://bookup-parse-server-dev.herokuapp.com/parse';
Parse.initialize("myAppId");


function reroute() {
let green;

console.log(`window location is ${window.location}`);
if (window.location === '/register.js') {
  green= <Register />;
} else {
  green= <App /> ;
}
console.log(`green's value is ${JSON.stringify(green)}`);
}

function routing(props) {
  return <App />;
  /*
  console.log(`window location is ${window.location}`);
  if (window.location === '/') {
    return <App />;
  } else {
    return <Register />;
  }
  */
}


console.log(`IN INDEX WINDOW LOCATION IS ${window.location}`);
if (window.location ==  'http://localhost:3000/register.js')
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


/*

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/
