//Business Logic

function beepBoop(number) {
  let inputtedNum = [];
  if (number === 1) {
    inputtedNum.push(number-1);
    inputtedNum.push(number);
  } else if (number === 0) {
    inputtedNum.push(number);
  }
  console.log(inputtedNum);
};


//UI Logic


// $(document).ready(function() {
// });



