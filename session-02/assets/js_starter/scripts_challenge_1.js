// Challenge 1 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// Use the pop() method to remove the last element from the array
numbers.pop();
console.log(numbers);

// Use the unshift() method to add the last element to the beginning of the array
numbers.unshift(0);
console.log(numbers);

// Use the slice() method to exclude the first 3 elements and return a new array
let a = numbers.slice(0, 3);
console.log(a);

// Set the value of the outputfield inner html to the new array
document.getElementById("OutputField").innerHTML = a;
