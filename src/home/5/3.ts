import {clearInterval} from "node:timers";

export {}

// 3. Таймер со счётчиком
// Создать функцию, которая аналогична предыдущей,
//   // только теперь вызывается каждую секунду
// ! указанное количество раз.
// В функцию-колбэк сообщаем, который раз срабатывает таймер

//  постоянный до остановки
// const intervalId = setInterval(
//     () => {
//         print('выполняется через каждую 1 секунду')
//     },
//     1000
// )
// clearInterval(intervalId) // остановить таймер

// function startTimer(second:number, callback: () => void) {
//   const timeoutId = setTimeout(
//       () => {
//           print(`№${second}`)
//           return callback();
//       },
//       second * 1000
//   )
// }

// startTimer(
//   Number(input('Количество раз: ')),
//   () => print('СТОП!')
// )


// function startTimer(second: number, callback: () => void) {
//   const timeoutId = setTimeout(() => {
//     while (second < 0){
//       second--
//       print(second); // Исправлено: выводим second
//     }
//     callback();
//   }, second * 1000);
// }

// startTimer(
//   Number(input('Количество раз: ')),
//   () => print('СТОП!')
// )


function startTimer(seconds: number, callback: () => void) {
  const intervalId = setInterval(() => {
      if (seconds > 0) {
          print(seconds)
          callback()

      } else {
          clearInterval(intervalId)
      }
  }, 1)
}

startTimer(
  Number(input('Количество секунд: ')), 
  () => print()
)
