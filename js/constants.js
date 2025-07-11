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
export const EFFECTS = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
  NONE: 'none',
};

// Настройки эффектов
export const EffectsSettings = {
  [EFFECTS.CHROME] : {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      units: '',
      style: 'grayscale',
    },
  },
  [EFFECTS.SEPIA] : {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      units: '',
      style: 'invert',
    },
  },
  [EFFECTS.MARVIN] : {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      units: '%',
      style: 'blur',
    },
  },
  [EFFECTS.PHOBOS] : {
    slider : {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
      units: 'px',
      style: 'grayscale',
    },
  },
  [EFFECTS.HEAT] : {
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
      units: '',
      style: 'brightness',
    },
  },
  [EFFECTS.NONE] : {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      units: '',
      style: '',
    },
  },
};

