function checkingLengthString (lengthString, maxLengthString) {
  console.log(lengthString.length);
  if(lengthString.length <= maxLengthString) {
    console.log(true);
  }
  console.log(false);
}

checkingLengthString('Hello World!', 10);
