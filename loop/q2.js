//  Implement a function called findPrimeFactors that takes a number as input and returns an array containing 
//  its prime factors. Prime factors are the prime numbers that divide a given number without leaving a remainder.

function findPrimeFactors(num) {
    for (var i = 2; i <= num; i++) {
        while (num % i === 0) {
            console.log(i);
            num = num / i;
        }
    }
}
findPrimeFactors(50);