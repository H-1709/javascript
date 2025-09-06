// Write a function called findDuplicates that takes an array as input and returns an array containing any duplicate 
// elements. The order of elements in the resulting array should match their order of appearance in the input array.

function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();
    let result = [];

    for (let item of arr) {
        if (seen.has(item) && !duplicates.has(item)) {
            result = result.concat(item); 
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }
    return result;
}
console.log(findDuplicates([1,2,3,4,5,1,6,3]));

