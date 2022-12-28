// 1.   Either by hand, paint, or whatever you prefer draw the following complexities
//      O(1)
//      O(log n)
//      O(n)
//      O(n^2)
//      O(n^3)

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function loopAndPrint(arr){
  //arr [1] or [1, 2, 3, 4, 5, 6, 7]
  for(let i = 0; i < arr.length; i++){
      console.log(arr[i]);
  }
}

//Operation per input item making this O(n)

// 1.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function findMax(arr){
  let max = arr[0];

  for(let i = 1; i < arr.length; i++){
      if(arr[i] > max){
          max = arr[i]
      }
  }

  return max;
}

//Operation O(1)
// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function printLast(arr){
  console.log(arr[arr.length-1]);
}

//Operation O(n), the function runs for the input size of the array
// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function everyOther(str){
  let newStr = '';

  for(let i = 0; i < str.length; i+=2){
      newStr += str[i]
  }

  return newStr;
}

//Operation 0(n), function iterates over the input (str.length)
// 4.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function doubled(num) {
  return 2 * num
}
//Operation 0(n)
// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multipleSteps(num) {
  let final = 4 * num
  return final * 3
}
//Operation O(2^n)
// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function backwardsArr(arr) {
  let arrReversed = []
  for (let i = arr.length - 1; i >= 0; i--) {
    arrReversed.push(arr[i])
  }
  return arrReversed
}
//Operation O(n)
// 6.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multiplyAll(arr1, arr2) {
  if (arr1.length !== arr2.length) return undefined
  let total = 0
  for (let i of arr1) {
    for (let j of arr2) {
      total += i * j
    }
  }
  return total
}
//Operation O(n^2) nested for loops
// 7.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums = [10,20,30,40];
nums.push(50);

//Operation O(1) We are just adding 50 to our array
// 8.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums2 = [10,20,30,40];
nums.unshift(0);

//Operation O(1) we are adding 0 to our array and returning the new length of the array
// 9.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function logTime(arr) {
  let numberOfLoops = 0
  for (let i = 1; i < arr.length; i *= 2) {
    numberOfLoops++
  }
  return numberOfLoops
}
//Operation O(1) We are finding the number of loops 