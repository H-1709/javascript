// Write a program that takes a year as input and determines if it is a leap year. Leap years are divisible by 4,
// but not by 100, unless they are also divisible by 400. The program should display the appropriate message 
// indicating whether the year is a leap year or not.

function checkLeapYear(year) {
    if (year % 400 === 0) {
        console.log(year + " is a Leap Year");
    } else if (year % 100 === 0) {
        console.log(year + " is NOT a Leap Year");
    } else if (year % 4 === 0) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is NOT a Leap Year");
    }
}
checkLeapYear(2024); 
checkLeapYear(2100); 
checkLeapYear(2000); 