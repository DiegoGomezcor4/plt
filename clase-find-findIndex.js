// Methods that iterate over an array
// Methods thad DO NOT modify the original array (Inmutability)

// find()

const multipleof5 = [5, 10, 15, 20];

const firsNumberGreaterThan10 = multipleof5.find((number) => number > 10);

console.log(multipleof5); // [5, 10, 15, 20]
console.log(firsNumberGreaterThan10); // 15

// findIndex()
const randomNumbers = [6, 14, 27, 56, 40];
const indexNumber = randomNumbers.findIndex((number) => number > 50);

console.log(randomNumbers); // [6, 14, 27, 56, 40]
console.log(indexNumber); // 2