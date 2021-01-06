// Write a function that returns an array of integers from n to 1 where n > 0

// EXAMPLE INPUT:
// n = 5

// OUTPUT: 
// n = 5
// [5,4,3,2,1]

require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

process.stdin.setEncoding('utf8')
rl.question('Enter the number you wish to reverse sequence: ', input => {
    const num = input;
    console.log(reverseSeq(num));
    process.exit();
})


//SOLUTION
const reverseSeq = n => {
  let seq = [];
  for(let i = n; i > 0; i--) {
    seq.push(i);
  }
   return seq;
};