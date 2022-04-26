import sys

from numpy import integer
 

 # Program to check if a number is prime or not

num = int(sys.argv[1])

# To take input from the user
#num = int(input("Enter a number: "))

# define a flag variable
flag = True
if num ==1:
    flag=False

# prime numbers are greater than 1
if num > 1:
    # check for factors
    for i in range(2, num):
        if (num % i) == 0:
            # if factor is found, set flag to True
            flag = False
            # break out of loop
            break

# check if flag is True
if flag:
    print("1")
else:
    print("0")