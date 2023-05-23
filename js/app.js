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




