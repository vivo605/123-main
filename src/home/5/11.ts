export {}

// постоянный до остановки
// const intervalId = setInterval(
//   () => {
//     print('выполняется через каждую 1 секунду')
//   },
//   1000
// )
// clearInterval(intervalId) // остановить таймер

// ! const timeoutId = setTimeout(
// !   () => print('выполнится 1 раз через 1 секунду'), // колбэк - что сделать
// !  1000 // время - через какое количество миллисекунд
// ! )
// !clearTimeout(timeoutId) // отменить вызов колбэка до срабатывания



print("START")

// const intervalId = setInterval(
//   () => {
//     print(">3")
//     clearInterval(intervalId)
//   },
//   2000
// )

setTimeout(
  () => {
    print(">3")
  },
  2000
)

