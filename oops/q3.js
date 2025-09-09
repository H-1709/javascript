// 3. Shopping Cart:

// Design a class named Cart with the following properties:

// items (array of objects containing product details and quantity)
// totalQuantity (number, calculated automatically based on items)
// totalPrice (number, calculated automatically based on items and price)
// Implement methods in the Cart class for:

// Adding product to cart (check for stock availability)
// Removing product from cart
// Updating product quantity
// Calculating total quantity and price
// Create instances of the Cart class and test the methods with different scenarios. Verify if the total quantity and price are calculated correctly based on the cart items.


// Product structure example:
// { id: 1, name: "Laptop", price: 50000, stock: 5 }

class Cart {
  constructor() {
    this.items = []; // Each item = { product, quantity }
  }

  // ✅ Add product to cart
  addProduct(product, quantity) {
    if (quantity > product.stock) {
      console.log(`❌ Not enough stock for ${product.name}`);
      return;
    }

    let existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      // Update quantity if already in cart
      if (existingItem.quantity + quantity <= product.stock) {
        existingItem.quantity += quantity;
      } else {
        console.log(`❌ Cannot add more than stock for ${product.name}`);
      }
    } else {
      this.items.push({ product, quantity });
    }
    this.calculateTotals();
  }

  // ✅ Remove product completely
  removeProduct(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.calculateTotals();
  }

  // ✅ Update product quantity
  updateQuantity(productId, newQuantity) {
    let item = this.items.find(item => item.product.id === productId);
    if (item) {
      if (newQuantity <= item.product.stock && newQuantity > 0) {
        item.quantity = newQuantity;
      } else {
        console.log(`❌ Invalid quantity for ${item.product.name}`);
      }
    }
    this.calculateTotals();
  }

  // ✅ Calculate totals
  calculateTotals() {
    this.totalQuantity = this.items.reduce((sum, item) => sum + item.quantity, 0);
    this.totalPrice = this.items.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
  }

  // ✅ Display cart contents
  showCart() {
    console.log("🛒 Cart Contents:");
    this.items.forEach(item =>
      console.log(`${item.product.name} - ${item.quantity} x ₹${item.product.price}`)
    );
    console.log(`👉 Total Quantity: ${this.totalQuantity}, Total Price: ₹${this.totalPrice}`);
  }
}

// ----------------- Testing -----------------
const product1 = { id: 1, name: "Laptop", price: 50000, stock: 5 };
const product2 = { id: 2, name: "Phone", price: 20000, stock: 10 };
const product3 = { id: 3, name: "Headphones", price: 2000, stock: 15 };

let myCart = new Cart();

myCart.addProduct(product1, 2);  // Add 2 Laptops
myCart.addProduct(product2, 3);  // Add 3 Phones
myCart.addProduct(product3, 1);  // Add 1 Headphone
myCart.showCart();

myCart.updateQuantity(2, 5); // Update Phone quantity to 5
myCart.showCart();

myCart.removeProduct(1); // Remove Laptop
myCart.showCart();
