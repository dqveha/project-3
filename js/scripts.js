//Business Logic

function beepBoop(number) {
  let inputtedNum = [];
  for (let i = number; i >= 0; i--) {
    inputtedNum.unshift(i);
  }
  let stringOutputNum = inputtedNum.toString();
  console.log(stringOutputNum);
};


//UI Logic


// $(document).ready(function() {
// });

