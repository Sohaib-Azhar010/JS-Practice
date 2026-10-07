// Operators and Conditional Statements


// Operators - to perform operations
// Examples are + - * / %
// ** for exponentiation (power) (like x^y)
// ++ for increment (increases value by 1) - Unary Operator - ++a (Pre Increment), a++ (Post Increment)
// -- for decrement (decreases value by 1) - Unary Operator - --a (Pre Decrement), a-- (Post Decrement)

// a + b (here a and b are operands while + is the operator)

let a = 5;
let b = 10;

console.log("a + b = " + (a + b)); // 15
console.log("a - b = " + (a - b)); // -5
console.log("a * b = " + (a * b)); // 50
console.log("a / b = " + (a / b)); // 0.5
console.log("a % b = " + (a % b)); // 5
console.log("a ** b = " + (a ** b)); // 9765625
console.log("++a = " + (++a)); // 6
console.log("--a = " + (--a)); // 4

// Post increment / Decrement
// In post increment/decrement the value is used first and then incremented/decremented
console.log("a++ = ", a++); // 5
console.log("a++ = ", a); // 6

// Assignment Operator
// = (Assigns the value of the right operand to the left operand)
console.log("a = ", a); // 6
// += (Adds the value of the right operand to the left operand and assigns the result to the left operand)
console.log("a += ", a += 5); // 11
// -= (Subtracts the value of the right operand from the left operand and assigns the result to the left operand)
console.log("a -= ", a -= 5); // 6
// *= (Multiplies the value of the right operand with the left operand and assigns the result to the left operand)
console.log("a *= ", a *= 5); // 30
// /= (Divides the value of the left operand by the right operand and assigns the result to the left operand)
console.log("a /= ", a /= 5); // 6
// %= (Divides the value of the left operand by the right operand and assigns the remainder to the left operand)
console.log("a %= ", a %= 5); // 1
// **= (Raises the value of the left operand to the power of the right operand and assigns the result to the left operand)


// Comparison Operators
// Equal to == , Equal to and type(same in nature) === , Not equal != , Not equal and type !==
// > greater than , < less than , >= greater than or equal to , <= less than or equal to

let c = 5;
let d = 2;
let e = "5";

console.log("c == d is " + (c == d)); // false
console.log("c === d is " + (c === d)); // false
console.log("c != d is " + (c != d)); // true
console.log("c !== d is " + (c !== d)); // true
console.log("c > d is " + (c > d)); // true
console.log("c < d is " + (c < d)); // false
console.log("c >= d is " + (c >= d)); // true
console.log("c <= d is " + (c <= d)); // false

console.log("c == e is " + (c == e)); // true
console.log("c === e is " + (c === e)); // false


// Logical Operators
// && (AND) , || (OR) , !(NOT)

let x = 6;
let y = 5;

let condition1 = x > y;
let condition2 = x === 6;

console.log("condition1 AND condition2 is " + (condition1 && condition2)); // true
console.log("condition1 OR condition2 is " + (condition1 || condition2)); // true
console.log("condition1 NOT condition2 is " + (!condition1)); // false

// Conditional Statements
// If , If-Else , If-Else-If-Else , Switch

let age = 18;
let hasID = true;
let hasLicense = false;


if (age >= 18 && hasID && !hasLicense) {
    console.log("You are eligible for voting but you cannot drive");
}
else if (age >= 18 && !hasID && hasLicense) {
    console.log("You can drive but you are not eligible for voting");
}
else if (age >= 18 && hasID && hasLicense) {
    console.log("You are eligible for voting and you can drive");
}
else {
    console.log("You are less than 18, You are not eligible for voting and you can't drive");
}

// Ternary Operator - only operator in js which is of 3 operands
// Syntax - condition ? expression1 : expression2

let canDrive = (age >= 18 && hasLicense) ? "Yes" : "No";
console.log("Can drive: " + canDrive);


// Switch
const fruit = "Mango";

switch (fruit) {
    case "Mango":
        console.log("Fruit is Mango");
        break;
    case "Apple":
        console.log("Fruit is Apple");
        break;
    case "Orange":
        console.log("Fruit is Orange");
        break;
    default:
        console.log("Fruit is not Mango, Apple, or Orange");
}
