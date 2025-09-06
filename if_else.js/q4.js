// Write a function called isTriangle that takes three numbers as input and determines if they can form a triangle. 
// The function should return true if the three numbers satisfy the triangle inequality theorem, which states that 
// the sum of any two sides of a triangle must be greater than the third side.

function isTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

console.log(isTriangle(3, 4, 5)); 
console.log(isTriangle(1, 2, 3)); 
console.log(isTriangle(5, 7, 10));