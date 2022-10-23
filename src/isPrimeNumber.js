const isPrimeNumber = (num) => {
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  };
  
  const sayYesOrNot = (num) => {
    const result = isPrimeNumber(num) ? 'yes' : 'no';
    console.log(result);
  };

  console.log(sayYesOrNot(11));
  console.log(isPrimeNumber(111));