// // 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'
for(let i = 0; i < 30; i++) {
  console.log(i+1);

// // 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index
for(let i = 1; i <= 10; i+=2) {
  console.log(i);
}


// // 3.   Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.
const top5celeb = ['Tony Hawk', 'Robin Williams', 'Adam Sandler', 'Jim Carey', 'Post Malone']
console.log(top5celeb)

for(let i=0; i< top5celeb.length; i++){
    console.log(top5celeb[i])
}



// 4.   Loop over your celebrity list and 
//      If a celebrity's full name has an even number of characters log it to the console
const EvenNames =[]
for(let i=0; i< top5celeb.length; i++){
        if(!(top5celeb[i].length%2)){
            EvenNames.push(top5celeb[i]);
            console.log(EvenNames)
        }
      }


// 5.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names

const firstName =[]
for(let i = 0; i < top5celeb.length; i++){
    firstName.push(top5celeb[i].split(" ")[0]) 
}
console.log(firstName)
    


// 6.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only last names

const lastName =[]
for(let i = 0; i < top5celeb.length; i++){
    lastName.push(top5celeb[i].split(" ")[1]);
}
console.log(lastName)


// 7.   Loop over the celebrity list and then loop through each name. 
//      If a letter is a vowel, log it to the console
for (let i = 0; i < top5celeb.length; i++){
  for (let j=0; j<top5celeb[i].length; j++){
      if (top5celeb[i][j] === "a" || top5celeb[i][j] === "e"||
      top5celeb[i][j] === "i" || top5celeb[i][j] === "o" || top5celeb[i][j] === "u" ){
         console.log(top5celeb[i][j]) 
      }else continue;
  }
}



// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console
for (let i= 0; i <top5celeb.length; i++) {
  for(let j = 0; j<top5celeb[i].length; j++){
      if (top5celeb[i][j] === top5celeb[i][j].toUpperCase()){
          console.log(top5celeb[i][j])
      }
  }
}


// // 9.   Convert your celebrity array to all caps and no spaces:
// //      Ex:
// //        Input:  ['Martha Stewart', 'David Beckham', etc..] 
// //        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
const capital = [] 
for(let i = 0; i < top5celeb.length; i++){
   capital.push(top5celeb[i].toUpperCase().split(' ').join('-'));    
}
    console.log(capital)



// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop
//confused on this one. 


//BONUS:
//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console
