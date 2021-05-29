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
//validateNumber('2348bbb588a5');

function isIdNumberValid(phoneNumber){
  var numArr = Array.from(phoneNumber.toString()).map(Number);
  if(numArr.length === 13){
    console.log('true');
  }else{
    console.log('false');
  }
}

//Test code
isIdNumberValid("2001014800086")
isIdNumberValid("2909035800085")
