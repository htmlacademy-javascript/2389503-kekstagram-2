import { createPhotos } from './data.js';
import { renderCards } from './render.js';
import './form.js';
import './image-editing.js';

renderCards(createPhotos());
