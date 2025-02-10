import { count } from "console"

export {}

/*
  4. Таймер с настройками
  Создать функцию, которая принимает настройки и возвращает таймер

  Настройки включают
  - интервал (в секундах)
  - количество срабатываний
  - обработчик во время срабатывания таймера
  - обработчик после завершения всех повторений

  Таймер включает
  - информацию о сохранённых настройках интервала и количества срабатываний
  - запущен ли
  - функцию запуска (можно указать новый интервал и количество срабатываний)
  - функцию остановки
  // вернуть объект
  
  const giveBirthChild = (name: string): User => {
    return {
      name: name,
      age: 0,
    }
  }
  const child: User = giveBirthChild('Maxim')

*/
type TimerSettings = {
  interval: number
  count: number
  onTimeout: (i: number) => void
  onTimerStopped: () => void  
}

type Timer = {
  readonly isActive: boolean
  settings: TimerSettings
  start: () => void
  stop: () => void
}


const createTimer = (settings: TimerSettings): Timer => {
  let id: NodeJS.Timeout 
  const timer = {
    isActive: false,
    settings,
    start: () => {
      let i = 0
      timer.isActive = true
      id = setInterval(() => {
        i++
        settings.onTimeout(i)
        if (i === settings.count){
          timer.isActive = false
          clearInterval(id)
          settings.onTimerStopped()
        }
      }, settings.interval*1000)
    },
    stop: () => {
      timer.isActive = false
      clearInterval(id)
      settings.onTimerStopped() //просто печатает)
    },
  }
  
  return timer
}

// start

let totalCount = 0

const timer = createTimer({
  interval: 1,
  count: 10,
  onTimeout: (i) => {
    print(`№${i}`)
    totalCount++
  },
  onTimerStopped () {
    print(`Таймер остановлен, количество срабатываний: ${totalCount}`)
    console.log(timer.isActive) // false
  },
})
// console.log('timer', timer)

// timer.isActive = true // TODO: должна подтсвечиваться ошибка (readonly)
timer.start()
setTimeout(
  () => {
    timer.stop()
    console.log(timer.isActive) // false
  },
  1000
)
// console.log(timer.isActive, timer.isActive = false) // false

// timer.start() // не должно срабатывать побочных эффектов
// console.log(timer.isActive) // true
// timer.stop()
// console.log(timer.isActive) // false
// console.log(timer.settings) // interval count
// // timer.isActive = true // здесь должна быть ошибка
