import { ServerAddresses } from './constants.js';

export const getData = () => fetch(ServerAddresses.GETTING);

export const sendData = (body) => fetch(
  ServerAddresses.SENDING,
  {
    method: 'POST',
    body,
  }
);
