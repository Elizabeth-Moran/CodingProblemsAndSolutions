/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmedString = s.trim();
    let length = 0;

    for (let i = trimmedString.length - 1; i >= 0; i--) {
       if (trimmedString[i] === " ") { break; }
       length += 1;
    }

    return length;
};
