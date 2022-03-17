const getEle = (element) => document.querySelector(element);
const getListEle = (elements) => document.querySelectorAll(elements);

const screenTextElement = getEle("#screen");
const numberListElement = getListEle(".btn-number");
const operandListElement = getListEle(".btn-operand");
const deleteElement = getEle(".btn-del");
const clearElement = getEle(".btn-clear");
const equalElement = getEle(".btn-equal");

const calculator = new Calulator(
  screenTextElement,
  numberListElement,
  operandListElement
);

numberListElement.forEach((number) => {
  number.addEventListener("click", () => {
    calculator.appendNumber(number);
  });
});

operandListElement.forEach((operand) => {
  operand.addEventListener("click", () => {
    calculator.appendOperand(operand);
  });
});

clearElement.addEventListener("click", () => {
  calculator.clear();
});

deleteElement.addEventListener("click", () => {
  calculator.del();
});

equalElement.addEventListener("click", () => {
  calculator.compute();
});
