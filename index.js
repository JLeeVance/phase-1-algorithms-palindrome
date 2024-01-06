function isPalindrome(word) {
  // const lowWord = word.toLowerCase();
  return word.toLowerCase() === word.toLowerCase().split("").toReversed().join("") ? true : false;
}
console.log(isPalindrome("Cat"))
console.log(isPalindrome("racecar"))


/* 
Declare function taking in a string
    check string.toLowerCase() value against string .toReverse().join()
    If true, return true
*/

/*
  Returned Ternary Expression - .split and .toReversed and .join
      to compare the inputted value against the reversed value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
