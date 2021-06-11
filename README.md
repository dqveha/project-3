Test-Driven Development

Describe: beepBoop()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code:beepBoop(0);
Expected Output: [0]

Test: "It should return an array with [0, 1] if the number 1 is inputted" Code:beepBoop(1);
Expected Output: [0, 1]

Test: "It should return an array with [0, 1, 2, 3, 4] if the number 4 is inputted"
Code:beepBoop(4);
Expected Output: [0, 1, 2, 3, 4]

Test: "It should return a string output if the number 4 is inputted"
Code:beepBoop(4);
Expected Output: "0,1,2,3,4"

Test: "Any string with 3s in it will be replaced by 'Won't you be my neighbor?'"
Code:beepBoop(32);
Expected Output: "0,1,2Won't you be my neighbor?4,5,6,7,8,9,10,11,12,Won't you be my neighbor?14,15,16,17,18,19,20,21,22,Won't you be my neighbor?24,25,26,27,28,29Won't you be my neighbor?Won't you be my neighbor?Won't you be my neighbor?"

Test: "Fix output to stringify each number and phrase."
Code:beepBoop(32);
Expected Output:
[0: "0"
1: "1"
2: "2"
3: "Won't you be my neighbor?"
4: "4"
5: "5"
6: "6"
7: "7"
8: "8"
9: "9"
10: "10"
11: "11"
12: "12"
13: "Won't you be my neighbor?"
14: "14"
15: "15"
16: "16"
17: "17"
18: "18"
19: "19"
20: "20"
21: "21"
22: "22"
23: "Won't you be my neighbor?"
24: "24"
25: "25"
26: "26"
27: "27"
28: "28"
29: "29"
30: "Won't you be my neighbor?"
31: "Won't you be my neighbor?"
32: "Won't you be my neighbor?"]

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
