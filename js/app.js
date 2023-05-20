'use strict'

//Number

const num = 42 //integer
console.log(num)

const float = 42.42 //float

const pow = 10e3 //степень. 10 в степени 3

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) //2 в степени 53 - 1
console.log(Math.pow(2, 53)-1)

console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)

console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)

console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log('2/0', 2 / 0)

console.log(Number.NaN)

console.log(NaN) //Not A Number
console.log(Infinity)

console.log(typeof(NaN))

const weird = 2 / undefined

console.log('weird', weird)

console.log(isNaN(weird))
//у объекта Number тоже есть isNaN
console.log(Number.isNaN(42))

console.log(isFinite(42))

console.log(isFinite(Infinity))

const stringInt = '42'
const stringFloat = '42.42'

console.log(stringInt + 2) //'42' конкатенирует с приведением типов с 2->'2' = '422'


console.log(Number.parseInt(stringInt) + 2)
console.log(parseInt(stringInt) + 2)//можно использовать без Number

console.log(+stringInt + 2) //сделает stringInt числом

console.log(Number(stringInt) + 2) //Можем в Number обернуть и тоже получим число

// console.log(isNaN(stringInt))

console.log(parseFloat(stringInt) + 2)
//все остальное по аналогии +stringInt

console.log(0.4 + 0.2) //ожидаем 0.6 но получим 0.6000многонулей001

//решение
console.log(parseFloat((0.4 + 0.2).toFixed(1))) //возвращает строку, не округляет, отрезает




