// 1.   Write a function that tests if a string contains the string of '123' within it
function has123(string){
  return/123/.test(string)
}
console.log(has123('efghijk123'))
console.log(has123('jklmn567'))
// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false
function hasAorC(string){
  return /a(?=.*c)/.test(string)
}
console.log(hasAorC('abcdefg'))
console.log(hasAorC('ac'))
console.log(hasAorC('adce'))
console.log(hasAorC('cbe'))
// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'
function instances(string,substring){
  const regex = new
  RegExp(substring,"g");
  return(string.match(regex)||[]).length
}
console.log(instances('this is a test' , 't'));
// 4.   Write a function that checks if all characters in a string are lowercase letters
function checkLcLetters(string){
  return/^[a-z]+$/.test(string);
}
console.log(checkLcLetters('shawn'));
// 5.   Write a function that checks if a string has an uppercase letter
function hasUcLetter(string){
  let regex = /[A-Z]/;
  return regex.test(string);
}
console.log(hasUcLetter('To Be or Not To Be?'));
console.log(hasUcLetter('living in america .'));
// 6.   Write a function that checks if a string contains a dash or underscore 
function containsDashorUnder(string){
  return /[-_]/.test(string);
}
console.log(containsDashorUnder('the-world-is_yours'));
console.log(containsDashorUnder('welcome to the jungle'));
// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end
function checkEndStr(string){
  return /.com$/.test(string)
}
console.log(checkEndStr("wwww.google.com"))
console.log(checkEndStr("wwww.WWF.org"))
// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning
function checkforHyperText(string){
  let regex = /^(https?:\/\|http:?\/\/)/;
  return regex.test(string);
}
console.log(checkforHyperText('https://www.microsoft.com'))
console.log(checkforHyperText('http://captive.apple.com/'))
console.log(checkforHyperText('wwww.apple.com/'))
// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not
function uppercaseFirstLetter(string){
  return /^[A-Z]/.test(string)
}
console.log(uppercaseFirstLetter('David'))
console.log(uppercaseFirstLetter('hElLO'))
// 10.   Write a function that utlizes regex to replicate the functionality of '  string  '.trim()
function replicateTrim(string){
  return string.replace(/^\s+||s+$/g,'');
}
console.log(replicateTrim('Hello World'))