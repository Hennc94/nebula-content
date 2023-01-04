// // 1.   What is the order of output?
// setTimeout(() => {
//   console.log('a');
// }, 1);
// console.log('b');

// new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
// console.log('e');

// setTimeout(() => {
// console.log('f');
// }, 0);

// setTimeout(() => {
//   console.log('g');
// }, 3);

// new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))

//Confused on this one. 


// 2.   Create a promise for something you may, or may not do.

let p = new Promise ((resolve, reject) =>{
  let x = 'Dog has been walked'
  if (x == 'Dog has been walked'){
    resolve('The dog has been walked')
  } else {
    reject('Dog has not been walked')
  }

})

p.then((message) =>{
  console.log('The walk was a success' + message)
}).catch((message) =>{
  console.log('The walk was not a success' + message)
})


// 3.   Create a new promise for something you may or may not do. 
//      After a few seconds log whether it has been done.

let a = new Promise((resolve, reject) => {
  let a = 8 * 8
  setTimeout(() =>{
  if (a === 64) {
    resolve('The math problem has been solved')
  } else {
    reject('The math problem has not been solved')
  }
}, 5000)
})

// 4.   Using the prior example use .then and .catch to handle responses and rejections
a.then((message) => {console.log('This is correct' + message)
}).catch((message) => {
  reject('This is incorrect' + message)
})

// 5.   What does a promise resolve to?

//A promise "resolves" a given value to a promise.

// 6.   Using HTML & CSS, write a promise that, after 5 seconds changes the existing text on the web-page

//https://codepen.io/Hennc94/pen/oNMLdOm?editors=1111

// 7. What is the output of the following code?
// const promise = new Promise(res => res(2));
// promise.then(v => {
//   console.log(v);
//   return v * 2;
// })
// .then(v => {
//   console.log(v);
//   return v * 2;
// })
// .then(v => {
//   console.log(v);
//   return v * 2;
// })
// .finally(v => {
//   console.log(v)
// })

// 2
// 4

//If promise is fufilled, then we will log the value, and multiply it by 2, then and repeat that twice, and finally log final value to console


