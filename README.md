Test-Driven Development

Describe: beepBoop()

Test: "It should return an array with a 0 if the number 0 is inputted"
Expect:(beepBoop(0);
Expected Output: [0]

Test: "It should return an array with [0, 1] if the number 1 is inputted" Code:beepBoop(1);
Expected Output: [0, 1]

Test: "It should return an array with [0, 1, 2, 3, 4] if the number 4 is inputted"
Code:beepBoop(4);
Expected Output: [0, 1, 2, 3, 4]

Test: "It should return a string output if the number 4 is inputted"
Code:beepBoop(4);
Expected Output: 0,1,2,3,4

Test: "Any string with 3s in it will be replaced by 'Won't you be my neighbor?'"
Code:beepBoop(4);
Expected Output: 0,1,2,3,4

<!-- Template


Describe:

Test:
Code:
Expected Output:


Business logic side:

1) The inputted number will immediately become an array
2) The array created will have '0' to 'inputtedNum'
3) The array elements will list one-by-one
4) #s containing 1 will be replaced with Beep (LEAST IMPORTANT)
5) #s containing 2 will be replaced with Boop
6) #s containing 3 will be replaced with "Won't you be my neighbor?" (MOST IMPORTANT)

**can use regex


-->
