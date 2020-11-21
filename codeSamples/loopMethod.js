function reverseString(str) {
    var newString = "";
    for (var i = str.length -1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
    
reverseString('Zaira');
console.log(reverseString('Zaira'));
console.log(reverseString("  abc"));
console.log(reverseString("45"));
console.log(reverseString("a"));
console.log(reverseString(""));
console.log(reverseString(45));
console.log(reverseString(['a', 'b']))

