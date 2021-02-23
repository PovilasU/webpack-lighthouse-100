// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './App';

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});

ReactDOM.render(<App />, document.getElementById('root'));
