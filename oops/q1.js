// 1. User Account Creation:

// Design a class named User with the following properties:

// username (string, required, unique)
// email (string, required, valid email format)
// password (string, required, minimum length of 8 characters)
// confirmPassword (string, required, must match password)
// Implement a method in the User class named validate() that checks if all validation rules are met. This method should return true if all rules are valid, and false otherwise.

// Create instances of the User class with valid and invalid data. Test the validate() method for each instance and display appropriate messages based on the validation result.

class User {
  constructor(username, email, password, confirmPassword) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
  validate() {

    if (!this.username || this.username.trim() === "") {
      console.log("Username is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.email || !emailRegex.test(this.email)) {
      console.log("Invalid or missing email");
      return false;
    }

    if (!this.password || this.password.length < 8) {
      console.log("Password must be at least 8 characters");
      return false;
    }
    if (this.password !== this.confirmPassword) {
      console.log("Passwords not match");
      return false;
    }
    console.log("successful for:", this.username);
    return true;
  }
}

const user1 = new User("hir1709", "hir@.gmail.com", "mypassword", "mypassword");
user1.validate();

const user2 = new User("", "hir@gmail.com", "mypassword", "mypassword");
user2.validate(); 

const user3 = new User("hir1709", "hir#gmail.com", "mypassword", "mypassword");
user3.validate(); 

const user4 = new User("hir1709", "hir@example.com", "short", "short");
user4.validate(); 

const user5 = new User("hir1709", "hir@example.com", "mypassword123", "wrongpass");
user5.validate(); 

