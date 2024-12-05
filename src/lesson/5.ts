export {}

// --- ЗАМЫКАНИЯ ---

const user = 'admin'
let authorizationsCount = 0

const authorize = (username: string) => {
  authorizationsCount++
  if (username === user) {
    print(`Добро пожаловать!`)
  } else {
    print(`Доступ запрещён!`)
  }
}

authorize(`user`)
authorize(`admin`)

print(`Количество попыток: ${authorizationsCount}`) // 2

// НЕ использовать замыкания глобальных let-переменных вне колбэков (антипаттерн "глобальные переменные")
// можно использовать замыкания const




// --- HOF (функции высшего порядка) ---
// функция, которая в результате выполнения возвращает функцию

const createGreeting = (firstName: string) => {
  let savedName = firstName
  return (newName?: string) => {
    if (newName) {
      savedName = newName
    }
    print(`Hello, ${savedName}!`)
  }
}
const printGreetingMessage = createGreeting(`noname`)
printGreetingMessage() // `Hello, noname!`
printGreetingMessage(`Vit`) // `Hello, Vit!`
printGreetingMessage() // `Hello, Vit!`


// --- CALLBACK (функции обратного вызова) ---
// функция, которая принимает функцию в качестве значения параметра (подробнее изучим позже)

const printHello = () => {
  print('Hello, world!')
}

const repeat = (n: number, action: () => void) => {
  for (let i = 0; i < n; i++) {
    action()
  }
}
repeat(3, printHello) // 3 раза напишет 'Hello!'




// отличие присваивания от выполнения
const newHello = printHello // только присвоение (алгоритм копируется в новую переменную)
newHello() // <- выполнение здесь



// 3 аналогичных варианта
repeat(2, printHello)
repeat(2, () => print('Hello'))
repeat(2, () => printHello()) // двойная работа, просто для примера
// ничего не выведет
repeat(2, () => printHello)


// Пример вызова анонимной функции (сразу из литерала, не из переменной)
// testValue = 6
const testValue = ((number: number): number => (
  number * 2
))(3)

// Пример вызова анонимной функции, возвращённой из другой функции
const hof = (n: number) => {
  return (s: string) => {
    return `${s}${n}`
  }
}
const resultString = hof(1)('a') // "a1"




// --- ТАЙМЕРЫ в JS ---

// одноразовый
const timeoutId = setTimeout(
  () => print('выполнится 1 раз через 1 секунду'), // колбэк - что сделать
  1000 // время - через какое количество миллисекунд
)
clearTimeout(timeoutId) // отменить вызов колбэка до срабатывания


// постоянный до остановки
const intervalId = setInterval(
  () => {
    print('выполняется через каждую 1 секунду')
  },
  1000
)
clearInterval(intervalId) // остановить таймер


