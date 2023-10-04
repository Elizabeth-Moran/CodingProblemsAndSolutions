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
 * A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, 
 * the professor decides to cancel class if fewer than some number of students are present when class starts. 
 * Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).
 * Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.
 * Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.
 *
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING either "YES" or "NO".
 * The function accepts following parameters:
 *  1. INTEGER k: the threshold number of students
 *  2. INTEGER_ARRAY a: the arrival times of the students
 */

function angryProfessor(k, a) {
    // Algorithm:
    // Initialize variable "onTimeStudentQuantity" to 0
    // Go through array. If a[i] <= 0, increase onTimeStudentQuantity by 1
    // If onTimeStudentQuantity > k, return "NO"
    // If make it through loop without returning "NO", then return "YES" 
	// O(N) time, O(1) space
    
    let onTimeStudentQuantity = 0;
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] <= 0) {onTimeStudentQuantity++;}
        if(onTimeStudentQuantity >= k){
            return "NO";
        }
    }
    
    return "YES";

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const k = parseInt(firstMultipleInput[1], 10);

        const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

        const result = angryProfessor(k, a);

        ws.write(result + '\n');
    }

    ws.end();
}
