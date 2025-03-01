/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // For each number, find out if (target - number) exists in the hashmap where number == key and index == value.
    const numIndicies = {};
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(complement in numIndicies) {
            result.push(numIndicies[complement], i);
        } else {
            numIndicies[nums[i]] = i;
        }
    }

    return result;
};
