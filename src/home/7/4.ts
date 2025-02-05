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
  interval: number;
  count: number;
  onTimeout: (i: number) => void;
  onTimerStopped: () => void;
};

type Timer = {
  isActive: boolean;
  settings: TimerSettings;
  start: () => void;
  stop: () => void;
};

const createTimer = (settings: TimerSettings): Timer => {
  const timer = {
    isActive: false,
    settings,
    start: () => {
      const run = input('Запустить таймер (yes or no): ')
    },
    stop: () => {
      const stop = input('Остановить таймер (yes or no): ')
    },
  };

  return timer;
};

let totalCount = 0

const timer = createTimer({
  interval: 1,
  count: 5,
  onTimeout: (i) => {
    print(`№${i}`)
  },
  onTimerStopped() {
    print(`Таймер остановлен, количество срабатываний: ${totalCount}`)
  },
})
console.log('timer', timer)

timer.start()
timer.start() // не должно срабатывать побочных эффектов
console.log(timer.isActive) // true
timer.stop()
console.log(timer.isActive) // false
console.log(timer.settings) // interval count
// timer.isActive = true // здесь должна быть ошибка
