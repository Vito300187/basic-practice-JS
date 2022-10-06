const getIntersectionOfSortedArrays = (arr1, arr2) => {
    const getArrSize1 = arr1.length;
    const getArrSize2 = arr2.length;

    let i = 0;
    let j = 0;
    const result = [];

    while (i < getArrSize1 && j < getArrSize2) {
      const lastText = result[result.length - 1];
      if (arr1[i] === arr2[j] && arr1[i] !== lastText) {
        result.push(arr1[i]);
        i += 1;
        j += 1;
      } else if (arr1[i] > arr2[j]) {
        j += 1;
      } else {
        i += 1;
      }
    }
  
    return result;
  };

console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]));


// Alternative code

/* 
const getIntersectionOfSortedArrays = (arr1, arr2) => {
    const result = [];
    for (const item of arr1) {
      if (arr2.includes(item) && !result.includes(item)) result.push(item);
    }
    return result;
  };
*/