import './form.js';
import { renderCards } from './render.js';
import { getData } from './api.js';
import { showAlert } from './notifications.js';


getData()
  .then((cards) => renderCards(cards))
  .catch(() => showAlert());
