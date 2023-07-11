const person = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed Key', //key_4
    //новый синтаксис объявления метода без function
    greet() { 
        console.log('greet from person')
    },
    info() {
        console.info('Информация про человека по имени:', this.name) //this сейчас это person
    }
}

console.log(person.name)
const ageKey = 'age'
console.log(person[ageKey])
console.log(person['complex key'])
person.greet()

person.age++
person.languages.push('by')
delete person['key_4']

//деструктуризация

// const name = person.name
// const age = person.age
// const languages = person.languages

//это ссылки на поля объекта, передается по ссылке?

const {name, age: personAge = 10, languages} = person
//создаются отдельные переменные
//берем поле age у объекта person и помещаем в personAge
//можно ставить значение по умолчанию на случай undefined в поле


for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key:', key)
        console.log('value:', person[key])
    }
    
}

//цикл for in опасен тем что он проходит не только по ключам объекта
//но и заходить в его прототип
//для этого нужна проверка .hasOwnProperty()

//есть другие способы, не использовать цикл
//есть глобальный объеки Object с методами assign например
//keys, freeze, values, create

const keys = Object.keys(person) //получает ключи объекта в массив, не пробегается по прототипу
keys.forEach((key) => {
    console.log('key:', key)
    console.log('value:', person[key])
})
//callback функция в forEach принимает итерируемый элемент массива

//не обязательно создавать переменную, метод возвращает массив, у него вызываем forEach

Object.keys(person).forEach((key) => {
    console.log('key:', key)
    console.log('value:', person[key])
})

//контекст

person.info()

//можно ли сравнивать через === объекты?

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },

    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`${key}": ${this[key]}`)
        })
    },
        // Object.keys(this).forEach(function(key) {
        //     console.log(`${key}": ${this[key]}`)
        // }//.bind(this)//можем привязать контекст здесь) 
        //const self = this //можем сохранить контекст
        //не стрелочная функция не будет работать, будут undefined
        //функция задает новый контекст, стрелочная нет

        withParams(top = false, between = false, bottom = false) {
            if (top) {
                console.log('--- Start ---')
            }
            Object.keys(this).forEach((key, index, array) => {
                console.log(`${key}": ${this[key]}`)
                if (between && index !== array.length - 1) {
                    console.log('-------')
                }
            })
                if (bottom) {
                    console.log('---- End ----')
                }
            }
        
    


    }


const bound = logger.keys.bind(person)
bound()

//bind биндит контекст, меняет this на переданный объект и возвращает функцию

logger.keys.call(person)
//bind возвращает функцию, call вызывает функцию сразу

logger.keysAndValues.call(logger)
logger.keysAndValues.call(person)
logger.keysAndValues.call({a: 1, c: 2})


logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true]) //параметры в массиве

