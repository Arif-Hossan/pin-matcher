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
let inputPin=document.getElementById('inputPin');
let createInput=(number)=>{
  inputPin.value+=number;
}

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
