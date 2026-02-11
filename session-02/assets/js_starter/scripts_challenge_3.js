// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];
let numbers2 = [10, 20, 30];

// Check if the array includes the number 5
let checkTheNumbers = (arr, number) => {
  let result = [];
  // If true, filter out numbers less than 5
  if (arr.includes(number)) {
    arr.filter((num) => {
      if (num !== number) {
        // Then square each number in the resulting array
        result.push(num ** 2);
      }
    });
    return result;
  } else {
    console.log("The number 5 is not in the array.");
  }
};

console.log(checkTheNumbers(numbers, 5));
console.log(checkTheNumbers(numbers2, 5));

// Output a message if the number 5 is not in the array
