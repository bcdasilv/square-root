/*

Problem: Find the square root of a given number (n) with a certain amount of precision (e) 
without using the square root function. 
In other words, approximate the square root of n by finding x such that

  n - e <= x^2 <= n + e

*/

function sqrRoot(n, e) {
    if (n < 0) return undefined // or raise an exception
    if (n === 1 || n === 0) return n;

    const low = 0
    const high = n
    const x = Math.floor(n/2);
    
    if (tooHigh(n, x, e))
      return sqrRootHelper(low, x, n, e);
      //return sqrRootHelper(low, x, ..., e);
    else if (tooLow(n, x, e))  
      return sqrRootHelper(x, high, n, e);
      //return sqrRootHelper(x, high, ..., e);
    else 
      return x;
  }
  
  function sqrRootHelper(low, high, n, e) {
    const x = Math.floor((high + low)/2) ; 
    if (tooHigh(n, x, e))
      return sqrRootHelper(low, x, n, e);
    else if (tooLow(n, x, e))
      return sqrRootHelper(x, high, n, e);
    else 
      return x;
  }

  function tooHigh(n, x, e) {
    return (x*x > n + e);
  }

  function tooLow(n, x, e) {
    return (x*x < n - e);
  }

  module.exports = { sqrRoot, tooHigh, tooLow };
  
  // console.log(sqrRoot(1, 0));
  // console.log(sqrRoot(4, 1));
  // console.log(sqrRoot(4, 0));
  // console.log(sqrRoot(9, 0));
  // console.log(sqrRoot(9, 1));
  // console.log(sqrRoot(9, 7));
  // console.log(sqrRoot(9, 5));
  // console.log(sqrRoot(16, 0));
  // console.log(sqrRoot(16, 1));
  // console.log(sqrRoot(16, 47));
  // console.log(sqrRoot(16, 48));
  // console.log(sqrRoot(25, 0));
  // console.log(sqrRoot(25, 1));
  // console.log(sqrRoot(25, 3));
