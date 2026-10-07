// Loops and Strings
// For, While, Do-While, break, continue, Nested Loops

// --- Key Difference Between For and While Loops ---
// 1. For Loop: Best used when you KNOW the exact number of times you want to iterate (e.g., looping through an array of fixed size).
// 2. While Loop: Best used when you DO NOT know the exact number of iterations beforehand, and the loop must run until a specific condition becomes false (e.g., waiting for user input).

// For Loop - first initialize then condition then increment/decrement
// it contains template literals and normal concatenation
for (let i = 0; i < 5; i++) {
    console.log(`Executed ${i} times `, `At ${i} iteration answer is = ` + i);
}

// sum of 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
    console.log(`Value of Sum = ${sum}  at iteration ${i} `);
}
console.log(`Sum of 1 to 5 is = ${sum}`);


//While Loop - first check then execute

let j = 0;
while (j < 5) {
    console.log(`Executed ${j} times `, `At ${j} iteration answer is = ` + j);
    j++;
}

let sum1 = 0;
let k = 1;
while (k <= 5) {
    sum1 = sum1 + k;
    console.log(`Value of Sum = ${sum1}  at iteration ${k} `);
    k++;
}
console.log(`Sum of 1 to 5 is = ${sum1}`);



// Do While Loop - execute first then check condition

let x = 0;
do {
    console.log(`Executed ${x} times `, `At ${x} iteration answer is = ` + x);
    x++;
} while (x < 5);

let sum2 = 0;
let y = 1;
do {
    sum2 = sum2 + y;
    console.log(`Value of Sum = ${sum2}  at iteration ${y} `);
    y++;
} while (y <= 5);
console.log(`Sum of 1 to 5 is = ${sum2}`);


// for of loop - used to iterate over the values of an iterable object such as an array, string, or map

let str = "Naveed";
let size = 0;

for (let character of str) {
    console.log(`Characters of String ${str} are: ${character} `);
    size++;
}

console.log(`Size of String ${str} is = ${size} `);

// for in loop - used to iterate over the properties of an object

let obj = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let keyOfObject in obj) {
    console.log(`${keyOfObject}: ${obj[keyOfObject]}`);
}

// Strings
// String methods and inbuilt properties

// str length
let str2 = "Naveed";
console.log(`Length of string ${str2} is = ${str2.length}`);

// str indices
console.log(`Character at index 4 is = ${str2[4]}`);
console.log(`Character at index 0 is = ${str2[0]}`);
console.log(`Character at index 5 is = ${str2[5]}`);

// escape character 
console.log("Naveed \nAhmed");
// there are 3 escape characters 
// \n - new line
// \t - tab
// \b - backspace
// \r - carriage return
// \f - form feed
// \\ - backslash
// \' - single quote
// \" - double quote

// String Methods/Functions
let str3 = "   1Hello World2 2  ";


// Uppercase, Lowercase and Trim methods
console.log(`String ${str3} in upper case is = ${str3.toUpperCase()}`);
console.log(`String ${str3} in lower case is = ${str3.toLowerCase()}`);
console.log(`String ${str3} after trimming is = ${str3.trim()}`);
console.log(`String ${str3} after trimming start is = ${str3.trimStart()}`);
console.log(`String ${str3} after trimming end is = ${str3.trimEnd()}`);

// slice , concat , replace , chatAt , repeat
let str4 = "1Naveed1";
console.log(`String ${str4} after slicing is = ${str4.slice(1, 5)}`); // passed strating and ending index (non inclusive)
console.log(`String ${str4} after concat is = ${str4.concat("1")}`); // passed the string to be concatenated
console.log(`String ${str4} after replace is = ${str4.replace("1", "2")}`); // replace first occurance - because we can't directly mutate the original string by just passing values at any index
console.log(`String ${str4} after chatAt is = ${str4.charAt(3)}`); // passed the index
console.log(`String ${str4} after repeat is = ${str4.repeat(2)}`); // passed the number of times to repeat

let str5 = "banana";
console.log(`String ${str5} after replace is = ${str5.replace("a", "b")}`); // replace first occurance
console.log(`String ${str5} after replaceAll is = ${str5.replaceAll("a", "b")}`); // replace all occurances