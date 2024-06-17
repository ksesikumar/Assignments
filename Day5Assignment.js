// Parent class B
class B {
    sayHello() {
        console.log("hello");
    }
}

// Child class A that extends B
class A extends B {
    sayBye() {
        console.log("Bye from A");
        this.sayHello(); // Calling the inherited method from B
    }
}

// Example usage:
const a = new A();
a.sayBye(); // Output: "Bye from A" followed by "hello"

// You can also call the inherited method directly
a.sayHello(); // Output: "hello"



// this is inherit product cls to electronic cls

// procduct class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`${this.name}: ₹${this.price}`);
    }
}

// Subclass for electronic products
class Electronic extends Product {
    constructor(name, price, warranty) {
        super(name, price);//calling product class properties
        this.warranty = warranty; // warranty in years
    }

    display() {
        super.display();//calling product cls display() method
        console.log(`Warranty: ${this.warranty} years`);
    }
}


// Create some electronic products
let laptop = new Electronic('MacBook', 350000, 1);
let smartphone = new Electronic('I Phone', 150000, 1);

// Display the products
laptop.display();
smartphone.display();