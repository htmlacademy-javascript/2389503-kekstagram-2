export const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;
export const MAX_COUNT_HASHTAGS = 5;
export const COMMENT_LENGTH = 140;
export const COMMENTS_PORTION = 5;
export const START_VALUE_COUNTER = 0;
export const START = 0;
// Настройка масштаба изображения
export const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};
// Для конвертации значений масштаба в проценты
export const SCALE_FACTOR = 0.01;
// Для эффектов
export const Effects = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
  NONE: 'none',
};

export const DEFAULT_EFFECT = Effects.NONE;

// Настройки эффектов
export const EffectsSettings = {
  [Effects.CHROME] : {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    },
    units: '',
    style: 'grayscale',
  },
  [Effects.SEPIA] : {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    },
    units: '',
    style: 'sepia',
  },
  [Effects.MARVIN] : {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    },
    units: '%',
    style: 'invert',
  },
  [Effects.PHOBOS] : {
    slider : {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
    },
    units: 'px',
    style: 'blur',
  },
  [Effects.HEAT] : {
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
    },
    units: '',
    style: 'brightness',
  },
  [Effects.NONE] : {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    },
    units: '',
    style: '',
  },
};

export const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

export const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

export const ALERT_SHOW_TIME = 5000;

export const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

export const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

export const imageFiltersButtonActive = 'img-filters__button--active';
