// Write a program that finds the largest power of 2 less than a given number using a while loop. 

let n = 8;
let power = 1;

while (power * 2 < n) {
    power *= 2;
}

console.log("Largest power of 2 less than " + n + " is:" + power);
