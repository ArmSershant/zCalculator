const numbers = document.querySelectorAll(".numeric")
const equal = document.querySelector("#equal")
const result = document.querySelector("#result")
const singles = document.querySelectorAll(".single-action")
const doubles = document.querySelectorAll(".double-action")
let FIRST_NUMBER, SECOND_NUMBER, ACTION
numbers.forEach((elm) => (elm.onclick = writeNumber))
singles.forEach((elm) => (elm.onclick = singleActionHandler))
doubles.forEach((elm) => (elm.onclick = doubleActionHandler))

function writeNumber() {
  if (result.innerText.startsWith("0")) {
    result.innerText = result.innerText.substring(1)
  }
  if (result.innerText.length > 10) {
    result.style.fontSize = "32px"
  }
  result.innerText += this.innerText
  if (
    result.innerText.includes(".") &&
    result.innerText < 1 &&
    result.innerText > 0
  ) {
    result.innerText = "0" + result.innerText
  }
}

function singleActionHandler() {
  function factorial(num) {
    if (num === 0 || num === 1) return 1
    for (let i = num - 1; i >= 1; i--) {
      num *= i
    }
    return num
  }
  switch (this.innerText) {
    case "C":
      result.innerText = "0"
      break
    case "SQRT":
      result.innerText = Math.sqrt(result.innerText)
      break
    case "BIN":
      result.innerText = (+result.innerText).toString(2)
      break
    case "HEX":
      result.innerText = (+result.innerText).toString(16).toUpperCase()
      break
    case "CE":
      result.innerText = result.innerText.slice(0, result.innerText.length - 1)
      if (!result.innerText) {
        result.innerText = "0"
      }
      break
    case "+/-":
      result.innerText = result.innerText - 2 * result.innerText
      break
    case "!":
      result.innerText = factorial(result.innerText)
  }
}

function doubleActionHandler() {
  FIRST_NUMBER = +result.innerText
  result.innerText = "0"
  ACTION = this.innerText
}

equal.onclick = function () {
  SECOND_NUMBER = +result.innerText
  switch (ACTION) {
    case "+":
      result.innerText = FIRST_NUMBER + SECOND_NUMBER
      break
    case "-":
      result.innerText = FIRST_NUMBER - SECOND_NUMBER
      break
    case "*":
      result.innerText = FIRST_NUMBER * SECOND_NUMBER
      break
    case "/":
      result.innerText = FIRST_NUMBER / SECOND_NUMBER
      break
    case "pow":
      result.innerText = Math.pow(FIRST_NUMBER, SECOND_NUMBER)
      break
  }
}
