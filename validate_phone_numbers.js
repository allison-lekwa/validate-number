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
// isIdNumberValid("2001014800086")
// isIdNumberValid("2909035800085")

function isIdNumberTooShort(phoneNumber){
  var numArr = Array.from(phoneNumber.toString()).map(Number);
  if(numArr.length < 13){
    console.log('false');
  }
}

//Test code
//isIdNumberTooShort("2909030085")

function isIdNumberTooLong(phoneNumber){
  var numArr = Array.from(phoneNumber.toString()).map(Number);
  if(numArr.length > 13){
    console.log('false');
  }
}

//Test code
//isIdNumberTooLong("29090300800995")

function isCharacterPresent(phoneNumber) {
  var numArr = Array.from(phoneNumber.toString()).map(Number);
  for(var i=0; i < numArr.length; i++) {
    if(isNaN(numArr[i])){
      console.log('false');
    }
  }
}
//Test code
//isCharacterPresent('3849Ad849948z');


// validates from 1990 - 2021
function isYearValid(phoneNumber) {
  var numArr = phoneNumber.match(/(..?)/g).map(Number);
  var increment = 0;
  for(var i= 0; i <= 99; i++){
    if(numArr[0] == i){
      increment += 1;
    }
  
  }
  if(increment != 1){
    console.log('false')
  }else{
    console.log('true')
  }
}
//Test code
//isYearValid("0329696388895");

//validates months
function isMonthValid(phoneNumber){
  var numArr = phoneNumber.match(/(..?)/g).map(Number);
  var increment = 0;
  for(var i= 1; i <= 12; i++){
    if(numArr[1] == i){
      increment += 1;
    }
  
  }
  if(increment != 1){
    console.log('false')
  }else{
    console.log('true')
  }

}
//Test code
//isMonthValid("9321696388895")
//isMonthValid("9302696388895")

//Assumed that there is no leap year
function isDayValid(phoneNumber){
  var numArr = phoneNumber.match(/(..?)/g).map(Number);
  var increment = 0;
  for(var i= 1; i <= 31; i++){
    if(numArr[1] == 2){
      if(numArr[2] == i && numArr[2] <= 28){
        increment += 1;
      }
    }
    else if(numArr[1] == 4 || numArr[1] == 6 || numArr[1] == 9 || numArr[1] == 11){
      if(numArr[2] == i && numArr[2] <= 30){
        increment += 1;
      }
    }else
      if(numArr[2] == i){
        increment += 1;
      }
  }
  if(increment != 1){
    console.log('false')
  }else{
    console.log('true')
  }

}
//Test code
//isDayValid("9305316388895")


//Returns true if gender is female
function isGender(phoneNumber){
  var numArr = phoneNumber.match(/(..?)/g).map(Number);
  var increment = 0;
  for(var i = 0; i<= 99; i++){
    if(numArr[3] == i && numArr[3] <= 49){
      console.log(false)
    }else if(numArr[3] == i && numArr[3] > 49){
      console.log('true')
    }
  }
}
//Test code
isGender("9305313388895");