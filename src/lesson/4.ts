export {}
// --- СОЗДАНИЕ ФУНКЦИИ --- 

// function - не используемся без надобности (* затеняет this, arguments, область видимости)

f1() // вызов функции перед её объявлением - нет ошибки
function f1() {
}
f1()

// стрелочная функция
// f2() // ошибка
const f2 = () => {

}
f2()


// --- ОСНОВЫ ДЕКОМПОЗИЦИИ ---

// Напечатать 2 раза текст 'Hello!'

// вариант 1
console.log('Hello,')
console.log('world!')
console.log('Hello,')
console.log('world!')

// вариант 2
const printHello = () => {
  console.log('Hello,')
  console.log('world!')
}
printHello()
printHello()



// --- ПАРАМЕТРЫ (отличие от локальных переменных) ---

const printGreeting = (name: string) => {
  const message = `Hello, ${name}!`
  console.log(message)
}
printGreeting('Vit')
printGreeting('noname')


// --- ВОЗВРАТ ЗНАЧЕНИЯ (отличие от вывода на консоль) ---

// если есть ветвления, лучше указать возвращаемый тип

const loudNumber = (num: number): string => {
  return `${num}!` // num + '!'
}
const newNumber = loudNumber(111) // newNumber = '111!'
print(loudNumber(123)) // '123!'

printHello()



const sum1 = (n1: number, n2: number) => {
  // ...
  return n1 + n2
}
const sum2 = (n1: number, n2: number) => n1 + n2

print(sum1(2, 3)) // 5
print(sum2(2, 3)) // 5



// --- ОПЦИОНАЛЬНЫЕ параметры, значения по умолчанию ---

const printMessage = (message?: string) => {
  const name = message ? message : `anonymous`
  print(`Hello, ${name}!`)
}
printMessage() // `Hello, anonymous!`
printMessage(`Vit`) // `Hello, Vit!`


// const pow: (n: number, exponent?: number) => number
const pow = (n: number, exponent = 2) => n ** exponent
pow(3) // 9 (3**2)
pow(3, 3) // 27 (3**3)


// --- концепция ПОТОК (источник -> назначение) ---
/*
  ИСТОЧНИК
  1. литерал
  2. переменная
  3. выражение
  4. результат выполнения функции

  НАЗНАЧЕНИЕ
  1. управляющая конструкция
  2. переменная
  3. выражение
  4. параметр функции
*/
