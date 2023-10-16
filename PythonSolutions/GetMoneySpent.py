#!/bin/python3

import os
import sys

#
# Complete the getMoneySpent function below.
# A person wants to determine the most expensive computer keyboard and USB drive that can be purchased 
# with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy
# them. If it is not possible to buy both items, return -1.
#
def getMoneySpent(keyboards, drives, b):
    # Store value max_expense.
    # Iterate over keyboards and drives.
    # Add value of keyboard and drive
    # If it's not too expensive, and higher price than max_expense, update max_expense
    # O(KD) time complexity, O(1) space complexity
    
    max_expense = -1
    
    for keyboard in keyboards:
        for drive in drives:
            key_drive = keyboard + drive
            if key_drive > max_expense and key_drive <= b:
                max_expense = key_drive
    
    return max_expense
            

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    bnm = input().split()

    b = int(bnm[0])

    n = int(bnm[1])

    m = int(bnm[2])

    keyboards = list(map(int, input().rstrip().split()))

    drives = list(map(int, input().rstrip().split()))

    #
    # The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
    #

    moneySpent = getMoneySpent(keyboards, drives, b)

    fptr.write(str(moneySpent) + '\n')

    fptr.close()