// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//  -----MySolution-----
const reverseSeq = n => {
    let arr =[]
    for (let i=1; i<=n; i++)
      arr.unshift(i)
    return arr
  }

//  -----Other Good Solutions-----
const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

  