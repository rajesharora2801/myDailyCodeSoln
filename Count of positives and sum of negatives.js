// DESCRIPTION:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//  -----MySolution-----
function countPositivesSumNegatives(input) {
    if (input === null){        //Checking for Input Array Null condition
      return []
    } else if (input.filter(x => x>0) === [] && input.filter(x => x<0) === []){   //Checking for Empty Input Array condition
      return 0
    }else {
      let countPositive = input.filter(x => x>0).length       //Couting no. of positive elements
      let sumNegative = input.filter(x => x<0).reduce((sum, c) => sum + c, 0)   //Sum of negative elements
        if (countPositive === 0 && sumNegative === 0){    // checking if bothe results are zero to return empty Array
          return []
        } else {
          let resultArr = [countPositive, sumNegative]
          return resultArr
        }
    }
  }
