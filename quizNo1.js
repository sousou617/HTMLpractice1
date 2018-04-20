// Using the JavaScript Language,
// have the function CheckNums(num1, num2)
// takes two parameters being passed and
// return true if num2 is greater than num1,
// otherwise return false.  If the parameters
// values are equal to each other then return -1;
// e.g. checkNums(100, 200) -> true
// checkNums(235,123) -> false
// checkNums(50, 50) -> -1


function CheckNums(num1,num2) { 

  if (num1 == num2) {
    return "-1";
  } else if (num2 > num1) {
    return true;
  } else {
    return false;
  }
        
}

document.write(Math.PI)