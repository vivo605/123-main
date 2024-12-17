export {}

// 5. Декомпозиция Mare Nostrum
// Нужно разделить логику игры на удобные функции, из которых как из конструктора складывается легко читаемая логика


// 5. Кубики для настольной игры "Mare Nostrum"
// Представим, что в провинции начинается сражение между двумя игроками. 
// Нам нужно посчитать количество очков за каждого игрока по очереди, чтобы определить потери сторон. 

// За атакующего игрока спрашиваем количество легионов (фишек воинов) в отряде. 
// За обороняющегося игрока спрашиваем количество легионов и крепостей в провинции.
 
// За каждую крепость прибавляем 6. 
// За каждый легион прибавляем случайное число от 1 до 6. 
// Все слагаемые выводим через "+". 
// Сумму делим на 5 с округлением в меньшую сторону, чтобы получить количество убитых юнитов, 
// результат выводим на экран. 

// Например:
// Атакующий: 4 + 3 + 5 = 12 (-2 юнита)
// Обороняющийся: 6 (крепость) + 5 + 3 = 14 (-2 юнита)


// const atack_dice = random(1, 6)
// const defender_dice = random(1, 6)

// let info_atack = 'Атакующий: '
// let info_defender = 'Обороняющийся: '

// const defender = ()=>{
//   for (let defender_broski = 1; defender_broski <= defender_legion; defender_broski++){
//     const defender_dice = random(1, 6)
//     defender_score += defender_dice
//     info_defender += `${defender_dice}`

//     if (defender_broski < defender_legion){
//       info_defender += ' + '
//     }
//   }
// }

// const atack = ()=>{
//   for (let atack_broski = 1; atack_broski <= attacking_legions; atack_broski++) {
//     const atack_dice = random(1, 6)
//     atack_score += atack_dice
//     info_atack += `${atack_dice}`
//     if (atack_broski < attacking_legions){
//       info_atack += ' + '
//     }
//   }
// }

// const defender_info = ()=>{
//   info_defender += ' = '
//   info_defender += defender_score
//   print(info_defender)
// }

// const atack_info = ()=>{
//   info_atack += ' = '
//   info_atack += atack_score
//   print(info_atack)
//   print(`Убитых атакующих: ${Math.floor(atack_score / 5)}`)
//   print(`Убитых защищаюхся: ${Math.floor(defender_forts / 5)}`)
// }

// atack()
// defender()
// atack_info()
// defender_info()

const print_info = (legions:number, forts?:number) => {
  let score = 0
  let info = ''

  if (forts == undefined) {
    if (legions < 1 || legions > 8) {
      return print("В атаке должно быть от 1 до 8 легионов")
    }
    info += 'Атакующий: '
  }
  else {
    if (legions < 0 || legions > 8) {
      return print("В обороне должно быть от 0 до 8 легионов")
    }
    if (forts < 0 || forts > 2){
      return print("Давай занова ) Крепостей можно от 0 до 2)")
    }
    info += 'Обороняющийся: '
  }

  if (forts) {
    score += forts*6
    info += `${forts*6} (крепость)` // TODO: "+" между крепостями и легионами
    if (legions > 0){
      info += ' + '
    }
  }

  for (let i = 1; i <= legions; i++) {
    const dice = random(1, 6)
    score += dice
    info += `${dice}`

    if (i < legions){
      info += ' + '
    }
  }
  
  if (forts || legions) {
    info += ` = ${score} (-${Math.floor(score / 5)} юнита)`
  }
  else {
    info += 'потерь нет'
  }
  
  print(info)
}

const start = () => {
  const attacking_legions = Number(input("Сколько у тебя легионов в отряде: "))
  const defender_legion = Number(input("Сколько легионов в провинции: ")) 
  const defender_forts = Number(input("Сколько крепостей в провинции: "))

  print_info(attacking_legions)
  print_info(defender_legion, defender_forts)
}

start()


/*
не хватает =
2 0 2
Атакующий: 3 + 1 = 4 (-0 юнита)
Обороняющийся: 12 (крепость)  = 12 (-2 юнита)
*/
