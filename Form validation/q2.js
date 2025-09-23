// 2. Write a JavaScript function to validate the email address. The function should check if the email:

// is not empty
// is a valid email address using a regular expression
// provides an appropriate error message for each violation


function validateEmail(email) {
  // Trim spaces
  let trimmedEmail = email.trim();

  // 1. Check if empty
  if (trimmedEmail === "") {
    return "Email cannot be empty";
  }

  // 2. Validate format using regex
  // This regex checks for: something@something.domain
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return "Invalid email address";
  }

  // 3. If valid
  return "Valid";
}

// Examples:
console.log(validateEmail(""));                 // Email cannot be empty
console.log(validateEmail("test@"));            // Invalid email address
console.log(validateEmail("user@example.com")); // Valid
