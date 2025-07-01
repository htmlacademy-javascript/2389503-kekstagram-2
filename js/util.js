export const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

// Функция принимает объект события и возвращает булево значение в зависимости от того, что является значением свойства key
export const isEscapeKey = (evt) => evt.key === 'Escape';
