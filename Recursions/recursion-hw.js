// Solve the following problems using recursion:

// 1. Write a recursive function that prints the numbers 1 through n. Printing should happen once per call to the function.
// function printNumbers(n){
//   var result;
//   if(n <= 1)
//       result = '1';
//   else
//       result = printNumbers(n-1) + n;
//   console.log(result);
//   return result;
// }


// 2. Let's create a recursive function that returns the factorial of a number. The factorial of a number is the product of all the integers from 1 to that number. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. You should have a single input parameter, n, and return the factorial of that number.

// function factorial(x) {
//     //if number is 0 (factorial is one)
//     if (x == 0) {
//       return 1
//       //if number is positive
//     } else {
//       return x * factorial(x - 1)
//     }
//   }

//use number 25

// const num = 25

// //call factorial() if number is positive
// if (num >= 0) {
//   const result = factorial(num)
//   console.log(`The factorial of ${num} is ${result}`)
// } else {
//   console.log('')
// }

// 3. Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// let fib = function(num){
//     if(num === 1){
//       return 0
//     }
//     if (num === 2){
//       return 1
//     }
//     return fib(num - 1) + fib(num - 2)
// }

// console.log(fib(12))

//1. 0
//2. 1
//3. 1
//4. 2
//5. 3
//6. 5
//7. 8
//8. 13

// 4. Write a recursive function that takes a number (4 digits or longer) as an input and returns the sum of its digits. For example, if the input is 4321, the sum would be 4 + 3 + 2 + 1 = 10.

// function sum(num) {
//   if (num > 0) {
//     return num + sum(num - 1)

//   } else {
//     return num
//   }
// }

// const number = 12
// const result = sum(number)
// console.log(`The sum is ${result}`)