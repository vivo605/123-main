export {}
// 3. Таймер со счётчиком
// Создать функцию, которая аналогична предыдущей,
// только теперь вызывается каждую секунду
// ! указанное количество раз.
// В функцию-колбэк сообщаем, который раз срабатывает таймер


function startTimer(count: number, callback: (i: number) => void) {
  let i = 1
  const intervalId = setInterval(() => {
    callback(i++)
    if (i > count) {
      clearInterval(intervalId)
    }
  }, 1000)
}

startTimer(
  Number(input('Количество: ')), // 2
  (i) => print(i)
)
