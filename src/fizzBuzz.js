const fizzBuzz = (begin, end) => {
    let i = begin;
  
    while (i <= end) {
      if (i % 15 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
      i += 1;
    }
  };

console.log(fizzBuzz(11, 20));

// Best solution
/*
const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const hasFizz = i % 3 === 0 ? 'Fizz' : '';
    const hasBuzz = i % 5 === 0 ? 'Buzz' : '';
    console.log(`${hasFizz}${hasBuzz}` || i);
  }
};
*/