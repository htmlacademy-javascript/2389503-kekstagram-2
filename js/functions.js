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
    reverse += normalizeText[i];
  }
  // for (let i = 1; i <= normalizeText.length; i++) {
  //   reverse += normalizeText.at(-i);
  // }
  return reverse === normalizeText;
};

checkPolindrom('Лёша на полке клопа нашёл ');

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде
// целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

const getIntPosNumber = (text) => {

  let result = '';

  if (typeof text === 'number') {
    result = text.toString().replaceAll('.', '').replaceAll('-', '');
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
console.log(getIntPosNumber('1 кефир, 0.5 батона'));
getIntPosNumber('агент 007');
getIntPosNumber('а я томат');

console.log(getIntPosNumber(2023));
console.log(getIntPosNumber(-1));
console.log(getIntPosNumber(1.5));
