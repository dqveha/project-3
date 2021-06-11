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
      newArray.push(" " + "\"" + string + "\"");
    }
  });
  console.log(newArray);
  return newArray + " . . .";
};

function reverseBoopBeep(number) {
  let inputtedNum = [];
  for (let i = number; i >= 0; i--) {
    inputtedNum.push(i);
  }
  const stringOutputNum = inputtedNum.toString();
  const stringOutNumSplit = stringOutputNum.split(",");
  let reverseNewArray = []
  stringOutNumSplit.forEach(function(string) {
    if (string.includes(3)) {
      let mostImportantException = string.replace(/\d+/g, ' "Won\'t you be my neighbor?"');
      reverseNewArray.push(mostImportantException);
    } else if (string.includes(2)) {
      let mostImportantException = string.replace(/\d+/g, ' "Boop"');
      reverseNewArray.push(mostImportantException);
    } else if (string.includes(1)) {
      let mostImportantException = string.replace(/\d+/g, ' "Beep!"');
      reverseNewArray.push(mostImportantException);
    } else {
      reverseNewArray.push(" " + "\"" + string + "\"");
    }
  });
  return reverseNewArray + " . . .";
};


$(document).ready(function() {
  $(".roboger").submit(function() {
    event.preventDefault();
    const enter = $("input#number").val();
    $("button#chronological").click(function() {
      const mrRobogerSays = beepBoop(enter);
      $("#output").text(mrRobogerSays);
  });
  $("button#reverse").click(function() {
    const reverseMrRoboger = reverseBoopBeep(enter);
    $("#reverseOutput").text(reverseMrRoboger);
  });
});

