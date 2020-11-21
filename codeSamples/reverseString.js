/**
 * reverseString
 * description: Method to reverse an string input
 *    Test Cases:
 *      reverseString("Zaira")   => "ariaZ"
 *      reverseString("  abc")   => "cba  "
 *      reverseString("45")      => "54"
 *      reverseString("a")       => "a"
 *      reverseString("")        => ""
 *      reverseString(45)        => null
 *      reverseString(['a','b']) => null
 */

function reverseString(inputStr) {
  /**
   * Separate characters into array
   * 1. Create empty array
   *    go over each character in the word
   *    insert it into the array
   * 2. Use split method from the String class
   */

  /**
   * 2. SPLIT METHOD
   */
  // const inputArr = inputStr.split("");

  /**
   * 1. Loop method
   */

  const inputArr = [];

  for (let i = 0; i < inputStr.length; i += 1) {
    // i++
    // i += 1
    // i = i + 1
    inputArr.push(inputStr.charAt(i));
  }

  const reversedArr = inputArr.reverse();

  const reversedString = reversedArr.join("");

  return reversedString;
}

console.log(reverseString("Zaira"));
console.log(reverseString("Zaira"));
console.log(reverseString("  abc"));
console.log(reverseString("45"));
console.log(reverseString("a"));
console.log(reverseString(""));
// console.log(reverseString(45));
// console.log(reverseString(['a','b']));

/**
 * 1. Complete this exersice without using the reverse method
 *    With the use of loops and arrays
 * 2. Run the code with all the test case
 *    If statements and verify that the input is an actual string.
 * 3. Document your learnings
 */