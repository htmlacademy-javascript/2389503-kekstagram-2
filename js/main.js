import './form.js';
import './api.js';
import { renderCards } from './render.js';
import { getData } from './api.js';
import { showAlert } from './notifications.js';


getData()
  .then((response) => {
    if(response.ok) {
      return response.json();
    } else {
      showAlert();
    }
  })
  .then((cards) => renderCards(cards))
  .catch((err) => console.log(err));
