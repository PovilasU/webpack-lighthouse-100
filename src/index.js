// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './App';
import { getUsers } from './common/usersAPI';
getUsers().then((json) => console.log(json));

ReactDOM.render(<App />, document.getElementById('root'));
