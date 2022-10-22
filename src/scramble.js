const scramble = (string1, string2) => {
    const array1 = string1.split('').sort();
    const array2 = string2.toLowerCase().split('').sort();
    let count = 0;
  
    for (let i = 0; i <= array1.length && count < array2.length; i += 1) {
      if (array2[count] === array1[i]) {
        count += 1;
      }
    }
  
    return (count === array2.length);
  };

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('avj', 'java'));
console.log(scramble('', 'hexlet'));
console.log(scramble('scriptingjava', 'JavaScript'));