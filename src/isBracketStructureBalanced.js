const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isBracketStructureBalanced = (expression) => {
    const stack = [];
    for (const item of expression) {
      if (openingSymbols.includes(item)) {
        stack.push(item);
      } else if (closingSymbols.includes(item)) {
        if (closingSymbols.indexOf(item) !== openingSymbols.indexOf(stack.pop())) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };

console.log(isBracketStructureBalanced('(>'));
console.log(isBracketStructureBalanced('({}[])'));