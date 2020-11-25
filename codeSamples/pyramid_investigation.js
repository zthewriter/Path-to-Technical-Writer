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

  /**
  Above code displays the following:
        *
        **
        ***
        ****
        *****
   */

  function printPyramid (n) {
  
    for (var i = 1; i <= n; i++) {
      var row = '';
      
      for (var j = 1; j <= (n - i + 1); j++) {
        row += '*';
      }
          
      console.log(row);
    }
  }
  
  printPyramid(5);






