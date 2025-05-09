/*
  Объект состоит из пяти ключей:

  1. id -  идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

  2. url - строка — адрес картинки вида `photos/{{i}}.jpg`, где `{{i}}` — это число от 1 до 25. Адреса картинок не должны повторяться.

  3. description - строка - описание фотографии. Придумываю самостоятельно.

  4. likes - количество лайков, поставленных фотографии. Случайное число от 15 до 200.

  5. comments - массив, состоящий из комментариев, оставленных другими пользователями, где каждым комментарием является объект. Количество комментариев к каждой фотографии - случайное число от 0 до 30. Каждый объект имеет 4 ключа:

    1. id - любое неповторяющееся число

    2. avatar - строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg

    3. message - строка, которую я получаю из конкретного массива(ниже), который содержит в себе строковые элементы.

    const messages = [
      'Всё отлично!',
      'В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    ]

    4. name - случайная строка, которую я подбираю из массива, содержащего строки(имена). Создаю самостоятельно.

    const names = [
      "Алексей",
      "Мария",
      "Иван",
      "Екатерина",
      "Дмитрий",
      "Ольга",
      "Сергей",
      "Наталья",
      "Михаил",
      "Анна"
    ];

    Таким образом получаю вот такую структуру:

    [ { id: 0, avatar: 'img/avatar-0.svg', message: 'Всё отлично!', name: 'Иван' } ]
*/

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Алексей',
  'Мария',
  'Иван',
  'Екатерина',
  'Дмитрий',
  'Ольга',
  'Сергей',
  'Наталья',
  'Михаил',
  'Анна'
];

const DESCRIPTIONS = [
  'Солнце',
  'Травка',
  'Зелёная',
  'Лягушка',
  'Замочный',
];

const MIN_COUNT = 1;
const MAX_COUNT = 25;
const MIN_COUNT_MESSAGE = 0;
const MAX_COUNT_MESSAGE = 30;
const MIN_COUNT_AVATAR = 1;
const MAX_COUNT_AVATAR = 6;
const MIN_COUNT_NAMES = 0;
const MIN_COUNT_DESCRIPTION = 0;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getComments = () => {
  const count = getRandomPositiveInteger(MIN_COUNT_MESSAGE, MAX_COUNT_MESSAGE);
  const comments = [];

  for (let i = 1; i <= count; i++) {
    comments.push(
      {
        id: getRandomPositiveInteger(MIN_COUNT, MAX_COUNT_MESSAGE),
        avatar: `img/avatar-${getRandomPositiveInteger(MIN_COUNT_AVATAR, MAX_COUNT_AVATAR)}.svg`,
        message: MESSAGES[getRandomPositiveInteger(MIN_COUNT_MESSAGE, MESSAGES.length - 1)],
        name: NAMES[getRandomPositiveInteger(MIN_COUNT_NAMES, NAMES.length - 1)],
      }
    );
  }
  return comments;
};

const getPhotos = () => {

  const photos = [];

  for (let i = 1; i <= MAX_COUNT; i++) {
    photos.push(
      {
        id: i,
        url: `photos/${i}.jpg`,
        description: DESCRIPTIONS[getRandomPositiveInteger(MIN_COUNT_DESCRIPTION, DESCRIPTIONS.length - 1)],
        likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
        comments: getComments(),
      }
    );
  }

  return photos;
};

getPhotos();

const getRandomArrayElement = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomPositiveInteger(min, max);
    if(previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все значения из диапазона от ${min} до ${max}`);
      return null;
    }
    while(previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomPhotoId = getRandomArrayElement(MIN_COUNT, MAX_COUNT);
const getRandomUrlId = getRandomArrayElement(MIN_COUNT, MAX_COUNT);
const getRandomNumbersOfLikes = getRandomArrayElement(MIN_LIKES, MAX_LIKES);
const getRandomNumbersOfComments = getRandomArrayElement(MIN_COUNT_MESSAGE, MAX_COUNT_MESSAGE);
const getRandomAvatarId = getRandomArrayElement(MIN_COUNT_AVATAR, MAX_COUNT_AVATAR);
const getRandomNumber = getRandomArrayElement(MIN_COUNT , MAX_LIKES);
