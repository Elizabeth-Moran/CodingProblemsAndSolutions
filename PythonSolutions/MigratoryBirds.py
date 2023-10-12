#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'migratoryBirds' function below.
# Given an array of bird sightings where every element represents a bird type id,
# determine the id of the most frequently sighted type.
# If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#

def migratoryBirds(arr):
    # Iterate over bird array.
    # Store bird id as key, and quantity of bird ids in 'hash map'.
    # Go through hashmap. Return lowest key with highest value
    # O(N) time complexity, O(N) space complexity
    
    bird_ids_quantity = {}
    most_occuring_bird_id = arr[0]
    highest_val = 1
    
    for bird_id in arr:
        if bird_id not in bird_ids_quantity.keys():
            bird_ids_quantity[bird_id] = 1
        else:
            bird_ids_quantity[bird_id] += 1
            
    for key in bird_ids_quantity: 
        val = bird_ids_quantity[key]
        if val == highest_val and key < most_occuring_bird_id:
            most_occuring_bird_id = key 
        elif val > highest_val:
            most_occuring_bird_id = key
            highest_val = val
    
    return most_occuring_bird_id

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = migratoryBirds(arr)

    fptr.write(str(result) + '\n')

    fptr.close()