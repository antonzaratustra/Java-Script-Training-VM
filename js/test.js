let result = document.getElementById('select')
result.textContent = 'catch you'
result.style.color = 'red'
result.style.backgroundColor = 'yellow'

let submitButton = document.getElementById('submit')
let input1 = document.getElementById('input_1')
let input2 = document.getElementById('input_2')
let resultValue = document.getElementById('result')
resultValue.textContent = Number(input1.value) + Number(input2.value)

submitButton.onclick = function () {
    resultValue.textContent = Number(input1.value) + Number(input2.value)
}