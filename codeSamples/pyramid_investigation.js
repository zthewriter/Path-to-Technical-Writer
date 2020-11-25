/**
 *
 * Below code displays a pyramid
 *      *
 *      **
 *      ***
 *      ****
 *      *****
 */

function printPyramid (n) {
  for (var i = 1; i <= n; i++) {
    let row = '';
    for (var j = 1; j <= i; j++) {
      row += '*';
    }

    console.log(row);
  }
}

printPyramid(5);


/**
 *
 * Below code displays an inverted pyramid
 *      *****
 *      ****
 *      ***
 *      **
 *      *
 */

function printReversedPyramid (n) {

  for (var i = 1; i <= n; i++) {
    var row = '';
    for (var j = 1; j <= (n - i + 1); j++) {
      row += '*';
    }

    console.log(row);
  }
}

printReversedPyramid(5);


