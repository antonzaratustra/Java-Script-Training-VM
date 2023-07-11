const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]

console.log(cars)
console.log(cars.length)

//можно создавать через конструктор new Array()

//добавить элемент можно обратившись по несуществующему индексу

cars[4] = 'Мазератти'
console.log(cars)
//так никто не делает


cars.push('Ламборгини') //добавление в конец

console.log(cars)

//если какая-то функция вызывается в контексте объекта. Мы у объекта вызываем функцию, то это метод объекта


cars.unshift('Митцубиси') //добавление в начало
console.log(cars)

cars.shift() //удаляет первый элемент массива и возвращает его

const firstElement = cars.shift()

console.log(firstElement)
console.log(cars)

const lastItem = cars.pop() //удаляет последний элемент и возвращает его, не принимает параметров

console.log(cars.reverse())//возвращает реверсированный массив и мутирует его(реверсирует сам массив и возвращает)

//Задача реверсировать строчку

const text = 'Привет, мы изучаем javascript!'

const masText = text.split('')//возвращает массив, делит по символу , например или по '' на все символы
console.log(masText)
console.log(masText.reverse())


//про масссивы

// разные типы значений
let arrayFruits1 = [ 'Яблоко', { name: 'Джон' }, true, function() { console.log('привет'); } ];

// получить элемент с индексом 1 (объект) и затем показать его свойство
console.log( arrayFruits1[1].name ); // Джон

// получить элемент с индексом 3 (функция) и выполнить её
arrayFruits1[3](); // привет

//массивы ведут себя как объекты, например копируются по ссылке

let fruits = ["Банан"]

let arrayFruits2 = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)

console.log( arrayFruits2 === fruits ); // true

arrayFruits2.push("Груша"); // массив меняется по ссылке

console.log( fruits ); // Банан, Груша - теперь два элемента





// методы перебора массивов

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let key in arr) {
    console.log(key) //key это индекс
    console.log(arr[key])
}

for (let item of arr) {
    console.log(item) //item это значение
}

//Html коллекция которую получаем через getelemetnsbytagname или Nodelist через queryselector это не совсем массивы
// For in к HTML collection и Nodelist не применять, он перебирает все свойства объекта, не только числовые

//Базовые методы массивов

let value = Array.isArray(arr) //true (проверка на массив)
//indexOf() возвращает индекс искомого элемента
//slice(end, start) вырезает и возвращает не включая end массив. Не меняет массив. Если в slice ничего не передать - вернет копию массива
//splice (start, deletecount, insert elements) меняет исходный массив, возвращает удаленное
//reverse()
//concat объединяет массивы, либо массив со значениями через , , , Если ничего не передать возвращает копию
//value = [].concat(1, 2, 3) добавит элементы как push
//join() делает из массива строку, принимает разделитель, если не передать разделитель разделит запятой, "" слитно
// value = 'hello world'.split() из строки в массив - если ничего не передать в виде одного элемента, если разделитель то через разделитель

//функции должны быть чистыми, не менять глобальные переменные, + массивы и объекты передаются по ссылке, поэтому их нужно копировать, чтобы не поменять исходные данные
//функции не должны переопределять глобальные снаружи параметры, а работать только с объявленными внутри или переданными

//function declaration как var доступны в любом месте кода до и после объявления, let const и function expression только после объявления

//if (!parameter) return - проверка на переданные параметры в функцию и остановка ее
//return console.error('error')

//закрывать код в самовызывающиеся функции, чтобы изолировать переменные 

(function (msg) {
    console.log(msg)
})('Hello world')


Object.freeze(templateObject) //запрещает изменять свойства объекта

//Number.isNaN() отлавливает четко NaN, isNaN отлавливает потенциальный NaN пытаясь привести типы, NaN !== NaN

//2 ** 3 возвести 2 в степень 3


//Тернарный оператор повторить

// function oddEven(n){
//     return n%2 == 1 ? "odd number" : "even number";
//   }
//   function oldYoung(age){
//     return age < 16 ? "children" : age < 50 ? "young man" : "old man";
//   }


//indexOf
const indexCars = cars.indexOf('БМВ')

//findindex

const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Viktoria', budget: 1700},
]

const index = people.findIndex(function(person){
    return person.budget === 3500
})



//find работает так же, возвращает элемент массива, вместо индекса

const person = people.find((person) => {
    return person.budget === 3500
})
// лямбда функция
const person2 = people.find(person => person.budget === 3500)

cars.includes('Мазда')

//метод map не мутирует исходный массив, возвращает новый
const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})

const pow2Fib = fib.map(num => num ** 2)

//filter 
pow2Fib.filter(num => num > 20) //если true элемент остается в результирующем масивк

// filter не мутирует исходный массив, возвращает новый
//num значение на каждой итерации

const allBudget = people
.filter(person => person.budget > 2000)
.reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)

//чейнинг

item.name.indexOf('phone') !== -1 // имя элемента содержит строку
.contains
.substr
.incliudes
//чем отличаются?



