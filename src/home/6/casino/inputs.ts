import { inputNumber } from '../../lib'
import { PlayerColor, RandomColor } from './types'

export const inputStartBalance = () => inputNumber(
  'Введите стартоывй баланс: ', 
  (n) => (
    Number.isInteger(n) && 
    n > 0
  )
)

export const inputBet = (balance: number): number => inputNumber(
  'Введите ставку: ', 
  (n) => (
    Number.isInteger(n) && 
    n > 0 && 
    n <= balance
  )
)

export const inputPlayerColor = (): PlayerColor => {
  const choise = inputNumber(
    'Выберите цвет (1 - красное, 2 - черное): ', 
    (n) => n == 1 || n == 2
  )

  switch (choise) {
    case 1:
      return 'red'
    case 2:
      return 'black'
  }
}

// с вероятностью 30% попадает на один из 2х цветов 
// и в оставшиеся 40% падает на зелёный цвет
export const generateRandomColor = (): RandomColor => {
  const resultColor = random(1, 100)
  if (resultColor <= 30) {
    return 'red'
  }
  if (resultColor >= 31 && resultColor <= 60){
    return 'black'
  }
  else {
    return 'green'
  }
}

export const playerWantContinue = (): boolean => {
  const choise = inputNumber(
    'Хотите сыграть еще раз? (1 - да, 2 - нет): ', 
    (n) => n == 1 || n == 2
  )

  switch (choise) {
    case 1:
      return true
    case 2:
      return false
  }
}
