export{}

// 2. Таймер
// Создать функцию-обёртку над setTimeout,
// которая аналогична функции setTimeout, 
// только параметры поменять местами:
// сперва принимать количество секунд(!), затем колбэк (call back)

// const timeoutId = setTimeout(
//   () => print('выполнится 1 раз через 1 секунду'), // колбэк - что сделать
//   1000 // время - через какое количество миллисекунд
// )

function startTimer(second:number, callback: () => void) {
  const timeoutId = setTimeout(
    callback,
    second * 1000
  )
}

startTimer(
  Number(input('Количество секунд: ')), 
  () => print('СТОП!')
)
