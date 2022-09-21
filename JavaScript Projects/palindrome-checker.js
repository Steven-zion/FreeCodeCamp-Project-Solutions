function palindrome(str) {
  //Lowercase the string and use the RegExp to remove unwanted characters from it
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, ''); //read more on javascript methods
  //Use chaining methods with built-in functions to reverve string
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

palindrome("eye");