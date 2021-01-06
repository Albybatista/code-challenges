// Create a function that converts US dollars (USD) to Chinese Yuan (CNY). The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// EXAMPLE INPUT && OUTPUT
//  usdcny(15) // => '101.25 Chinese Yuan'
//  usdcny(465) // => '3138.75 Chinese Yuan'

// NOTE: The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be rounded to the nearest hundredth (e.g. 21.00 NOT 21.0 or 21)

require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

process.stdin.setEncoding('utf8')
rl.question('Enter the USD amount you wish to convert: ', input => {
    const usd = input;
    console.log(usdcny(usd));
    process.exit();
})


function usdcny(usd) {
    let conversionRate = 6.75;
    let product = (usd * conversionRate).toFixed(2);
        return (`${product} Chinese Yuan`);
}