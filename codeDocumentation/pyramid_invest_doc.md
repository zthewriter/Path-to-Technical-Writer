## Nested Loops

### Description: 
Nested loops exist within loops. Click [here](https://github.com/zthewriter/path_to_technical_writer/blob/master/codeSamples/loopMethod.md) for more information on loops. Nested loops provide an additional layer of parameters for the code to follow in an exisiting loop. Please reference the following pyramid examples to observe how they operate.

```
Input:

function printPyramid (n) {

    for (var i = 1; i <= n; i++) {
      var row = '';
  
      for (var j = 1; j <= i; j++) {
        row += '*';
      }
  
      console.log(row);
    }
  }
  
  printPyramid(5);

Output:

*
**
***
****
*****
  ```

Steps to build the above pyramid structure:

1. Create a function and name it printPyramid.  
   Name the input value for your function n.
2. Create a for loop and define the parameters for variable i. These parameters are:
   1. i = 1
   2. i <= n
   3. i++
     
     These parameters demonstrate that i begins at 1, is never greater than the input n, and increases each loop iteration.
3.   Create a second variable named row and set it equal to an empty string. 
4.   Create another for loop within the exisiting loop and define the parameters for a new variable j. These parameters are:
     1.   j = 1 
     2.   j <= i
     3.   j++
5. Set row += '*'. 
6. Create a print with console.log(row). 
7. Close the nested loop.
8. Test the function printPyramid(5) and observe your findings.   


```
Input:
function printPyramid (n) {
  
    for (var i = 1; i <= n; i++) {
      var row = '';
      
      for (var j = 1; j <= (n - i + 1); j++) {
        row += '*';
      }
          
      console.log(row);
    }
  }
  
  printPyramid(5)

Output:
*****
****
***
**
*
```
Steps to build the above pyramid structure:

1. Complete the same steps in the above structure.
2. Change step 4. ii. and set the j parameter to j <= (n - i +1).
3. Run the function printPyramid(5) and observe the new structure.  
