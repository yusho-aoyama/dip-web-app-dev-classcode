// Challenge 4 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Find the index of the number 5 in the array
let indexOfNumber = (array, number) => {
  // If the number 5 is found in the array
  if (array.includes(number)) {
    // Console log each number in the array up to and including 5
    array.forEach((element, index) => {
      console.log(index + ":" + element);
    });
  } else // If the number 5 is found in the array
  {
    // Output a message if the number 5 is not in the array
    console.log("Number not in array");
  }
};

console.log(indexOfNumber(numbers, 5));

let doubleNumbers = (array) => {
  return array.map((element) => {
    return element * 2;
  });
};
console.log(doubleNumbers(numbers));

console.log(indexOfNumber(doubleNumbers(numbers), 5));

document.getElementById("OutputField").innerHTML = doubleNumbers(numbers);
