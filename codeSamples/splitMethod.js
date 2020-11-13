/** 
 * splitMethod
 * assignment: Reverse a string input
 * Test cases: 
 * reverseString("Zaira") => "airaZ"
 * reverseString("  abc") => "cba  " 
 * reverseString("45") => "54"
 * reverseString("a") => "a"
 * reverseString("") => ""
 * reverseString(45) => null
 * reverseString(['a', 'b']) => null
*/

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

reverseString("Zaira");
console.log(reverseString("Zaira"));

