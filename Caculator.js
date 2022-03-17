class Calulator {
  constructor(screenTextELement, numberListElement, operandListElement) {
    this.screenTextELement = screenTextELement;
    this.numberListElement = numberListElement;
    this.operandListElement = operandListElement;
    this.clear();
  }

  clear() {
    this.toggleButton(false);
    this.screenTextELement.innerText = "";
    this.num1 = "";
    this.num2 = "";
    this.operand = "";
    this.result = 0;
  }

  del() {
    if (this.num2 === 0 && this.operand === "/") {
      this.clear();
    }
    this.display("");
    this.operand && this.num1 !== "" ? (this.num2 = "") : (this.num1 = "");
  }
  appendNumber(numberElement) {
    if (this.operand || this.num1 === 0) {
      this.num2 += numberElement.textContent;
      this.display(this.num2);
    } else {
      this.num1 += numberElement.textContent;
      this.display(this.num1);
    }
  }

  appendOperand(operand) {
    this.operand = operand.textContent;
    if (this.num2 !== "") this.compute();
  }

  compute() {
    if (this.num1 === "") this.num1 = 0;
    if (this.num2 === "") return;

    this.num1 = parseFloat(this.num1);
    this.num2 = parseFloat(this.num2);

    if (this.num2 === 0 && this.operand === "/") {
      this.display("cannot devide by Zero");
      this.toggleButton(true);
      return;
    }

    if (isNaN(this.num1) || isNaN(this.num2)) {
      this.display("Error");
      this.toggleButton(true);
      return;
    }

    switch (this.operand) {
      case "+":
        this.result = this.num1 + this.num2;
        break;
      case "-":
        this.result = this.num1 - this.num2;
        break;
      case "x":
        this.result = this.num1 * this.num2;
        break;
      case "/":
        this.result = this.num1 / this.num2;
        break;
      default:
        return;
    }

    this.num1 = this.result;
    this.num2 = "";
    this.display(this.result);
  }

  toggleButton(isToggle) {
    numberListElement.forEach((number) => {
      number.disabled = isToggle;
    });

    operandListElement.forEach((number) => {
      number.disabled = isToggle;
    });
  }

  display(textDisplay) {
    this.screenTextELement.innerText = textDisplay;
  }
}
