// Функция для проверки длины строки. Она принимает строку, которую нужно проверить,
// и максимальную длину и возвращает `true`, если строка меньше или равна указанной
// длине, и `false`, если строка длиннее.

const checkTextLength = (text, maxTextLength) => (text.length <= maxTextLength);

checkTextLength('проверяемая строка', 20);


// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза,
// которые одинаково читаются и слева направо и справа налево.
const checkPolindrom = (text) => {
  const normalizeText = text.replaceAll(' ', '').toLowerCase();
  let reverse = '';
  for (let i = normalizeText.length - 1; i >= 0; i--) {
    reverse += normalizeText.at(i);
  }

  return reverse === normalizeText;
};

checkPolindrom('Лёша на полке клопа нашёл ');

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде
// целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

const getIntPosNumber = (text) => {

  let result = '';

  if (typeof text === 'number') {
    result = text.toString();
  }

  for (let i = 0; i <= text.length - 1; i++) {
    if(Number.isNaN(parseInt(text[i], 10)) !== true) {
      result += text[i];
    }
  }
  return parseInt(result, 10);
};

getIntPosNumber('2023 год');
getIntPosNumber('ECMAScript 2022');
getIntPosNumber('1 кефир, 0.5 батона');
getIntPosNumber('агент 007');
getIntPosNumber('а я томат');

getIntPosNumber(2023);
getIntPosNumber(-1);
getIntPosNumber(1.5);

/*
 5.16. Функции возвращаются
 Задача: Делу — время

 Напишите функцию, которая принимает время начала и конца рабочего дня,
 а также время старта и продолжительность встречи в минутах и возвращает
 true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

 Время указывается в виде строки в формате часы:минуты. Для указания часов
 и минут могут использоваться как две цифры, так и одна.
 Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

 Продолжительность задаётся числом. Гарантируется, что и рабочий день,
 и встреча укладываются в одни календарные сутки.
*/

const convertStringToNumber = (str) => Math.abs(str.split(':')[0]) * 60 + Math.abs(str.split(':')[1]);


const isMeetingBeyondWorkingDay = (value1, value2, value3, value4) => {
  const startDay = convertStringToNumber(value1);
  const endDay = convertStringToNumber(value2);
  const startMeeting = convertStringToNumber(value3);
  const durationMeeting = value4;

  // console.log(`Рабочий день начинается с ${startDay} минуты`);
  // console.log(`Рабочий день заканчивается на ${endDay} минуте`);
  // console.log(`Встреча начинается на ${startMeeting} минуте`);
  // console.log(`Длительность встречи составляет ${durationMeeting} минут`);

  // Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.
  if(startMeeting < startDay || startMeeting > endDay) {
    return false;
  }

  return (startMeeting + durationMeeting) <= endDay;

};

isMeetingBeyondWorkingDay('8:00', '17:30', '08:00', 900);

//Проверка
// имяФункции('08:00', '17:30', '14:00', 90); // true
// имяФункции('8:0', '10:0', '8:0', 120);     // true
// имяФункции('08:00', '14:30', '14:00', 90); // false
// имяФункции('14:00', '17:30', '08:0', 90);  // false
// имяФункции('8:00', '17:30', '08:00', 900); // false
