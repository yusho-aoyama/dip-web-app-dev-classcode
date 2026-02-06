// Challenge 6 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// Define the arrow function doubleNumbers
let doubledNumbers = (arr) => arr.map((number) => number * 2);
// Call the function with the numbers array
let result = doubledNumbers(numbers);

// Console log the new array
console.log(result);

// --- Additional practice ---

// - Practice0: Difine the function called tripledNumbers
let tripledNumbers = (arr) => arr.map((number) => number * 3);

// Call the function
let result2 = tripledNumbers(numbers);

// Output
console.log(result2);

// - Practice1: Add 3 to each number
let addedThree = (arr) => arr.map((number) => number + 3);

// Call function with the numbers array
let result3 = addedThree(numbers);

// Output
console.log(result3);

// - Practice2: Convert numbers to string
let convertNumToStr = (arr) => arr.map((number) => String(number));

let result4 = convertNumToStr(numbers);

console.log(result4);

// - Practice3: Square each number
let squaredNumbers = (arr) => arr.map((number) => number * number);

let result5 = squaredNumbers(numbers);

console.log(result5);

// -Practice4: Get the length of each word
let words = ["apple", "banana", "orange", "lemon", "pineapple"];

let getLengthOfWords = (arr) => arr.map((word) => word.length);

let result6 = getLengthOfWords(words);

console.log(result6);

// Practice5: Add "!" to each string
let addExclamation = (arr) => arr.map((word) => word + "!");

let result7 = addExclamation(words);

console.log(result7);
