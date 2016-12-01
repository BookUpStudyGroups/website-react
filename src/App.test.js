import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Parse from 'parse';
import Parse_React from 'parse-react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
