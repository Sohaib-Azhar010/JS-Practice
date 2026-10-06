// Lecture 01 - Variable and Data Types
// JS is a dynamically typed language - This means we don't need to declare the type of the variable
// Console Log is used to print a message to console 
console.log('Hello to Js Practice - Variable and Data Types');

//Variable - containers for data values
// Variable are case sensitive (name and Name are different)
// Only letters, digits, $ and _ allowed in variables 
// Variables cannot start with a digit (1Ahmed is not allowed)
// Variables can start with _ ( _Ahmed is allowed)
// Variables can start with $ ($Ahmed is allowed)
// Keywords(reserved words) are not allowed in variables (if, else, for, while, console, alert etc.)
// Spaces are not allowed in varibles, use _ instead (my name is not allowed, my_name is allowed)

//String
name = "Ahmed";

//Number
age = 25;

//Boolean
isStudent = true;

//Float
hight = 5.9;

// null means it has something but it is empty
x = null;

// undefined means it has nothing (we don't know what we have here)
y = undefined;

//Console Log is used to print a message to console 
console.log("Name is: " + name);
console.log("Age is: " + age);
console.log("Is Student: " + isStudent);
console.log("Height is: " + hight);


// we should use let, const and var to declare variables
// var - can be redeclared and updated
// let - can be updated but not redeclared (prefer this)
// const - cannot be updated or redeclared
// In ES6 (ECMAScript 6), let and const are introduced, and var is deprecated.
// We should use let and const instead of var.
// var has global scope
// let and const have block scope
// Block scope means it can only be accessed within the block where it is declared
// Block is defined by curly braces {}
// { this is block }
// } this is also block
// { this is also a block }
// this is also a block { }
// 

let firstName = "Ahmed";
const lastName = "Khan";
var age = 25;

console.log("First Name is: " + firstName);
console.log("Last Name is: " + lastName);
console.log("Age is: " + age);

// we can not redeclare let and const but we can redeclare var
let xs = 10;
//let x = 20; // not allowed
var ys = 10;
var ys = 20; // allowed

console.log("xs is: " + xs);
console.log("ys is: " + ys);



let a = 10;
a = 20;
// we cannot desclare a variable with same name and also cannot update it  like this "let a = 20;"

var b = 10;
var b = 20;

console.log("(let)a is: " + a);
console.log("(var)b is: " + b);


// const
// const is used for the values that are constant and should not be changed
// const can not be updated or redeclared
// const cannot be declared without initializing i.e. const PI; is not allowed  
// if we declare a const variable without initializing it, it will throw an error
const PI = 3.14;
//PI = 3.14159; // not allowed
console.log("PI is: " + PI);


// typeof operator - return the type of the variable
console.log("Type of name is: " + typeof name);
console.log("Type of age is: " + typeof age);
console.log("Type of isStudent is: " + typeof isStudent);
console.log("Type of hight is: " + typeof hight);
console.log("Type of x is: " + typeof x);
console.log("Type of y is: " + typeof y);
console.log("Type of PI is: " + typeof PI);

// Block examples
{
    let blockLet = 10;
    console.log("inside blockLet is: " + blockLet);
}
// console.log("outside blockLet is: " + blockLet); // not allowed


// Data Types in JS
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Object
// 7. Array
// 8. Function
// 9. Symbol
// 10. BigInt

// Primitive Data Types
// There are 7 primitive data types in JS
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt


// Non - primitive Data Types
// Object - collection of key value pairs
// Array - collection of values (ordered)
// Date - collection of values
// RegExp - collection of values
// Error - collection of values
// Map - collection of values
// Set - collection of values

// Object Example  - we can use let and const for object
let person = {
    firstName: "Ahmed",
    lastName: "Khan",
    age: 25,
    isStudent: true,
    hight: 5.9,
    x: null,
    y: undefined,
    PI: 3.14
};

console.log("Person is: " + person);
console.log("Type of person is: " + typeof person);
console.log("First Name is: " + person.firstName);
console.log("Last Name is: " + person.lastName);
console.log("Age is: " + person.age);
console.log("Is Student is: " + person.isStudent);
console.log("Height is: " + person.hight);
console.log("x is: " + person.x);
console.log("y is: " + person.y);
console.log("PI is: " + person.PI);
console.log("Type of PI is: " + typeof person.PI);
console.log("First Name is: " + person["firstName"]);
console.log("Last Name is: " + person["lastName"]);
console.log("Age is: " + person["age"]);
console.log("Is Student is: " + person["isStudent"]);
console.log("Height is: " + person["hight"]);
console.log("x is: " + person["x"]);
console.log("y is: " + person["y"]);
console.log("PI is: " + person["PI"]);
console.log("Type of PI is: " + typeof person["PI"]);
// upadting the value of name in object person
// you can change the key value of an object even if it const
// but you can not update a const value directly
person["name"] = "Ali Khan";
console.log("Name is: " + person.name);




