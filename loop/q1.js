// Write a program that prints the multiplication table for a given number. The table should display the 
// multiplication of the number from 1 to 10. For example, if the given number is 5, 
// the program should print: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50.
const num = 5;
console.log("Multiplication table of : " + num );
for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}