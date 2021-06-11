//Business Logic

function beepBoop(number) {
  let inputtedNum = [];
  for (let i = number; i >= 0; i--) {
    inputtedNum.unshift(i);
  }
  const stringOutputNum = inputtedNum.toString();
  const stringOutNumSplit = stringOutputNum.split(",");
  let newArray = []
  stringOutNumSplit.forEach(function(string) {
    if (string.includes(3)) {
      let mostImportantException = string.replace(/\d+/g, ' "Won\'t you be my neighbor?"');
      newArray.push(mostImportantException);
    } else if (string.includes(2)) {
      let mostImportantException = string.replace(/\d+/g, ' "Boop"');
      newArray.push(mostImportantException);
    } else if (string.includes(1)) {
      let mostImportantException = string.replace(/\d+/g, ' "Beep!"');
      newArray.push(mostImportantException);
    } else {
      newArray.push(" " + string);
    }
  });
  console.log(newArray);
  return newArray;
};

//UI Logic
$(document).ready(function() {
  $("#roboger").submit(function() {
    event.preventDefault();
    const enter = $("input#number").val();
    const mrRobogerSays = beepBoop(enter);

    $("#output").text(mrRobogerSays);
  });

});

