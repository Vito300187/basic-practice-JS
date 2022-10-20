// Рекурсивный метод
const isPalindrome = (string) => {
  if (string.length < 2) {
    return true;
  }

  const firstSymbol = string[0];
  const lastSymbol = string[string.length - 1];
  
  if (firstSymbol !== lastSymbol) {
    return false;
  }

  const midString = string.substring(1, string.length - 1);

    return isPalindrome(midString);
};

console.log(isPalindrome('rador'))
console.log(isPalindrome('a'));
console.log(isPalindrome('topot'));


// Alternative code
/*
const isPalindrome = (str) => {
  return str === str.split('').reverse().join('') ? true : false;
};
*/