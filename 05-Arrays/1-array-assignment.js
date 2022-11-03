// 1.   Create an array that contains two of your favorite things to do
const hobbies = ['working out', 'sports', 'gaming']
console.log(hobbies)
// 2.   Using an array method, add another thing you like to do to that list
hobbies.push('drawing')
let newArray = hobbies.push('drawing')
// 3.   Reverse the order of the array (remember, if needed use MDN)
let myArray = ['working out', 'sports', 'gaming']
let revArray = myArray.reverse()
console.log(myArray)
//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log(days.length)
// 5.   log the 4th element in the array
console.log(days.slice(4))
// 6.   Remove the first element in the array. Log the new array and the element removed from the array
console.log(days.splice(0))
// 7.   Put 'Sunday' back at the beginning of the array and log the new array
console.log(days.unshift('Sunday'))
// 8.   Remove the last element in the array. Log the new array and log the element removed
console.log(days.splice(6))
// 9.   Add 'Saturday' back to the end of the array and log the new array
console.log(days.push('Saturday'))
//10.   Replace 'Thursday' with 'Friday Junior'
let ind = days.indexOf(4)
let newInd = days.splice('Friday Junior')
console.log(newInd)
//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
// Confused on this one. 
//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
console.log(phone.concat(laptop))

//13.   Write a line of code to test if something is an array or not
console.log(Array.isArray([]))