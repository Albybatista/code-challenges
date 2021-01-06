//PROMPT
//Write a function that takes in an array of integers and returns a sorted version of that array. 
//Use the Bubble Sort algorithm to sort the array.

//SAMPLE
//input:	[8, 5, 2, 9, 5, 6, 3]
//output:	sorted [2, 3, 5, 5, 6, 8, 9]

// QUICK SOLUTION
//function bubbleSort(array) {
//  Write your code here.
//  return array.sort( (a,b) => a-b)
//}

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

process.stdin.setEncoding('utf8')
rl.question('', input => {
  const array = input.split(" ").map(Number)
  console.log(bubbleSort(array));
  process.exit();
});

//SOLUTION 1
function bubbleSort(array) {
  // Write your code here.
  // let left = 0;
  // let right = 0;
  // iterate through the array
  for(let i = 0; i < array.length - 1; i++) {
    // compare first element to the next element
    for (let j = i + 1; j < array.length; j++) {
  		// if the right element is less than the left, move it to the left
   		if (array[i] > array[j]) {
      	// swap(i, j, array);
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp;
      }
    }
  	// if the left element is less than the right, move to the next iteration
    }
    // return the sorted array
  return array;
  }

//SOLUTION 2
//input:		[8, 5, 2, 9, 5, 6, 3]
//iteration: 	[8, 5, ...] --> [5, 8, ...]
const swap = (left, right, array) => {
	let temp = array[left]
	array[left] = array[right]
	array[right] = temp;
  console.log(array);
}


function bubbleSortAnother(array) {
	let isSorted = true;
  while (isSorted) {
    isSorted = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array)
        isSorted = true;
      }
		}
  }
  return array;
}
