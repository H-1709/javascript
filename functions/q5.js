// implement a function called capitalizeWords that takes a sentence as input and returns the sentence with each word 
// capitalized. Assume that the input sentence consists of lowercase alphabetic characters and spaces. For example,
// if the input is "hello world", the function should return "Hello World"

function capitalizeWords(str){
    
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(" ");
}

console.log(capitalizeWords(" hello world ")); 
