// .Map Practice 

// When you answer these questions I want to see your thought process in pseudo-code/comments.



const message = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'] 

// 1. Using the .map method and the provided array of strings (above), create a new array that containing only the first letter of each string.
function firstLetter (string) {                         //create a function where we map out the given array and use "charAt" at the 0 index to grab each first letter
  let newMessage = message.map(str => str.charAt())
  return newMessage
}
console.log(firstLetter(message))

// 2. Using the .map method and the provided array of strings (above), create a new array containing only words that are longer than 6 characters.
function sixStr (array){
  let newArray = message.map(e=>{
    if(e.length>6){

    }
  }
)}

console.log(sixStr(message))
// 3. Using the .map method and the provided array of strings (above), create a new array containing 3 strings. 
// - The quote
// - The year (2015)
// - The source (Chris Pine - Learn JavaScript)

// console.log(message.join('').split)('')