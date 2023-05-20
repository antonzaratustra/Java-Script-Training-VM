// 1 Переменные
// alert(1);

//camelCase верблюжий регистр
//точки с запятой не нужны в 99,99% случаев, можно не ставить

//Переменные
// Устарело, не использовать:
// var name = 'Zaratustra';
//предпочтительно использовать const когда не будем менять значение

const lastName = 'Zaratustra'; //string

const isProgrammer = true; //boolean

//lastName = 'Anton';
//не сработает

let age = 30; //number

age = 31;

console.log(age);
console.log(lastName);

const _private = 'private'
const _ = '_'
const $ = '$'

// const if нельзя использовать зарезервированные слова

const withNum5 = 5
// const 5withNum с числа нельзя начинать

// 2 Мутирование

//лучше везде использовать одинарные кавычки, это лаконичнее ''

console.log(`Фамилия человека: ${lastName}`)

console.log('Фамилия человека: ' + lastName)

console.log('Фамилия человека: ' + lastName + ', а возраст: ' + age)

//в консоли браузера числа и строки отличаются цветом

console.log(age)
console.log(age.toString())

//ctrl + x вырезать строку

//alert и prompt это функции браузера, в самом javascript их нет

//const firstNameNew = prompt('Введите Имя:')
//alert(firstNameNew + ' ' + lastName)


//3 операторы

let currentYear = 2023
const birthYear = 1991
const myAge = currentYear - birthYear
//alert(myAge)


const a = 10
const b = 5




console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(currentYear++)
console.log(currentYear)
console.log(++currentYear)
console.log(--currentYear)
console.log(currentYear--)


let c = 32
// c = c + a
c += a //тоже самое 
// -= это c = c -  
// += c = c +
// /= c = c /
// *= c = c *

console.log(c)

c += c

console.log(c)

c = c++ // почему не инкрементирует?

console.log(c)

//4 типы данных

console.log(typeof(c))

console.log(typeof(isProgrammer))

console.log(typeof(name))

console.log(typeof(age))

// const x не сработает, const нужно инициализировать

let x

console.log(typeof(x))

let y = null;

console.log(typeof(y)) //баг языка typeof(null) возвращает object

// 5 приоритет операторов

const myFullAge = 31
const mybirthYear = 1991
const currentEarthYear = 2023
const isFullAge = currentEarthYear - mybirthYear >= myFullAge

// 6 условные операторы

const courseStatus = 'ready'

if (courseStatus === 'ready') {
    console.log('Курс уже готов')
} else if (courseStatus === 'pending') {
    console.log('Курс пока в разработке')
} else if (courseStatus === 'fail') {
    console.log('Курс зафейлен')
} else {
    console.log('Неизвестно что с курсом')
}

const num1 = 42 //number
const num2 = '42' //string

console.log(num1 == num2) //приведение типов, к строке
console.log(num1 === num2) //двойное равно лучше забыть и всегда использовать тройное

const isReady = true

if (isReady === true) {
    console.log('Все готово')
}

//тоже самое

if (isReady) {
    console.log('Все готово')
} else {
    console.log('Все не готово')
}

//что если в переменной не boolean значение?

// заменяем тоже самое тернарным

isReady ? console.log('Все готово') : console.log('Все не готово')

// когда использовать тернарный оператор

// 7 Булевая логика

//&& и возвращает false если хотя бы 1 операнд false
//|| или возвращает true если хотя бы 1 true
//! Не !!можно два раза применять

// 8 функции

function calculateAge(year) {
    return 2023 - year
}

const myNewAge = calculateAge(2020)

console.log(myNewAge)
console.log(calculateAge(1990))

function logInfoAbout(name, year) {
    const age = calculateAge(year)
    if (age > 0) {
    console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
    } else {
        console.log('Вообще-то это уже будущее')
    }
}

logInfoAbout('Антон', 2024)

//9 массивы

const cars = ['Мазда', 'Мерседес', 'Форд']

console.log(cars)
//создание массива через конструктор класса - это то что происходит за кулисами js, проще объявлять cars = []
const carsNew = new Array('Мазда', 'Мерседес', 'Форд')
console.log(carsNew)

console.log(cars[1])

console.log(cars.length)

// console.log(cars.toString())

cars[0] = 'Порш'
cars[3] = 'Мазда' //добавление нового элемента

console.log(cars)

cars[cars.length] = 'Аааавтомобиль' //добавление нового элемента с замещением последнего

//10 циклы

for (let i = 0; i < cars.length; i++ ) {
console.log(cars[i])
} //let не const

//для массивов удобнее цикл for of

for (let car of cars) {
    console.log(car)
}

for (let i = 0; i < cars.length; i++) {
}

for (let car of cars) {
}

//11 объекты
//можно создавать через конструктор
const person = new Object({})

//но правильнее и проще

const newPerson = {
    firstName: 'Anton',
    lastName: 'Zaratustra',
    year: 1991,
    languages: ['Ru', 'En'],
    hasWife: true,
    greet: function() {    //метод объекта
        console.log('greet');
    }
}


console.log(newPerson)
console.log(newPerson.year.toString())

console.log(newPerson.languages[1].toUpperCase())

newPerson.greet()

console.log(newPerson['lastName']) //если обращаемся через [] нужно передавать строку
//обращаемся через . [''] динамический ключ [key] .key
//обращение по переменной-ключу к свойству
const key = 'languages'
console.log(newPerson[key])

newPerson.year = 1992;

console.log(newPerson['year'])

//можно добавить новый ключ

newPerson.isProgrammer = true

























