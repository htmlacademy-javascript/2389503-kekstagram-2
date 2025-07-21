import './form.js';
import { renderCards } from './render.js';
import { getData } from './api.js';


getData()
  .then((cards) => renderCards(cards));

