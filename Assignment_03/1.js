function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  // Example
  console.log(isPalindrome("racecar")); // true
  