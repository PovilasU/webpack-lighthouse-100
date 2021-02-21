// const ENDPOINT = 'https://jsonplaceholder.typicode.com/users/';
import(/* webpackChunkName: "momentAPI" */ /* webpackPreload: true */ 'moment');
export function getTest() {
  return console.log('TEST');
  // .then((response) => {
  //   if (!response.ok) throw Error(response.statusText);
  //   return response.json();
  // })
  // .then((json) => json);
}
