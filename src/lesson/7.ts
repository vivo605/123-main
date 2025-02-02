export {}

// --- СТРУКТУРЫ ---

type User = {
  name: string
  age: number
  bio?: string
}

// структура - переменная, внутри которой хранятся другие переменные (свойства/properties)
const user: User = {
  name: 'Vit',
  age: 15,
  // address: {
  //   street: 'name',
  //   house: 12,
  // }
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
Lib.printHello(
  Lib.readName()
)

// class Libery {
//   printHello(name: string): void {
//     print(`Hello, ${name}`)
//   }
//   readName(): string {
//     return input('What is your name? ')
//   }
// }
// const lib = new Libery()
// lib.printHello(
//   lib.readName()
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

const setName = (user: Readonly<User>, name: string) => {
  // user.name = name
}
setName(user, 'noname')
user.name // noname

let n = 1
const setNumber = (n: number) => {
  n = 10
}
setNumber(n)
n // 1



// --- ОБЪЕДИНЕНИЯ ТИПОВ ---

// смешанные типы

type Student = User & {
  rating: number
}

// const student: Student = {
//   name: user.name,
//   age: user.age,
//   rating: 10,
// }
// const student: Student = {
//   ...user,
//   rating: 10,
// }
const student: Student = Object.assign(
  structuredClone(user), 
  {
    rating: 10,
  }
)

// более общие типы подходят частным подмножествам
getUserInfo(student) // Vit (15)
// но не наоборот
// const student2: Student = user // Ошибка: Свойство "rating" отсутствует

// подмножествам недоступны свойства общего типа
const person: User = student
// person.rating // Ошибка: Свойство "rating" не существует в типе "User"

// --- ПРОВЕРКА ТИПОВ ---
// важная особенность JS: проверки типов делаются на этапе выполнения!
// не на этапе компилляции (это одновременно упрощение и усложнение)

const isStudent = (user: User): user is Student => (
  typeof (user as Student).rating === 'number'
)

if (isStudent(person)) {
  person.rating = 8 // ошибки нету
}

const isUser = (value: unknown): value is User => (
  typeof value === 'object'
  && 
  value !== null
  &&
  typeof (value as User).age === 'number'
  &&
  typeof (value as User).name === 'string'
)

let smth = input() as unknown

if (isUser(smth)) { // проверять можем абсолютно любые значения
  smth.name // здесь мы проверили, что это User,иначе сюда мы не зайдём
}



// вариативные типы

type Client = {
  company: true
  representative: User 
} | { 
  company: false
  name: string 
}

const entity: Client = {
  company: true,
  representative: user,
}

const individual: Client = {
  company: false,
  name: 'Tom',
}

const greetClient = (client: Client) => {
  if (client.company) {
    print(`Здравствуйте, ${client.representative.name}!`)
  } else {
    print(`Приветствуем, ${client.name}.`)
  }
}

greetClient(entity) // `Здравствуйте, Vit!`
greetClient(individual) // `Приветствуем, Tom.`



// --- СОПОСТАВЛЕНИЯ (отличие от структуры) ---

// тип
type Dictionary = {
  // ключ всегда string | number, либо их вариации, значение любое
  [key in string]: string // en-ru
}

// type Dictionary = {
//   // только для string | number, не для пользовательских перечислений
//   [key: string]: string // en-ru
//   test: string
// }

// создание хранилища
// const dictionary: Dictionary = {}
const word = 'melone'
const dictionary: Dictionary = {
  apple: 'яблоко',
  'pear txt': 'груша',
  [word]: 'дыня',
  // 'sdsaasd': undefined
}

// установка значений
dictionary['apple'] = 'яблоко'
dictionary['pear'] = 'груша'
// dictionary.melone = 'дыня' // так тоже можно, но НЕ НУЖНО - сложнее различать структуры от сопоставлений

const w = dictionary['asd']
print(dictionary['apple']) // яблоко

// удаление значений
delete dictionary['melone']

if (dictionary['asd']) {}
if (typeof dictionary['asd'] === 'undefined') {}
if ('asd' in dictionary) {}


user.bio = undefined
if ('bio' in user) {} // true
delete user.bio
if ('bio' in user) {} // false

// вывод на консоль аналогичный - для js это такой же объект, как и структура
console.log(dictionary)
// { apple: 'яблоко', 'pear txt': 'груша', pear: 'груша' }

// деструктуризация сопоставления также аналогична
const { apple, pear } = dictionary

// итерация - перебор всех значений в словаре

for (const eng in dictionary) {
  const ru = dictionary[eng]
  print(`${eng} - ${ru}`)
}
for (const key in dictionary) {
  const value = dictionary[key]! // опасно, но в этом случае можно
  print(`${key} - ${value}`)
}

/*
Ограничения свойств объектов:
  структура - фиксированные названия, любые типы
  сопоставление - любые названия, фиксированный тип
*/

// лучше не использовать числа в качестве ключей
// number/enum key

type Variant = 1 | 2 | 3

type VariantsText = {
  // in - для пользовательских перечислений, относящихся к string | number
  [key in Variant]: string
}

// const texts: VariantsText = {
//   [1]: 'one',
//   [2]: 'two',
//   [3]: 'three',
// }

const texts = {
  [1]: 'one',
  [2]: 'two',
  [3]: 'three',
} as const satisfies VariantsText

const text = texts[1]

for (const v in texts) {
  const text = texts[Number(v) as Variant]
}


type Order = {
  user: User
  address: {
    street: string
    house: number
  }
}
const order: Order = {
  // user: user,
  user,
  address: {
    street: '',
    house: 12,
  }
}