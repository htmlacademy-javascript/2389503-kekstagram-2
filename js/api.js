import { ServerAddresses } from './constants.js';
import { renderCards } from './render.js';
fetch(ServerAddresses.GETTING)
  .then((response) => response.json())
  .then((cards) => renderCards(cards));

