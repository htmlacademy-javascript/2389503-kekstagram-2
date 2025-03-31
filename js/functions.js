function checkingLengthString (lengthString, maxLengthString) {
  console.log(lengthString.length);
  if(lengthString.length <= maxLengthString) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}

checkingLengthString('проверяемая строка', 10);
