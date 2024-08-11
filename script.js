// Initialize the array
let numbers = [5, 3, 8, 1, 2];

console.log("Initial array:", numbers);

// Function to add a number to the array
function addNumber(array, number) {
    array.push(number);
    console.log(`After adding ${number}:`, array);
}

// Function to remove the first occurrence of a number from the array
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
        console.log(`After removing ${number}:`, array);
    } else {
        console.log(`Number ${number} not found in array.`);
    }
}

// Function to sort the array in ascending order
function sortNumbers(array) {
    const sortedArray = array.slice().sort((a, b) => a - b);
    console.log("Sorted array:", sortedArray);
    return sortedArray;
}

// Function to calculate the sum of numbers in the array
function calculateSum(array) {
    const sum = array.reduce((total, num) => total + num, 0);
    console.log("Sum of numbers:", sum);
    return sum;
}

// Function to calculate the average of numbers in the array
function calculateAverage(array) {
    const sum = calculateSum(array);
    const average = sum / array.length;
    console.log("Average of numbers:", average.toFixed(2));
    return average;
}

// Demonstrating the functions

// Adding a number
addNumber(numbers, 4);

// Removing a number
removeNumber(numbers, 3);

// Sorting the array
const sortedNumbers = sortNumbers(numbers);

// Calculating the sum of numbers
const sum = calculateSum(numbers);

// Calculating the average of numbers
const average = calculateAverage(numbers);
