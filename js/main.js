import './form.js';
import './api.js';
import { renderCards } from './render.js';
import { getData } from './api.js';


getData()
  .then((cards) => renderCards(cards));

