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
const getMomentModule = () =>
  import(/* webpackChunkName: "getTEST" */ './common/Car');
//   import(

//);

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then((json) => console.log(json));
  });
});
const btnMoment = document.getElementById('btnMoment');

btnMoment.addEventListener('click', () => {
  getMomentModule().then(({ getTest }) => {
    getTest();
  });
});

ReactDOM.render(<App />, document.getElementById('root'));
