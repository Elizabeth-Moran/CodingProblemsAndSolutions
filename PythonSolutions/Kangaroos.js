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
 * Complete the 'kangaroo' function below.
 * You are choreographing a circus show with various animals. For one act, you are given two kangaroos   
 * on a number line ready to jump in the positive direction (i.e, toward positive infinity).
 * The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
 * The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
 * You have to figure out a way to get both kangaroos at the same location at the same time as part of
 * the show. If it is possible, return YES, otherwise return NO.
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    // Sounds like an algebra problem...
    // y = v1x + x1
    // y = v2x + x2
    // calculate x-intercept (number of jumps) using x = (x2 - x1)/(v1-v2)
    // if jumps is < 0, or is not a whole number, return NO
    // O(1) time complexity, O(1) space complexity
    
    const jumps = (x2-x1)/(v1-v2);
    if(jumps < 0 || jumps%1 !== 0) {return "NO";}
    
    return "YES";
    
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[0], 10);

    const v1 = parseInt(firstMultipleInput[1], 10);

    const x2 = parseInt(firstMultipleInput[2], 10);

    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}