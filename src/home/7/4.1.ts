export {}

/*
  TODO: переписать на классы
*/

type TimerSettings = {
  readonly count: number
  readonly interval: number
  readonly onTimeout: (i: number) => void
  readonly onTimerStopped: () => void  
}

type Timer = {
  readonly isActive: boolean
  readonly settings: TimerSettings
  readonly start: () => void
  readonly stop: () => void
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
    console.log(timer.isActive)
  },timer.settings.count * 1000)

// timer.start() // не должно срабатывать побочных эффектов
// console.log(timer.isActive) // true
// timer.stop()
// console.log(timer.isActive) // false
// console.log(timer.settings) // interval count
// // timer.isActive = true // здесь должна быть ошибка
