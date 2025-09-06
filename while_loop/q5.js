// Implement a program that calculates the factorial of a given number using a while loop.

let n = 5;
let factorial = 1;
let i = n;

while (i > 0) {
    factorial *= i;
    i--;
}

console.log("Factorial of " + n + " is: " + factorial);