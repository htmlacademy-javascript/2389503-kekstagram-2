import { ServerAddresses } from './constants.js';

fetch(ServerAddresses.GETTING)
  .then((response) => response.json())
  .then((data) => console.log(data[0]));

