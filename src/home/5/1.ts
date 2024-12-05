export{}
// 1. Счётчик
// Написать функцию createCounter, которая возвращает другую функцию. 
// Возвращаемая функция должна при каждом вызове увеличивать счётчик на 1.

// const createGreeting = (firstName: string) => {
//   let savedName = firstName
//   return (newName?: string) => {
//     if (newName) {
//       savedName = newName
//     }
//     print(`Hello, ${savedName}!`)
//   }
// }
// const printGreetingMessage = createGreeting(`noname`)
// printGreetingMessage() // `Hello, noname!`
// printGreetingMessage(`Vit`) // `Hello, Vit!`
// printGreetingMessage() // `Hello, Vit!`


// Пример использования:
// const counter = createCounter()
// print(counter()) // вывод: 1
// print(counter()) // вывод: 2





// TODO

// function createCounter(number?:number) {
//   number = 0
//   let nunbers = number++
//   return nunbers
// }


// const counter = createCounter()
// print(counter())