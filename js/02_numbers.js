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

//BigInt, числа больше max_safe_integer

console.log(typeof 901259125710284182498109284n)
//хром подсвечивает зеленым, Bigint работает только с bigInt: 10n - 4 error
//бигинт может быть отрицательными, не работает с десятичными значениями
//использовать n с маленькими числами нецелесообразно, типа 10n, но это работает

 console.log('parseInt(10n) - 4 = ', parseInt(10n) - 4)
 console.log(10n - BigInt(4))
 // 5n / 2n даст 2, а не 2.5, потому что BigInt не работает с десятичными частями

//Math 

console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25)) //квадратный корень

console.log(Math.pow(5, 2)) //пятерку, в степень двойки


console.log(Math.abs(-5)) //модуль числа


console.log(Math.max(5, 12, float)) //модуль числа
console.log(Math.min(5, 12, float)) //модуль числа
//округление 
//Math.floor() округление в меньшую сторону 4.9 > 4
//Math.ceil() округление в большую сторону 4.1 > 5
//Math.round() стандарное округление в большую или меньшую сторону
//Math.trunc() отсечение знаков после запятой
//toFixed() отсечение знаков после запятой

//чем Number.toFixed() отличается от Math.trunc
//trunc приводит к числу

console.log(Math.random()) //не принимает параметров, но выдает псевдослучайное число типа 0.2147284

//случайное число в диапазоне

function getRandomBetween(min, max) {
    // return Math.floor(Math.random() * (max - min) + min) //почему такой алгоритм?
//почему floor, а не round? если напишем просто floor то потеряем одно значение, поэтому добавляем 1

return Math.floor(Math.random() * (max - min + 1) + min) 
}


console.log(getRandomBetween(10, 42))











