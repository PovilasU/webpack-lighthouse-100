// const ENDPOINT = 'https://jsonplaceholder.typicode.com/users/';

const getMomentAPI = () => import(/* webpackChunkName: "momentAPI" */ 'moment');
export function getTest() {
  return getMomentAPI();
}
