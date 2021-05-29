function validateNumber(phoneNumber) {
  var numArr = Array.from(phoneNumber.toString()).map(Number);
  console.log(numArr)
  return(numArr);
}

validateNumber(23485885);