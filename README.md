# Mr. Roboger's Neighborhood [Arrays & Looping Project]

## [https://github.com/dqveha/roboger-neighborhood](https://github.com/dqveha/roboger-neighborhood)

## [https://dqveha.github.io/roboger-neighborhood/index.html/](https://dqveha.github.io/roboger-neighborhood/index.html)

#### By Dave Lindqvist

## Technologies Used

1. HTML
2. CSS/Bootstrap v4.6.0
3. Javascript/jQuery v3.6.0

## Description

This is a web application that takes a number from the user, and returns an output under specific circumstances starting from 0 to the user's number. The exceptions are with numbers containing a '1', '2', and '3'. The '1's are replaced with 'Beep!', '2's are replaced with 'Boop!', and lastly, '3's are replaced with 'Won't you be my neighbor?'. There is an additional input field to enter the user's name if the user wants to be greeted personaly with 'Won't you be my neighbor, [user's name]?'. Also, there is an option to reverse the order of the output.

The color scheme can be credited as seen [here](https://www.color-hex.com/color-palette/32660) and [here](https://github.com/Henryjean/Rogers-Cardigans/blob/master/Charts/BarChart.png). The speech bubble was drawn from [here](https://projects.verou.me/bubbly/) which can be seen on this user's github [here](https://github.com/LeaVerou/bubbly).

## Setup/Installation Requirements:

### Installation requirements

    * Computer with browser
    * Internet

### Setup

    1. Download or clone the repository onto your desktop.
    2. Open the respective .zip file then enter the new folder called "roboger-neighborhood-main."
    3. Open index.html using a browser such as Mozilla or Chrome.

## Known Bugs

1. Currently not aware of any bugs. Please contact me if you find one!

## License

This software is licensed under the MIT license.

Copyright © 2021 Dave Lindqvist

## Contact Information

Dave Lindqvist (Lindqvist.Dave@gmail.com)

## Below is the Test-Driven Development (TDD) logic I went through working on this project.

### TDD

> Describe: beepBoop()

> Test: "It should return an array with a 0 if the number 0 is inputted"
> Code:beepBoop(0);
> Expected Output: [0]

> Test: "It should return an array with [0, 1] if the number 1 is inputted"
> Code:beepBoop(1);
> Expected Output: [0, 1]

> Test: "It should return an array with [0, 1, 2, 3, 4] if the number 4 is inputted"
> Code:beepBoop(4);
> Expected Output: [0, 1, 2, 3, 4]

> Test: "It should return a string output if the number 4 is inputted"
> Code:beepBoop(4);
> Expected Output: "0,1,2,3,4"

> Test: "Any string with 3s in it will be replaced by 'Won't you be my neighbor?'"
> Code:beepBoop(32);
> Expected Output: "0,1,2Won't you be my neighbor?4,5,6,7,8,9,10,11,12,Won't you be my neighbor?14,15,16,17,18,19,20,21,22,Won't you be my neighbor?24,25,26,27,28,29Won't you be my neighbor?Won't you be my neighbor?Won't you be my neighbor?"

> Test: "Fix output to stringify each number and phrase."
> Code:beepBoop(32);
> Expected Output:
> [0: "0"
>
> > 1: "1"
> > 2: "2"
> > 3: "Won't you be my neighbor?"
> > 4: "4"
> > 5: "5"
> > 6: "6"
> > 7: "7"
> > 8: "8"
> > 9: "9"
> > 10: "10"
> > 11: "11"
> > 12: "12"
> > 13: "Won't you be my neighbor?"
> > 14: "14"
> > 15: "15"
> > 16: "16"
> > 17: "17"
> > 18: "18"
> > 19: "19"
> > 20: "20"
> > 21: "21"
> > 22: "22"
> > 23: "Won't you be my neighbor?"
> > 24: "24"
> > 25: "25"
> > 26: "26"
> > 27: "27"
> > 28: "28"
> > 29: "29"
> > 30: "Won't you be my neighbor?"
> > 31: "Won't you be my neighbor?"
> > 32: "Won't you be my neighbor?"]

> Test: "Replace digits containing 2 with 'Boop'."
> Code:beepBoop(32);
> Expected Output:
> [0: "0"
>
> > 1: "1"
> > 2: "Boop"
> > 3: "Won't you be my neighbor?"
> > 4: "4"
> > 5: "5"
> > 6: "6"
> > 7: "7"
> > 8: "8"
> > 9: "9"
> > 10: "10"
> > 11: "11"
> > 12: "Boop"
> > 13: "Won't you be my neighbor?"
> > 14: "14"
> > 15: "15"
> > 16: "16"
> > 17: "17"
> > 18: "18"
> > 19: "19"
> > 20: "Boop"
> > 21: "Boop"
> > 22: "Boop"
> > 23: "Won't you be my neighbor?"
> > 24: "Boop"
> > 25: "Boop"
> > 26: "Boop"
> > 27: "Boop"
> > 28: "Boop"
> > 29: "Boop"
> > 30: "Won't you be my neighbor?"
> > 31: "Won't you be my neighbor?"
> > 32: "Won't you be my neighbor?"]

> Test: "Replace digits containing 1 with 'Beep!'."
> Code:beepBoop(32);
> Expected Output:
> [0: "0"
>
> > 1: "Beep!"
> > 2: "Boop"
> > 3: "Won't you be my neighbor?"
> > 4: "4"
> > 5: "5"
> > 6: "6"
> > 7: "7"
> > 8: "8"
> > 9: "9"
> > 10: "Beep!"
> > 11: "Beep!"
> > 12: "Boop"
> > 13: "Won't you be my neighbor?"
> > 14: "Beep!"
> > 15: "Beep!"
> > 16: "Beep!"
> > 17: "Beep!"
> > 18: "Beep!"
> > 19: "Beep!"
> > 20: "Boop"
> > 21: "Boop"
> > 22: "Boop"
> > 23: "Won't you be my neighbor?"
> > 24: "Boop"
> > 25: "Boop"
> > 26: "Boop"
> > 27: "Boop"
> > 28: "Boop"
> > 29: "Boop"
> > 30: "Won't you be my neighbor?"
> > 31: "Won't you be my neighbor?"
> > 32: "Won't you be my neighbor?"]

> Test: "Add name after 'Won't you be my neighbor, [name]?'."
> Code:beepBoop(3, "Dave");
> Expected Output:
> [0: "0"
>
> > 1: "Beep!"
> > 2: "Boop"
> > 3: "Won't you be my neighbor, Dave?"]
