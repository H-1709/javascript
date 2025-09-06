
// 2. Product Management:

// Design a class named Product with the following properties:

// id (unique identifier)
// name (string, required)
// description (string)
// price (number, required, positive value)
// stock (number, default 0)
// Implement methods in the Product class for:

// Adding product to inventory (check if stock is updated correctly)
// Removing product from inventory (check if stock is updated correctly)
// Validating product data (check for required fields and valid values)
// Create instances of the Product class with valid and invalid data. Test the methods and display appropriate messages based on the validation and operation results.

class Product {
  constructor(id, name, description, price, stock = 0) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
  }

  validate() {
    if (!this.id) {
      console.log(" Product must have a unique id");
      return false;
    }
    if (!this.name || this.name.trim() === "") {
      console.log(" Product must have a name");
      return false;
    }
    if (typeof this.price !== "number" || this.price <= 0) {
      console.log(" Product price must be a positive number");
      return false;
    }
    if (typeof this.stock !== "number" || this.stock < 0) {
      console.log(" Stock must be zero or a positive number");
      return false;
    }
    console.log(" Product validation successful:", this.name);
    return true;
  }
  addStock(quantity) {
    if (quantity <= 0) {
      console.log(" Quantity to add must be positive");
      return;
    }
    this.stock += quantity;
    console.log(` Added ${quantity} units. Current stock: ${this.stock}`);
  }

  removeStock(quantity) {
    if (quantity <= 0) {
      console.log(" Quantity to remove must be positive");
      return;
    }
    if (this.stock < quantity) {
      console.log(" Not enough stock available");
      return;
    }
    this.stock -= quantity;
    console.log(`Removed ${quantity} units. Current stock: ${this.stock}`);
  }
}
const p1 = new Product(101, "Laptop", "High-performance laptop", 55000, 10);
p1.validate();   
p1.addStock(5);  
p1.removeStock(8); 
p1.removeStock(10);


const p2 = new Product(102, "", "Some gadget", 2000, 5);
p2.validate();  


const p3 = new Product(103, "Phone", "Smartphone", -15000, 5);
p3.validate();  


const p4 = new Product(104, "Tablet", "Android tablet", 12000, -3);
p4.validate();  


