function telephoneCheck(str) {
  if (!balancedParens(str)) {
    return false;
  }

  //remove whitespace
  let newStr = str.replace(/\s/g, "");

  //validation  regex
  let pattern = /^1?\(?\d{3}-?\)?\d{3}-?\d{4}$/;

  return pattern.test(newStr);
}
function balancedParens(string) {
  let stack = [];
  let pairs = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  let closers = {
    ")": 1,
    "]": 1,
    "}": 1,
  };
  for (let i = 0; i < string.length; i++) {
    let cur = string[i];
    if (pairs[cur]) {
      console.log(cur, "----", pairs[cur]);
      stack.push(pairs[cur]);
    } else if (cur in closers) {
      if (stack[stack.length - 1] === cur) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return !stack.length;
}

telephoneCheck("555-555-5555");
