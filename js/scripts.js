//Business Logic

function beepBoop(number) {
  let inputtedNum = [];
  for (let i = number; i >= 0; i--) {
    inputtedNum.unshift(i);
  }
  let stringOutputNum = inputtedNum.toString();
  let mostImportantException = stringOutputNum.replace(/3/g, "Won't you be my neighbor?")
  console.log(mostImportantException);
};


//UI Logic


// $(document).ready(function() {
// });

