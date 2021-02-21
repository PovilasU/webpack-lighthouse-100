// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import moment from 'moment';
import App from './App';
import { getUsers } from './common/usersAPI';
const getUserModule = () =>
  import(/* webpackChunkName: "usersAPI" */ './common/usersAPI');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then((json) => console.log(json));
  });
});

// getUsers().then((json) => console.log(json));

ReactDOM.render(<App />, document.getElementById('root'));
