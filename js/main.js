import './form.js';
import './filter.js';
import { renderCards } from './render.js';
import { getData } from './api.js';
import { showAlert } from './notifications.js';
import { setDiscussedFilter, showFilters } from './filter.js';


getData()
  .then((cards) => {
    renderCards(cards);
    showFilters();
    setDiscussedFilter(() => renderCards(cards));
  })
  .catch(() => showAlert());
