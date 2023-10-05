'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Lily likes to play games with integers. She has created a new game where she determines the difference between
 * a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.
 * She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.
 * Given a range of numbered days, [i...j] and a number k, determine the number of days in the range that are beautiful. 
 * Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. 
 * Return the number of beautiful days in the range.
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
    // Initialize beautiful day quantity to zero (beautifulDays)
    // For each num in the range i to j inclusive,
    // convert each number to a string, reverse the string, convert back to a number
    // Take the (absolute of the number minus its reverse number) divided by k (beautifulVal)
    // If beautifulVal is a whole number, increment beautifulDays
    // O(N) time complexity, O(1) space complexity
    
    let beautifulDays = 0;
    
    for(let num = i; num <= j; num++){
        const numString = num.toString();
        const reverseNumString = numString.split("").reverse().join("");
        const reverseNum = Number(reverseNumString);
        const beautifulVal = Math.abs(num - reverseNum)/k;
        if(beautifulVal % 1 === 0) {beautifulDays++;}
    }
    
    return beautifulDays;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const i = parseInt(firstMultipleInput[0], 10);

    const j = parseInt(firstMultipleInput[1], 10);

    const k = parseInt(firstMultipleInput[2], 10);

    const result = beautifulDays(i, j, k);

    ws.write(result + '\n');

    ws.end();
}