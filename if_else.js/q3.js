// Create a program that takes three numbers as input and finds the largest among them. The program should display 
// the appropriate message indicating which number is the largest.


function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a + " is the largest number");
    } else if (b >= a && b >= c) {
        console.log(b + " is the largest number");
    } else {
        console.log(c + " is the largest number");
    }
}

findLargest(12, 45, 30);  
findLargest(100, 99, 101); 