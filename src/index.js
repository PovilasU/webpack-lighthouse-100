// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import App from './App';
import { getUsers } from './common/usersAPI';
import { getCar } from './common/Car';
const getUserModule = () =>
  import(/* webpackChunkName: "usersAPI" */ './common/usersAPI');
// const getCarModule = () =>
//   import(/* webpackChunkName: "getcar" */ './common/Car');
import(/* webpackChunkName: "momentAPI" */ /* webpackPreload: true */ 'moment');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then((json) => console.log(json));
  });
});
const btnMoment = document.getElementById('btnMoment');

// btnMoment.addEventListener('click', () => {
//   getCarModule().then(({ getCar }) => {
//     getCar('bilekas').then(() => console.log('test 123'));
//   });
//   //   import moment from 'moment';
// });

ReactDOM.render(<App />, document.getElementById('root'));
