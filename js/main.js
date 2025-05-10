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
  'Пустой пляж с лежаками и зонтами у спокойного залива, окружённого зеленью и современными зданиями на заднем плане',
  'Указатель на пляж',
  'Живописная бухта',
  'Девушка в купальнике с фотоаппаратом',
  'Две миски с рисовым супом',
  'Суперкар чёрного матового цвета с открытой дверью',
  'Клубника, разрезанная пополам на деревянной тарелке',
  'Два стакана с красным виноградным соком',
  'Самолёт, пролетающий над головами купающихся людей на пляже',
  'Выдвинутый снизу ящик с обувью',
  'Песчаный пляж, разделённый секциями с садами',
  'Спортивный автомобиль ауди белого цвета',
  'Овощной салат с куском рыбы',
  'Кот, привязанный к подушке, в виде суши',
  'Часть интерьера гостиной с закинутыми ногами человека на подлокотник дивана',
  'Высоко в небе над хребтами гор',
  'Концерт',
  'Американский маслкар в кирпичном помещении',
  'Ночные тапки с фонариками',
  'Пальмы на территории отеля в ночное время',
  'Мясное блюдо с ломтиком лимона',
  'Живописный заказ на берегу океана',
  'Затаившийся краб на суше',
  'Вид из зала на сцену во время концерта',
  'Бегемот вынырнул перед машиной на переправе через реку',
];

const MAX_COUNT = 25;
const MIN_COUNT_COMMENTS = 0;
const MAX_COUNT_COMMENTS = 30;
const MIN_COUNT_AVATAR = 1;
const MAX_COUNT_AVATAR = 6;
const MIN_INDEX = 0;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = (arr) => arr[getRandomPositiveInteger(MIN_INDEX, arr.length - 1)];

const getRandomUniqueNumber = (min = 0, max = MAX_COUNT_COMMENTS) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomPositiveInteger(min, max);
    if(previousValues.length >= (max - min + 1)) {
      return null;
    }
    while(previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getComments = () => {
  const getRandomNumbersOfComments = getRandomUniqueNumber(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS);
  const getUniqueCommentsId = getRandomUniqueNumber();
  const count = getRandomNumbersOfComments();
  const comments = [];

  for (let i = 1; i <= count; i++) {
    comments.push(
      {
        id: getUniqueCommentsId(),
        avatar: `img/avatar-${getRandomPositiveInteger(MIN_COUNT_AVATAR, MAX_COUNT_AVATAR)}.svg`,
        message: getRandomArrayElement(MESSAGES),
        name: getRandomArrayElement(NAMES),
      }
    );
  }
  return comments;
};

const createPhoto = () => {
  const getRandomNumbersOfLikes = getRandomUniqueNumber(MIN_LIKES, MAX_LIKES);
  const photos = [];
  for (let i = 1; i <= MAX_COUNT; i ++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      likes: getRandomNumbersOfLikes(),
      description: DESCRIPTIONS[i - 1],
      comments: getComments(),
    });
  }
  return photos;
};

createPhoto();
