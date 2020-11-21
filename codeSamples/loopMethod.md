## Loop Method 

### Description:
The Loop Method is designed to help users reverse strings of code. It is one of many methods to reverse strings. In contrast to other methods, the Loop Method utilizes the for loop function along with variables to reverse a string.

**Note:** The following instructions are in JavaScript. 

```
function reverseString(str) {
var newString = "";
for (var i = str.length -1; i >= 0; i--) {
newString += str[i];
}
return newString;
}

reverseString('hello');
```

1. Create a function.
    1. Name it reverseString.
2. Create a variable called newString within the function.
    1. Set it equal to “”. 
    2. This indicates that the output will be a string. 
3. Create a **FOR** loop.
4. Create a variable called i within the **FOR** loop.
    1. Set it equal to str.length -1. 
    This corresponds to the last character of the string.
    2. Add the parameter i>= 0. 
    The loop will continue to output characters when i is greater than 0. 
    3. Add the parameter  i--. 
    This will allow the loop to reverse characters one by one from the last character of the string to the first character.
5. Open brackets and set the variable newString to += str[i].

    This will create multiple iterations of the reversed characters. 
6. Type return newString.
7. Close the function brackets.
8. Test the function with “hello” as a sample string.
9. Confirm you have the correct output and complete the Loop Method. 
