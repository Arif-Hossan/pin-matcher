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
