export {}

// 5. Декомпозиция Mare Nostrum
// Нужно разделить логику игры на удобные функции, из которых как из конструктора складывается легко читаемая логика

const printResult = (player: string, legions: number, fortres?: number) => {
  // if () {
  //   return
  // }.
}

printResult('Атакующий', 2) // легионов [1..8]
printResult('Обороняющийся', 0, 1) // легионов [0..8], крепостей [0..2]
