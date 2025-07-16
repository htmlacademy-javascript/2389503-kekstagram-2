import { createPhotos } from './data.js';
import { renderCards } from './render.js';
import './form.js';
import './api.js';

renderCards(createPhotos());
