const bubbleSort = (arr) => {
    let stepsCount = arr.length - 1;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < stepsCount; i += 1) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true;
            }
        }

        stepsCount -= 1;
    } while (swapped);

    return arr;
};

console.log(bubbleSort([14, 20, -10, -63, 0, 100, 33, -33]));
