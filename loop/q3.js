//  Create a program that prints a pyramid pattern using asterisks (*). The number of rows in the pyramid should
// be determined by the user input. For example, if the user enters 5, the program should print the following pattern:
//     *
//    ***
//   *****
//  *******
// *********

let rows = 7;

for (let i = 1; i <= rows; i++) {
  let pattern = "";
  
  for (let j = 1; j <= rows - i; j++) {
    pattern += " ";
  }

  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  for (let j = 2; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
