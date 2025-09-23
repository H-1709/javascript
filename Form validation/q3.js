// 3. Write a JavaScript function to validate the password. The function should check if the password:

// is not empty
// is at least 8 characters long
// contains at least one uppercase letter
// contains at least one lowercase letter
// contains at least one number
// contains at least one special character
// provides an appropriate error message for each violation

function validatePassword(password) {
  // 1. Check if empty
  if (!password || password.trim() === "") {
    return "Password cannot be empty";
  }

  // 2. Length check
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }

  // 3. Uppercase check
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }

  // 4. Lowercase check
  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }

  // 5. Number check
  if (!/[0-9]/.test(password)) {
    return "Password must contain at least one number";
  }

  // 6. Special character check
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Password must contain at least one special character";
  }

  // 7. If all checks pass
  return "Valid";
}

// Examples:
console.log(validatePassword(""));              // Password cannot be empty
console.log(validatePassword("Abc123"));        // Password must be at least 8 characters long
console.log(validatePassword("abcdefgh"));      // Password must contain at least one uppercase letter
console.log(validatePassword("ABCDEFGH"));      // Password must contain at least one lowercase letter
console.log(validatePassword("Abcdefgh"));      // Password must contain at least one number
console.log(validatePassword("Abcdefg1"));      // Password must contain at least one special character
console.log(validatePassword("Abcdefg1@"));     // Valid
