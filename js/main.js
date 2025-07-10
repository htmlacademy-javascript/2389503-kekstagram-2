import { createPhotos } from './data.js';
import { renderCards } from './render.js';
import './form.js';
import './validation.js';
import './image-effects.js';

renderCards(createPhotos());
