// Implement a function called reverseString that takes a string as input and returns the string in reverse order using 
// a while loop. For example, if the input is "hello", the function should return "olleh".

function reverseString(str) {
    let reversed = "";
    let i = str.length - 1;

    while (i >= 0) {
        reversed += str[i];  
        i--;
    }

    return reversed;
}
console.log(reverseString("hello"));   