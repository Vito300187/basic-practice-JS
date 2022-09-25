const capitalize = (sequence) => 
    (sequence.length === 0) ? sequence : `${sequence[0].toUpperCase()}${sequence.slice(1)}`;

const capitalizeWords = (text) => {
    const separator = ' ';
    const words = text.split(separator);

    const capitalizeWords = [];
    for (const word of words) {
        capitalizeWords.push(capitalize(word));
    }

    return capitalizeWords.join(separator);
};

console.log(capitalizeWords('test processing of a string through conversion to an array'));