/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // If we find '(' '{' or '[', then add it to the stack. 
    // Otherwise, if we find ')', or '}', or ']' then pop from the stack. 
    // If what's popped from the stack is the matching bracket, continue. Else, return false.
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };

    for (const char of s) {
        if (char in pairs) {
            if (stack.pop() !== pairs[char]) return false;
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
