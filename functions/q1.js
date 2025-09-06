// Question: Write a function called calculateFactorial that takes a positive integer as input and returns 
// its factorial. The factorial of a number is the product of all positive integers less than or 
// equal to that number. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120
// Function to calculate factorial

function calculateFactorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
let n = 10;
console.log("Factorial of", n, "is:", calculateFactorial(n));
