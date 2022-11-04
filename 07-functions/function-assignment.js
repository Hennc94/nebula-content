// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
//Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
//'word'   =>  'drow' 

function solution(str){
  let arr = str.split('')
  let reverse = arr.reverse()
  let strng = reverse.join('')
  console.log(strng)
  return (strng)
}

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr (n, s) {
  let hold = ('')
  console.log(n)
  for (let i = 0; i < n; i++){
  hold = hold.concat(s)
  console.log(s)
  }
return(hold)
}

// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
class SmallestIntegerFinder {
  findSmallestInt(args) {
    //array -> number
    let num = Infinity
    for (let i = 0; i < args.length; i++){
    console.log(args[i])
    if (args[i] < num){
      num=args[i]
    }
    }
      return num
  }
}


// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
// https://www.codewars.com/kata/544675c6f971f7399a000e79


