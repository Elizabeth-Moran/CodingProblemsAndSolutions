# Given the participants' score sheet for your University Sports Day, you are required to find the runner-up score. 
# You are given n scores. Store them in a list and find the score of the runner-up.

if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    score_arr = list(arr)
    
    # Store runner_up_val and highest_val score.
    # Go through every score, updating the highest and runner up score
    # The runner-up score will either be the previous highest_val, or 
    # the next highest value below it.
    # O(n) time complexity, O(1) space complexity
 
    runner_up_val = -2147483648
    highest_val = score_arr[0]
    
    for num in score_arr:
        if num > highest_val:
            runner_up_val = highest_val
            highest_val = num
        elif num < highest_val and num > runner_up_val:
            runner_up_val = num
            
    print(runner_up_val)