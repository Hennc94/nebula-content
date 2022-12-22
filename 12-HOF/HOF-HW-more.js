// .sort()

// 1.   Write a HOF to sort an array of numbers from largest to smallest
const nums = [1, 25, 6, 3, 88, 45, 0]

nums.sort(function (a, b) {
  return a - b;
})
console.log(nums)


// 3.   Write a HOF to sort peoples names by their length
partyPeople.sort((a,b) => a.age - b.age);
console.log(partyPeople)


// 4.   Write an HOF to sort an array of objects of people by their age youngest to oldest
let sort = strings.sort(function(a, b) {
  if (a[a.length - 1] > b[b.length - 1])
      return 1;
      else if (a[a.length - 1] < b[b.length - 1])
        return -1;
    return 0;
})
console.log(sort)


// 5.   Write an HOF to sort an array of strings by the last letter of the string
const strings = ['sam', 'john', 'daniel', 'vanessa']


//confused on this one..will go to office hours for it..