import { BASE_URL, Route } from './constants.js';

export const getData = () => fetch(`${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if(!response.ok) {
      throw new Error();
    }
    return response.json();
  });


export const sendData = (body) => fetch(
  `${BASE_URL}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  }
);

