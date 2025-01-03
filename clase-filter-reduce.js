// Methods that iterate over on array.
// ;etjpds tjat DO NOT modify the original array (iNMUTABILITY).

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7 , 8 , 9 , 10]
const evanNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evanNumbers)

// reduce() - caso 1

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currenValue) => accumulator + currenValue, 0)
console.log(numbersReduce)
console.log(sum)

// reduce() - caso 2
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']
const wordfrecuency = words.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordfrecuency)