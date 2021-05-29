function validateNumber(phoneNumber) {
  var numArr = Array.from(phoneNumber.toString()).map(Number);
  for(var i=0; i < numArr.length; i++) {
    if(isNaN(numArr[i])){
      console.log('false');
    }else{
      console.log('true');
    }
  }
}
//Test code
validateNumber('2348bbb588a5');
