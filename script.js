const inputElem = document.getElementById("display");
const buttonsArr = Array.from(document.getElementsByClassName("output-btn"));
const operatorsArr = Array.from(document.getElementsByClassName("op-btn"));
const equalsBtn = document.getElementById("equals-btn");

const handleButton = (button) => {
  const result = operatorsArr.every((element) => button.value !== element.value);
  if (inputElem.value === "0" && result && button.value !== ".") {
    inputElem.value = button.value;
  } else {
    inputElem.value += button.value;
  }
};
buttonsArr.forEach((btn) => {
  btn.onclick = () => handleButton(btn);
});

const evaluate = () => {
  const result = eval(inputElem.value);
  inputElem.value = Math.round(result * 10000) / 10000;
};
equalsBtn.onclick = evaluate;
