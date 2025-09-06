// Implement a program that calculates the sum of the digits of all the numbers from 1 to a given number.
//  For example, if the given number is 10, the program should calculate the sum of the digits of the numbers 1, 2, 3, ..., 10.

function sumOfDigits(n) {
    var totalSum = 0;

    for (var i = 1; i <= n; i++) {
        var num = i;
        while (num > 0) {
            totalSum += num % 10; 
            num = Math.floor(num / 10);
        }
    }

    console.log("Sum of digits from 1 to " + n + " is: " + totalSum);
}
sumOfDigits(10); 