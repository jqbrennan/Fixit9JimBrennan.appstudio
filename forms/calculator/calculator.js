function calcAdd(a,b) {
  return a + b
}

function calcMult(a,b) {
  return a * b
}
let calcName = ''
let calcChoice = ''
let calcLower = ''
let num1 = ''
let num2 = ''
let calcAnswer = ''

btnCalcNameSubmit.onclick=function(){
  calcName = inptCalcName.value
  btnCalcNameSubmit.hide()
  inptCalcName.hide()
  inptCalcChoice.header = `${calcName}, do you want to add or multiply`
  inptCalcChoice.show()
  btnCalcChoiceSubmit.show()
}


btnCalcChoiceSubmit.onclick=function(){
  calcChoice = inptCalcChoice.value
  calcLower = calcChoice.toLowerCase()
  btnCalcChoiceSubmit.hide()
  inptCalcChoice.hide()
  inptNum1.header = `${calcName}, enter a number`
  inptNum2.header = `${calcName}, enter another number`
  inptNum1.show()
  inptNum2.show()
  btnCalcSubmit.show()
}


btnCalcSubmit.onclick=function(){
  num1 = Number(inptNum1.value)
  num2 = Number(inptNum2.value)
  btnCalcReset.show()
  if (calcLower == 'add') {
    calcAnswer = calcAdd(num1,num2)
    lblCalcAnswer.value = `${calcName}, ${num1} plus ${num2} equals ${calcAnswer}`
  } else if (calcLower == 'multiply') {
    calcAnswer = calcMult(num1,num2)
    lblCalcAnswer.value = `${calcName}, ${num1} times ${num2} equals ${calcAnswer}`
  }
}
btnCalcReset.onclick=function(){
  calcChoice = ''
  calcLower = ''
  num1 = ''
  num2 = ''
  calcAnswer = ''
  lblCalcAnswer.value = ''
  inptNum1.value = ''
  inptNum2.value = ''
  inptCalcChoice.show()
  btnCalcChoiceSubmit.show()
  inptNum1.hide()
  inptNum2.hide()
  btnCalcReset.hide()
  btnCalcSubmit.hide()
}
