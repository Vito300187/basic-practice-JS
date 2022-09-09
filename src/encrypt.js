const encrypt = (message) => {
    let result = '';
  
    for (let i = 0; i < message.length; i += 2) {
      const secondSymbol = message[i + 1] || '';
      result = `${result}${secondSymbol}${message[i]}`;
    }
  
    return result;
  };

console.log(encrypt('JavaScript'));
console.log(encrypt('Python'));
console.log(encrypt('PHP'));