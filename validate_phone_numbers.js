function validateNumber(phoneNumber) {
  var numArr = Array.from(phoneNumber.toString()).map(Number);
  for(var i=0; i < numArr.length; i++) {
    if(typeof numArr[i] == "number"){
      console.log('true');
    }else{
      console.log('false');
    }
  }
}
//Test code
validateNumber('23485885');
