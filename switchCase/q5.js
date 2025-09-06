// Create a program that prompts the user for their age and determines their age group based on the following
// ranges: 0-12 (Child), 13-19 (Teen), 20-40 (Adult), 41 and above (Senior). Use a switch case statement to handle
//  the age groups and log the appropriate message.

let age = hi;
switch (true) {
  case age >= 0 && age <= 12:
    console.log("Child");
    break;
  case age >= 13 && age <= 19:
    console.log("Teen");
    break;
  case age >= 20 && age <= 40:
    console.log("Adult");
    break;
  case age >= 41:
    console.log("Senior");
    break;
  default:
    console.log("Invalid age");
}
