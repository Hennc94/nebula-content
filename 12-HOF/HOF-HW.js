// 1.   Write a higher-order function which takes in two numbers and performs a calculation with them
//      Write the callback functions seperately 
//          Ex: calculate(multiply, 2,4) => 8
//          Ex: calculate(subtract, 2,4) => -2
//          Ex: calculate(exponent, 2,4) => 16

let addition = (num1, num2) => num1 + num2
let subtraction = (num1, num2) => num1 - num2

const calculate = (num1, num2, callback) => {
  return callback(num1, num2)

}
console.log(calculate(2, 4, addition))
console.log(calculate(2, 4, subtraction))

// 2.   Write a function that takes in any number of numbers and performs calculations on them
//      Write the callback functions separately 
//      console.log(arguments) inside of a function to visualize your arguments
//          Ex: calculateAll(multiply, 1,4,1,231,5) => 4620
//          Ex: calculateAll(subtract, 2,4,5,7) => -14
let multiplication = (num1, num2) => num1 * num2
let division = (num1, num2) => num1 / num2

const calc = (num1, num2, callback) => {
  return callback(num1, num2)
}


console.log(calculate(4, 4, multiplication))
console.log(calculate(36, 6, division))
// 3.   Write a function that takes in a string and performs some form of manipulation on it
//  Ex: modify(yeller, 'I need a nap') => I NEED A NAP!!!
//          Ex: modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
//          Ex: modify(code, 'There is no cake') => Th-r- -s n- c-k-

const yeller = (string) => {
  return string.toUpperCase() + '!'
}
console.log(yeller('Im always tired'))



// 4.   Write a function that takes in an array filled with different data types and returns each data type
//          Ex: oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['I love coding, 'goosfraba']
//          Ex: oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['Nested Array!']
//          Ex: oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => [10, Infinity]

//strings
//numbers
//booleans 

//Confused on this one, going to go over in office hours.