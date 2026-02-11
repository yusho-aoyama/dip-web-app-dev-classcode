// Challenge 2 Starter
// Initialise the arrays
let array1 = [1, 2, 3, 2];
let array2 = [4, 5, 6, 4];

// Use the spread operator to merge the two arrays
let mergedArray = [...array1, ...array2];
console.log(mergedArray);

// Use the Set object to remove duplicates
const removedDuplicates = new Set(mergedArray);
console.log(removedDuplicates);
console.log(removedDuplicates.has(1));
console.log(removedDuplicates.has(7));

// Use array destructuring to assign the first three elements to variables
const [first, second, third] = removedDuplicates;
console.log(first);
console.log(second);
console.log(third);

const mixed = new Set();
mixed.add("Hello");
mixed.add(1);
mixed.add(true);
mixed.add({ name: "Yusho" });

console.log(mixed);

// Set the value of the output filed to be the second element of the unique array
document.getElementById("OutputField").innerHTML = second;
