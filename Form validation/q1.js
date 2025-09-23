// 1. Write a JavaScript function to validate the name field. The function should check if the name:

// is not empty
// contains only letters and spaces
// provides an appropriate error message for each violation



function validateName(name) {
  // Trim spaces from both ends
  let trimmedName = name.trim();

  // 1. Check if empty
  if (trimmedName === "") {
    return "Name cannot be empty";
  }

  // 2. Check only letters and spaces (regex: ^[A-Za-z\s]+$)
  let nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(trimmedName)) {
    return "Name can only contain letters and spaces";
  }

  // 3. If everything is fine
  return "Valid";
}

// Examples:
console.log(validateName(""));            // Name cannot be empty
console.log(validateName("John123"));     // Name can only contain letters and spaces
console.log(validateName("John Doe"));    // Valid
