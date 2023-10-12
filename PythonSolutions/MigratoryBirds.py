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
    
    birdIdsQuantity = {}
    mostOccuringBirdId = arr[0]
    highestVal = 1
    
    for birdId in arr:
        if birdId not in birdIdsQuantity.keys():
            birdIdsQuantity[birdId] = 1
        else:
            birdIdsQuantity[birdId] += 1
            
    for key in birdIdsQuantity: 
        val = birdIdsQuantity[key]
        if val == highestVal and key < mostOccuringBirdId:
            mostOccuringBirdId = key 
        elif val > highestVal:
            mostOccuringBirdId = key
            highestVal = val
    
    return mostOccuringBirdId

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = migratoryBirds(arr)

    fptr.write(str(result) + '\n')

    fptr.close()