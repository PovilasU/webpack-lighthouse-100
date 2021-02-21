// const ENDPOINT = 'https://jsonplaceholder.typicode.com/users/';

const getMomentAPI = () =>
  import(
    /* webpackChunkName: "momentAPI" */ /* webpackPreload: true */ 'moment'
  );
export function getTest() {
  return getMomentAPI();
  //return console.log('TEST');
  // .then((response) => {
  //   if (!response.ok) throw Error(response.statusText);
  //   return response.json();
  // })
  // .then((json) => json);
}
