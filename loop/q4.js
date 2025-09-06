// Write a function called countOccurrences that takes an array and a value as input and returns the number of 
// occurrences of that value in the array
function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}

let numbers = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(numbers, 2)); 
