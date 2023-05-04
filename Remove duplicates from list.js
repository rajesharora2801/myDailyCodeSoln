// DESCRIPTION:
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

//  -----MySolution-----
function distinct(a) {
    let uniqueValue = a.filter((item,index) => a.indexOf(item) === index)
    return uniqueValue
  }

//  -----Other Good Solution-----
function distinct(a) {
    return [...new Set(a)];
  }

// Using Arrow function with ...Set command
const distinct = a => [...new Set(a)];