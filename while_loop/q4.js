// Write a function called sumPrimes that takes a number as input and returns the sum of all prime numbers less than or
// equal to that number. Use a while loop to iterate through the numbers.

function sumPrimes(n) {
  let sum = 0;
  let num = 2;

  while (num <= n) {
    let isPrime = true;
    let i = 2;

    while (i <= Math.sqrt(num)) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
      i++;
    }

    if (isPrime) {
      sum += num;
    }
    num++;
  }
  return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(20));
