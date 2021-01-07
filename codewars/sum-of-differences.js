// PROMPT
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9
// Descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0 


require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('Type in an array of numbers separated by space: ', input => {
    const arr = input;
    console.log(sumOfDifferences(arr));
    process.exit();
})

// SOLUTION 1
function sumOfDifferences(arr) {
  if (arr.length <= 1) return 0
	const sorted = arr.sort( (a, b) => b - a)
    let result = []
    for (let i = 0, first, second; i < sorted.length - 1; i++) {
        first = arr[i]
        second = arr[i+1]
        result.push(first - second)
    }
  return result.reduce((a, b) => a + b)
}

console.log(sumOfDifferences([2, 1, 10])) 

// SOLUTION 2
function sumOfDifferences(arr) {
  let sum = 0;
  arr.sort( (a,b) => b-a );
  let index = 0;
  while (index < arr.length - 1) {
    let sumOfPairs = arr[index] - arr[index + 1];
    sum += sumOfPairs;
    index++;
  }
   return sum;
}

// SOLUTION 3
function sumOfDifferences(arr) {
  
 return arr.sort((a,b) => b-a).shift() - arr.pop() || 0 
  
}