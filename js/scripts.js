//Business Logic

function beepBoop(number) {
  let inputtedNum = [];
  for (let i = number; i >= 0; i--) {
    inputtedNum.unshift(i);
  }
  let stringOutputNum = inputtedNum.toString();
  let stringOutNumSplit = stringOutputNum.split(",");
  let newArray = []
  stringOutNumSplit.forEach(function(string) {
    if (string.includes(3)) {
      let mostImportantException = string.replace(/\d+/g, "Won't you be my neighbor?");
      newArray.push(mostImportantException);
    } else if (string.includes(2)) {
      let mostImportantException = string.replace(/\d+/g, "Boop");
      newArray.push(mostImportantException);
    } 
    else {
      newArray.push(string);
    }
  });
  console.log(newArray);
};


//UI Logic


// $(document).ready(function() {
// });

