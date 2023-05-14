// DESCRIPTION:
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

//***** My Solution ******
function sumOfDifferences(arr) {
    arr.sort((a, b) => b - a)
    let result = 0
    if (arr.length === 0 || arr.length === 1){
      result = 0
    }else {
      for (let i=0; i < arr.length-1; i++){
        result = result + arr[i] - arr[i+1]
      }
    }
    return result
  }

 //***** Other Good Solution ******
 function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}