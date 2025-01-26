
// 2-3 попытки
// TODO: играть против компьютера или второго игрока
// TODO
// ? 1. избавиться от null, использовать inputNumber
// 2. добавить выбор, с кем играть: против компьютера или другого игрока
// - перед вторым игроком нужно очистить экран
// - выбор без копипасты`
// Ножницы — это бросок, который используется реже всего, с вероятностью попадания всего 29,6% в обычной игре в «Камень, ножницы, бумагу».

import { inputNumber } from '../lib'

type Thing = 'Камень'| 'Ножницы'| 'Бумага'
type Winner = 1 | 2 | 0

const generateComputerMove = () => {
  const randoms = random(1, 100)
  
  if (randoms < 29) {
    return 'Камень'
  } else if (randoms >= 29+35) {
    return 'Бумага'
  } else {
    return 'Ножницы'
  }
}

const inputPlayerMove = (): Thing => {
  const n = inputNumber(
    'Чем ты хочешь походить (1 - Камень, 2 - Ножницы, 3 - Бумага): ',
    (n) => n == 1 || n == 2 || n == 3
  )
  
  switch (n) {
    case 1:
      return 'Камень'
    case 2:
      return 'Ножницы'
    case 3:
      return 'Бумага'
  }
}

const checkWinner = (playerMove: Thing, computerMove: Thing): Winner=> {
  if (playerMove === computerMove) {
    return 0 // "Ничья!"
  } 
  else if (
    (playerMove === 'Камень' && computerMove === 'Ножницы') ||
    (playerMove === 'Ножницы' && computerMove === 'Бумага') ||
    (playerMove === 'Бумага' && computerMove === 'Камень')
  ) {
    return 1
  } 
  else {
    return 2 // "Компьютер выиграл!"
  }
}

const inputOpponentPlayerMove = () => {
  console.clear()
  const move = inputPlayerMove()
  console.clear()
  return move
}

const inputOpponentComputerMove = () => {
  const move = generateComputerMove()
  print(`Компьютер выбрал: ${move}`)
  return move
}

const startGame = (): void => {
  let score_player_first = 0
  let score_player_second = 0

  const start = inputNumber(
    'Вы запустили игру "Камень, ножницы, бумага". Хотите поиграть? (1 - да, 2 - нет): ',
    n => n == 1 || n == 2
  )

  if (start == 2) {
    return print('Жаль. Удачи)')
  }

  const compOrPlayer = inputNumber(
    'Вы будете играть в крестики нолики с человеком или с компом (1 - с компом 2 - с человеком: ',
    n => n == 1 || n == 2
  )


  const inputOpponentMove = (
    compOrPlayer === 1 
      ? inputOpponentComputerMove
      : inputOpponentPlayerMove
  )

  // TODO: 2 функции, аналогично inputOpponentMove
  // const printWinner

  while (true) {
    const firstPlayerMove = inputPlayerMove()
    const secondPlayerMove = inputOpponentMove()
    const winner = checkWinner(firstPlayerMove, secondPlayerMove)

    // printWinner(winner)
    
    if (winner === 1){
      // print('Вы выиграли! Вы молодец))')
      score_player_first++
      if (score_player_first === 2) {
        return print('Игрок ты выйграл)')
      }
    }
    else if (winner === 2){
      // print('Вы проигралли) Вы лох))))')
      score_player_second++
      if(score_player_second === 2) {
        return print('Ну ты лох тебя ии обыграл)))')
      }
    }
    // else{
    //   print('Ничья пупсики))')
    // }

    print('Ну что новый раунд)')
    console.clear()
  }
}

startGame()
