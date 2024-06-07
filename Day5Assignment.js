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
