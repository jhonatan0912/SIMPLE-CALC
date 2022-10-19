const firstNumber = document.getElementById("first-number")
const operations = document.getElementById("options")
const secondNumber = document.getElementById("second-number")
const containerOperations = document.getElementById("container-operations")
let resultBox = document.createElement("div")

const btnCalc = document.getElementById("btn-calc")
const btnReset = document.getElementById("btn-reset")



btnCalc.addEventListener("click", (num1, num2) => {
  // console.log(operations.value);

  num1 = Number(firstNumber.value)
  num2 = Number(secondNumber.value)
  let result = ""

  resultBox.classList.add("result")
  containerOperations.append(resultBox)

  switch (operations.value) {
    case "+":
      result = eval(num1 + "+" + num2)
      resultBox.innerHTML = result
      resetInputs()
      break;
    case "-":
      result = eval(num1 + "-" + num2)
      resultBox.innerHTML = result
      resetInputs()
      break;
    case "*":
      result = eval(num1 + "*" + num2)
      resultBox.innerHTML = result
      resetInputs()
      break;
    case "/":
      result = eval(num1 + "/" + num2)
      resultBox.innerHTML = result
      resetInputs()
      break;
  }

})

const resetInputs = () => {
  firstNumber.value = ""
  secondNumber.value = ""
}

btnReset.addEventListener("click", () => {
  firstNumber.value = ""
  secondNumber.value = ""
  resultBox.innerHTML = ""
})