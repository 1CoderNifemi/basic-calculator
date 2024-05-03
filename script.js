const inputElem = document.getElementById("display");
const BUTTONS = document.getElementsByClassName("output-btn");
const equalsBtn = document.getElementById("equals-btn");

const handleButton = (button) => {
  if (inputElem.value === "0" && button.value !== ".") {
    inputElem.value = button.value;
  } else {
    inputElem.value += button.value;
  }
};
Array.from(BUTTONS).forEach((btn) => {
  btn.onclick = () => handleButton(btn);
});

const evaluate = () => {
  const result = eval(inputElem.value);
  inputElem.value = Math.round(result * 10000) / 10000;
};
equalsBtn.onclick = evaluate;
