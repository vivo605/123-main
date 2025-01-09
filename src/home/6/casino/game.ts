import { 
  printGreeting,
  printWinnerText,
  printLooserText,
  printBye,
  printResultColor,
} from './texts'

import { 
  inputStartBalance,
  inputPlayerColor,
  inputBet,
  generateRandomColor,
  playerWantContinue,
} from './inputs'

export const startGame = () => {
  printGreeting()

  let balance = inputStartBalance()

  do {
    console.clear()
    const playerColor = inputPlayerColor()
    const bet = inputBet(balance)
    const resultColor = generateRandomColor()

    printResultColor(resultColor)

    if (playerColor === resultColor) {
      printWinnerText()
      balance += bet
    } else {
      printLooserText()
      balance -= bet
    }
  } while (balance > 0 && playerWantContinue())

  console.clear()
  printBye()
}
