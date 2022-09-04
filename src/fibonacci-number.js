// const fib = (num) => (num < 2 ? num : fib(num - 1) + fib(num - 2));

const fib = (num) => {
    if (num === 0) {
      return 0;
    }
  
    if (num === 1) {
      return 1;
    }
  
    return fib(num - 1) + fib(num - 2);
  };

console.log(fib(0));
console.log(fib(1));
console.log(fib(3));
console.log(fib(10));

// Alternative code

/* 
  const fib = (num) => {
    if (num === 0) {
      return 0;
    }
    if (num === 1) {
      return 1;
    }

    let first = 0;
    let second = 1;
    let result = first + second;

    for (let i = 2; i <= num; i += 1) {
      result = first + second;
      first = second;
      second = result;
    }

    return result;
  }; 
*/
