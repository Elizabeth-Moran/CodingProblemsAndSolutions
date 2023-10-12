#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'bonAppetit' function below.
# Two friends Anna and Brian, are deciding how to split the bill at a dinner.
# Each will only pay for the items they consume. 
# Brian gets the check and calculates Anna's portion. 
# You must determine if his calculation is correct.
# For example, assume the bill has the following prices: bill = [2,4,6]. 
# Anna declines to eat item k = bill[2] which costs 6. 
# If Brian calculates the bill correctly, Anna will pay (2+4)/2 = 3.
# If he includes the cost of bill[2], he will calculate (2+4+6)/2 = 6.
# In the second case, he should refund 3 to Anna.
#
# The function accepts following parameters:
#  1. INTEGER_ARRAY bill
#  2. INTEGER k
#  3. INTEGER b
#

def bonAppetit(bill, k, b):
    # Go through items in bill. 
    # Calculate total sum of bill. Subtract bill[k] from that cost, and divide by two. (anna_bill)
    # If anna_bill == b, then return "Bon Appetit"
    # else, return b - anna_bill
    # O(N) time complexity, O(1) space complexity
    
    bill_total = 0
    
    for item in bill:
        bill_total += item
    
    anna_bill = (bill_total - bill[k])/2
    
    if b == anna_bill:
        print("Bon Appetit")
    else:
        print(int(b - anna_bill))
    

if __name__ == '__main__':
    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    k = int(first_multiple_input[1])

    bill = list(map(int, input().rstrip().split()))

    b = int(input().strip())

    bonAppetit(bill, k, b)