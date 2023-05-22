// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//  -----MySolution-----
function positiveSum(arr) {
    return arr.filter(p => p > 0).reduce((a, b) => a + b, 0);
  }
//  -----Other Good Solutions-----
// --Solution # 01--
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }
 // --Solution # 02--
 const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);