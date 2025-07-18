import { ServerAddresses } from './constants.js';

export const getData = () => fetch(ServerAddresses.GETTING)
  .then((response) => {
    if(response.ok) {
      return response.json();
    }

    const { status, statusText } = response;
    throw new Error(`${status} - ${statusText}`);
  });

export const sendData = (body) => fetch(
  ServerAddresses.SENDING,
  {
    method: 'POST',
    body,
  }
);
