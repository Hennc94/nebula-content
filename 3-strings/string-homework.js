
// 1. Concatenate "hello" with "goodbye"
 const string1 = "hello"
 const string2  = "goodbye"
console.log(string1.concat(string2));

// 2. Save the substring "Friend" from the string "Hello Friend"
const greeting = "Hello Friend"
console.log(greeting.split('5,10'))

// 3. Using 5 or more of the following words, create a template literal that makes a legible sentence.
//    Do not create your own words, use the existing ones below!
const word1 = "hello"; 
const word2 = "horror";
const word3 = "peace";
const word4 = "world"
const word5 = "dislike"; 
const word6 = "umbrella"; 
const word7 = "car"; 
const word8 = "pasta"; 
const word9 = "pizza"; 
const word10 = "movies";
const word11 = "football"; 
const word12 = "soccer"; 
const word14 = "cookie"; 
const word15 = "favorite";
const word16 = "makeup"; 
const word17 = "I"; 
const word18 = "to"; 
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like"; 

let sentence = "I like pizza and pasta"
console.log(`${word17} ${word23} ${word9} ${word21} ${word8}`)

// 4. Given the string of your full name get your initials.
const name= 'Connor Hennessy'
console.log(name[0]+ name[7])

// 5. Get the 5th character from the following string: 'Hello World'
const greeting1 = 'Hello World'
console.log(greeting1[5])

// 6. Find the index of the dash from 'Coding-Time!'
const coding = 'Coding-Time!'
console.log(coding.indexOf(", "))

// 7. Write code to grab the final letter from a any string.
const string = "string"
console.log(string[6])

// 8. Write code to grab the first 3 letters from a string. 
const firstLetter= string.slice(0, 3)

// 9. Turn the following string into an array of words: 'This-is-a-sentence';
const sentence1 = 'This-is-a-sentence'
console.log(sentence1.split('-'))

// 10. Make the string of 12 from the following two numbers:
let one = 1;
let two = 2;

const twelve= [one, two].join('')
console.log(twelve)
