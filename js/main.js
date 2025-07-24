import './form.js';
import { renderCards } from './render.js';
import { getData } from './api.js';
import { showAlert } from './notifications.js';
import { initFilters } from './filter.js';
import './image-preview.js';

getData()
  .then((cards) => {
    renderCards(cards);
    initFilters(cards);
  })
  .catch(() => showAlert());
