// const button = document.getElementById("button");

// const alertMessage = function () {
//   alert("クリックしたね");
// };

const button = document.getElementById("button");

button.onclick = function () {
  alert("クリックしたね!");
};

// button.onclick = alertMessage();

// const buttonDiv = document.getElementById("button-div");
// const buttonSpan = document.getElementById("button-span");

// buttonDiv.onclick = function () {
//   alert("こんにちは");
// };
// buttonSpan.onclick = function () {
//   alert("こんばんは");
// };

const buttonDiv = document.getElementById("button-div");
const buttonSpan = document.getElementById("button-span");

const createAlertMessage = function (message) {
  return function () {
    alert(message);
  };
};

buttonDiv.onclick = createAlertMessage("こんにちは");
buttonSpan.onclick = createAlertMessage("こんばんは");

const inputText = document.getElementById("input-text");
const inputDate = document.getElementById("input-date");

// const sayHello = function () {
//   console.log("hello");
// };

// inputText.oninput = sayHello;
// inputDate.oninput = sayHello;

const logValue = function (e) {
  console.log(e.target.value);
};

inputText.oninput = logValue;
inputDate.oninput = logValue;

document.onkeydown = function (e) {
  console.log(e.key);
};
