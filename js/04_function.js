//функции
//Function Declaration - можем обращаться когда захотим, вызов может быть до объявления функции в коде
function greet(name) {
    console.log('Привет -',name) //пробел добавляется откуда - то
}

greet('Лена')

//Function Expression - когда мы складываем функцию в переменную, ее можно вызвать в коде только после того как она объявлена, до - нельзя
const greet2 = function(name) {
    console.log('Привет 2 -',name) //пробел добавляется откуда - то
}

//можно анонимную функцию, можно const greet2 = function greet2() {}

greet2('Митя')

//если хотите полностью себя защитить от ошибок лучше использовать function declaration - обычное объявление функции без складывания в переменную

console.log(typeof greet) //возвращает function, функция это объект
console.log(typeof greet2)

console.dir(greet)

//анонимные функции
 let counter = 0;
// setInterval(function(){
//     console.log(++counter)
// }, 1000)
//передаем в setInterval функцию без названия

const interval = setInterval(function() {
    if (counter === 5) {clearInterval(interval)} else {
    console.log(++counter) 
}
}, 1000)

//setTimeout и clearTimeout по аналогии, только один раз задержка


// 3 Стрелочные функции

//как и ${} стрелочные функции появились в ecmascript6

function greeter(namer) {
    console.log('Привет -', namer)
}

//в виде стрелочной функции будет выглядеть как

const arrow = (namer) => {
    console.log('Привет -', namer)
}

//зачем как в function expression присваивать переменной?

arrow('Антон')

const arrow2 = namer => console.log('Привет -', namer)
//один параметер - можно опустить (), одна строчка кода - можно опустить {}

arrow2('Таня')

//const pow2 = num => {
//    return num ** 2 //оператор возведения в степень, аналог Math.pow()
//}

const pow2 = num => num ** 2 //можно опустить return 

console.log(pow2(5))

//если параметр один - можно опустить скобки (), если 0 параметров скобки нужно прописывать ()

// Параметры функции по умолчанию

const sum = (a = 2, b = a * 4) => a + b

console.log(sum ())
console.log(sum(3))
console.log(sum(10, 5))

//если параметры по умолчанию не заданы и мы не передаем 1 параметр мы получаем number + undefined = NaN

//как реализовать функцию, которая принимает неограниченное количество параметров

function allArguments(...all) {
    console.log(all)
    console.log(`all is ${all}`)
    console.log(typeof(all))
    console.log(`all [0] is ${all[0]}`)
}

//параметр ... rest собирает все параметры в массив

allArguments()
allArguments(1)
allArguments(1, 2)
allArguments(1, 2, 'String')

function sumAll(...all) {
    let result = 0;
    for (let num of all) {
        result += num
    }
    return result
}

console.log('sumAll is', sumAll (1, 2, 4))

// Замыкания (когда мы из одной функции возвращаем другую с сохранением некоторого контекста)

function createMember(name) {
    return function(lastName){
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Антон')
console.log(logWithLastName(' Заратутра'))
//сейчас функция logWithLastName постоянно работает с переданным параметром name 'Антон'
//почему возвращает undefined
//польза в создании приватных переменных, мы никак не можем получить доступ к name
//в js нет нативного механизма позволяющего сделать приватные переменные




