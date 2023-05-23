const myName = 'Антон'
const age = 31

function getAge(){
    return age
}

// const output = 'Привет, меня зовут ' + myName + ' и мой возраст ' + age + ' год'
//почему name deprecated?

const output = `Привет, меня зовут ${myName} и мой возраст ${getAge()}`
//можно вызывать функцию, переменную, но нельзя писать код типа if(){}
console.log(output)

console.log(`Привет, меня зовут ${myName} и мой возраст ${age < 20 ? 'А' : 'B'}`)
//можно использовать тернарный оператор

const multiLineOutput = `<div> This is div </div>
<p>this is p</p>`

console.log(multiLineOutput)
//обратные кавычки сохраняют многострочность

//за кулисами js оборачивает 'name' в конструктор new String('name')

// методы строк

console.log(multiLineOutput.length)
console.log(multiLineOutput.toUpperCase())
console.log(multiLineOutput.charAt(2)) //какой символ находится по индексу

console.log(multiLineOutput.indexOf('div')) //вхождение подстроки, возвращает позицию

console.log(multiLineOutput.startsWith('<div>')) //начинается ли строка с подстроки

console.log(multiLineOutput.toLowerCase().startsWith('<div>')) //начинается ли строка с подстроки


console.log(multiLineOutput.endsWith('</p>')) //заканчивается ли строка подстрокой

//ПЕРЕВОД СТРОКИ СЧИТАЕТСЯ СИМВОЛОМ, символ пробела тоже


// console.log(multiLineOutput.lastIndexOf())

console.log(multiLineOutput.repeat(5))

//.trim() очищает все пробелы

const password = "         password       "
console.log(password)
console.log(password.trim()) //есть trimLeft() и trimRight()

function logPerson(s, name, age) {
    ///console.log(s, name, age)
    if (age < 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

//

const personName = 'Антон'
const personAge = 31

const personName2 = 'Максим'
const personAge2 = -10

const functionOutput = logPerson`Имя: ${personName}, Возраст: ${personAge}`

console.log(functionOutput)

const functionOutput2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}`

console.log(functionOutput2)
