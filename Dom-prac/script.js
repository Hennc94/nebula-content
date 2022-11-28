
const holdH1 = document.querySelector('h1');
holdH1.innerText = "Hello World"
console.log(holdH1.innerText)

const holdIdElement = document.querySelector("Dom Pracice");
const holdId = document.getElementById('Dom Practice')
console.log(holdIdElement)
console.log(holdId)

const holdIdElement1 = document.querySelector("The Doms");
console.log(holdIdElement1)
const holdId1 = document.getElementsByClassName('The Doms')
console.log(holdId)

const holdAllDivs = document.querySelectorAll('div');
console.log(holdAllDivs)

const div1 = document.getElementsByName('Box1')
console.log(Box1)

// target the elements to be changed & store them in a variable
const holdDiv = document.querySelector("Box2");
// modify that element's propery via the variable
holdDiv.style.backgroundColor = "blue";


// OR do it without a variable
document.querySelector("Box2").style.backgroundColor = "red";

holdDiv.setAttribute('style', 'background-color:pink');

//ADding text into element
document.body.innerText = `Welcome Everyone!`;

// setTimeout(() => {
div.classList.add('makePink')
div.innerText = "Hey I'm Pink now!!"{
  3000;
}

const divs = document.querySelectorAll('div')
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
divs.forEach(div => {
  const randomNum = Math.floor(Math.random() * 6)
  div.style.backgroundColor = colors[randomNum]
})




const div = document.querySelector('div')
const names = ['eric', 'daniel', 'kelly', 'jordan']

names.forEach(name => {
  let p = document.createElement("p");
  p.innerText = name
  div.appendChild(p);
})

setInterval(function () {
  const randomNum = Math.floor(Math.random() * 6)
  div.style.backgroundColor = colors[randomNum]
}, 2000);

