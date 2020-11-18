## Split Method

### Description
The Split Method is designed to help users reverse strings of code. It is one of many methods to reverse strings. In contrast to other methods, the Split Method utilizes functions, variables, and arrays to reverse a string.  

**Note:** The following instructions are in JavaScript. 

```
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

reverseString("Zaira");
```

1. Create a function. 
    
    1. Name it reverseString.

    2. Name the array within the function name str.

    3. Open brackets to begin defining variables within your function. 
   
2. Name your first variable splitString.
   
    1. Set it equal to the method **str.split(“”)**. 

    2. This method will split the characters of the string and create an array.

3. Name your second variable reverseArray. 
   
    1. Set it equal to the variable split.String.

    2. Add the method **.reverse()**. 

    3. This method will reverse the characters within the array.
 
4. Create a final variable named joinArray. 

    1. Set it equal to the variable reverseArray.

    2. Add the method **.join(“”)**. 

    3. This method will join the characters within the array and convert the array into a string.  

5. Close the brackets. 
   
6. Test the reversal of the string “Zaira”.

    1. The code should read: reverseString(“Zaira”). 

    2. The sample string “Zaira” should return “ariaZ”. 
   
7. Confirm you have the correct output and complete the Split Method. 
