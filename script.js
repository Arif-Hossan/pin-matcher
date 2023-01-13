let errorCount = 0; // declare errorCount variable globally
// generate pin
function getPin() {
  // creating a random number then make a string and after that split that using dot(.)
  let random = Math.random() * 10000 + "";
  let randomPin = random.split(".")[0];
  if (randomPin.length == 4) {
    return randomPin;
  } else {
    return getPin();
  }
}
// display the generated pin
function generatePin() {
  let generatedInput = document.getElementById("generated-pin");
  generatedInput.value = getPin();
  errorCount = 0;
}
// handle input pin using event bubble
let numberContainer = document.getElementById("number-container");
numberContainer.addEventListener("click", function (event) {
  let digit = event.target.innerText;
  if (isNaN(digit)) {
    if (digit == "C") {
      let clearInput = document.getElementById("inputed-pin");
      clearInput.value = "";
      displayCompareMessage("none", "none");
    } else if (digit == "<") {
      let deleteInput = document.getElementById("inputed-pin");
      deleteInput.value = deleteInput.value.slice(0, -1);
      displayCompareMessage("none", "none");
    }
  } else {
    let inputedPin = document.getElementById("inputed-pin");
    inputedPin.value += digit;
    displayCompareMessage("none", "none");
  }
});
// compare/verify pin
function comparePin() {
  let inputedPin = document.getElementById("inputed-pin").value;
  let generatedPin = document.getElementById("generated-pin").value;

  if (inputedPin === generatedPin) {
    errorCount = 0;
    displayCompareMessage("block", "none");
  } else {
    errorCount++;
    let actionLeft = document.getElementById("action-left");
    actionLeft.innerText = 3 - errorCount + " try left";
    if (errorCount >= 3) {
      alert("Maximum attempts reached. Please generate a new PIN.");
      errorCount = 0;
    } else {
      displayCompareMessage("none", "block");
    }
  }
}
// compare message
function displayCompareMessage(correctStatus, incorrectStatus) {
  let correctMessage = document.getElementById("correct-message");
  correctMessage.style.display = correctStatus;
  let incorrectMessage = document.getElementById("incorrect-message");
  incorrectMessage.style.display = incorrectStatus;
}
/*
Old Code
function generatePin() {
  let randomPin;
  do {
    let randomNumber = Math.floor(Math.random() * 10000);
    randomPin = randomNumber.toString();
  } while (randomPin.length !== 4);
  let getPin = (document.getElementById("getPin").value = randomPin);
  return getPin;
}
// get input pin from user
let inputPin = document.getElementById("inputPin");
let createInput = (number) => {
  inputPin.value += number;
};
function clearInput() {
  inputPin.value = "";
  document.getElementById("notification").style.display = "none";
  document.getElementById("match-notification").style.display = "none";
  document.getElementById("notmatch-notification").style.display = "none";
}
function delInput() {
  inputPin.value = inputPin.value.slice(0, -1);
  document.getElementById("notification").style.display = "none";
  document.getElementById("match-notification").style.display = "none";
  document.getElementById("notmatch-notification").style.display = "none";
}
// matching pin
function matchPin() {
  let getInput = document.getElementById("inputPin");
  let getInputPin = getInput.value;
  if (getInputPin.length == 4) {
    // converting string to number
    let getInputNumber = getInputPin * 1;
    let getGeneratedInput = document.getElementById("getPin");
    let getGeneratedInputPin = getGeneratedInput.value;
    let generatedInputNumber = getGeneratedInputPin * 1;
    if (generatedInputNumber == getInputNumber) {
      document.getElementById("notification").style.display = "block";
      document.getElementById("match-notification").style.display = "block";
    } else {
      document.getElementById("notification").style.display = "block";
      document.getElementById("notmatch-notification").style.display = "block";
    }
  }
}*/

// function createInput(numbers){
// inputPin.value+=numbers;
// }
// document.getElementById('inputPin').value=inputPin;

/*
document.getElementById("generatePin").addEventListener("click", function () {
  let randomPin;
  do {
    let randomNumber = Math.floor(Math.random() * 10000);
    randomPin = randomNumber.toString();
  } while (randomPin.length !== 4);
  let getPin= document.getElementById("getPin").value = randomPin;
  return getPin;
});
*/
