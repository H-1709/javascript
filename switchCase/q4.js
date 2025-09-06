// Write a program that takes a number as input and checks if it is positive, negative, or zero using a
//  switch case statement. Log the corresponding message accordingly.

let num = -5;
switch (true) {
    case (num > 0):
        console.log("it is Positive");
        break;
    case (num < 0):
        console.log("it is Negative");
        break;
    case (num === 0):
        console.log("The number is Zero");
        break;
    default:
        console.log("Invalid input");
}

