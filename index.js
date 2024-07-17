//printing hello world to the console using function
function greet() {
    console.log("Hello, World!");
}
greet();

//adding a nad b using functions
function addNumbers(a, b) {
    console.log(a + b);
}

// Call the addNumbers function with different sets of numbers
addNumbers(5, 10); 
// Output: 15
addNumbers(20, 30);
// Output: 50
addNumbers(-1, 1);
// Output: 0

// function with return statements
function multiply(x, y) {
    return x * y;
}
let product = multiply(6, 7);
console.log(product);  
// Output: 42

//comboning functions
function calculateRectangleArea(length, width) {
    return multiply(length, width);
}
let area = calculateRectangleArea(5, 10);
console.log(area);  
// Output: 50

//default parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greetUser("Vamsi"); 
// Output: Hello, Vamsi!
greetUser();        
// Output: Hello, Guest!