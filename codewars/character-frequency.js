// PROMPT
// Your function will be called charFreq and you will get passed a string. You will then return an object with the characters as the keys the frequency of that character as the value.

// SAMPLE OUTPUT
// charFreq("I like cats") 
// Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}

require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})
process.stdin.setEncoding('utf8');
rl.question('Enter string:  ', input => {
  console.log(charFreq(input));
  process.exit();
})


// SOLUTION
function charFreq(str) {
  let object = {};
  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);
    if (object[character]) {
      object[character]++;
    } else {
      object[character] = 1;
    }
  }
  return object;
}