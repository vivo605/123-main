export {}

// --- СТРУКТУРЫ ---

type User = {
  name: string
  age: number
}

// структура - переменная, внутри которой хранятся другие переменные (свойства/properties)
const user: User = {
  name: 'Vit',
  age: 15,
} // as const

// { } - интерпретируются как объект там где передаётся значение (иначе означают блок команд)
// вместо = вложенные значения присваиваются через : (не путать с указанием типа)

// вывод на консоль
console.log(user) // debug
print(user.name) // get property
user.age = 12 // set property
console.log(user.age) // 12


// --- ПОЛЬЗОВАТЕЛЬСКИЕ ТИПЫ ---

// type User = { } // Повторяющийся идентификатор "User"

// interface - расширяемые объекты, расширение может быть непредсказуемым
// как function - не используем, за исключением метапрограммирования
interface UserInterface {
  name: string
}
interface UserInterface {
  age: number
}
const userInterface: UserInterface = {
  name: 'noname',
  age: 10,
}


// readonly - const property
type Card = {
  readonly id: string
  comment: string
}
const card: Card = {
  id: 'new',
  comment: '',
}
// card.id = 'old' // Ошибка
card.comment = 'shop card'
print(card.id)


// --- ОБЪЕКТЫ И ФУНКЦИИ ---

// принять объект
const getUserInfo = (user: User) => `${user.name} (${user.age})`
print(getUserInfo(user))

// вернуть объект
const giveBirthChild = (name: string): User => {
  return {
    name: name,
    age: 0,
  }
}
const child: User = giveBirthChild('Maxim')


// короткая функция
// ({...})
const quickGiveBirthChild = (name: string): User => ({
  name, // name: name,
  age: 0,
})

// Ошибка: { } воспринимаются как блок, а не как объект
// const quickGiveBirthChild2 = (name: string): User => {
//   name: name,
//   age: 0,
// }


// функции внутри объектов

const Lib = {
  printHello: (name: string) => print(`Hello, ${name}`),
  readName: () => input('What is your name? '),
}

// Lib.printHello(
//   Lib.readName()
// )


// --- ДЕСТРУКТУРИЗАЦИЯ (распаковка) ---
// получение нескольких свойств объекта в переменные

// способ в несколько действий
// const name = user.name
// const age = user.age

// способ в одно действие
const { name, age } = user // name, age
console.log(name, age)


const userShortInfo = ({ name, age }: User) => `${name} (${age})`
userShortInfo(user)
userShortInfo({ name: 'name', age: 1 })


// --- АДРЕСАЦИЯ ---

// простые типы (копируют значение)
let str1 = 'first string'
let str2 = str1
str1 = 'other string'
str2 // 'first string'

// сложные типы (копируют ссылку на значение)
const object1 = { value: 1 }
const object2 = object1
const object3 = structuredClone(object1)
object1.value++
object2.value // 2
object3.value // 1
console.log(object3.value)


