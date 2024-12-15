import {clearInterval} from "node:timers";

export {}

// 3. Таймер со счётчиком
// Создать функцию, которая аналогична предыдущей,
//  // только теперь вызывается каждую секунду указанное количество раз.
// В функцию-колбэк сообщаем, который раз срабатывает таймер

// // постоянный до остановки
// const intervalId = setInterval(
//     () => {
//         print('выполняется через каждую 1 секунду')
//     },
//     1000
// )
// clearInterval(intervalId) // остановить таймер

function startTimer(second:number, callback: () => void) {
  const timeoutId = setTimeout(
      () => {
          print(`${second} секунд`)
          return callback();
      },
      second * 1000
  )
}

startTimer(
  Number(input('Количество секунд: ')),
  () => print('СТОП!')
)