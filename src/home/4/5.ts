export {}

// 5. Декомпозиция Mare Nostrum
// Нужно разделить логику игры на удобные функции, из которых как из конструктора складывается легко читаемая логика

// const attacking_legions = Number(input("Сколько у тебя легионов в отряде: "))
// const defender_legion = Number(input("Сколько легионов в провинции: ")) 
// const defender_forts = Number(input("Сколько крепостей в провинции: ")) * 6

// let atack_score = 0
// let defender_score = 0

// let info_atack = 'Атакующий: '
// let info_defender = 'Обороняющийся: '

// defender_score += defender_forts
// if (defender_forts > 0){
//   info_defender += `${defender_forts} (крепость) + `
// }

// for (let atack_broski = 1; atack_broski <= attacking_legions; atack_broski++) {
//   const atack_dice = random(1, 6)
//   atack_score += atack_dice
//   info_atack += `${atack_dice}`
  
//   if (atack_broski < attacking_legions){
//     info_atack += ' + '
//   }
// }

// for (let defender_broski = 1; defender_broski <= defender_legion; defender_broski++){
//   const defender_dice = random(1, 6)
//   defender_score += defender_dice
//   info_defender += `${defender_dice}`
  
//   if (defender_broski < defender_legion){
//     info_defender += ' + '
//   }
// }


// info_atack += ' = '
// info_atack += atack_score

// info_defender += ' = '
// info_defender += defender_score

// print(info_atack)
// print(info_defender)
// print(`Убитых атакующих: ${Math.floor(atack_score / 5)}`)
// print(`Убитых защищаюхся: ${Math.floor(defender_forts / 5)}`)


const printResult = (legions: number, fortres?: number) => {
  // if () {
  //   return
  // }.
}

printResult(2) // аткакующих легионов [1..8]
printResult(0, 1) // обороняющихся легионов [0..8], крепостей [0..2]
