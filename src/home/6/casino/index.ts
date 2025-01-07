import { printGreeting } from './texts'
import { inputStartBalance } from './inputs'

printGreeting()

let balance = inputStartBalance()

do {
  const playerColor = inputPlayerColor() // (ч/к) 
  const bet = inputBet(balance)
  const resultColor = generateRandomColor() // (ч 30% / к 30% / з 40% )

  printResultColor(resultColor)

  if (playerColor === resultColor) {
    printWinnerText()
    balance += bet
  } else {
    printLooserText()
    balance -= bet
  }
} while (balance > 0 && playerWantContinue())

// напечатать завершающий текст
printBye()
// если нет денег то вышварнуть из казино))
// если выиграл, попросить не возвращаться
// если проиграл, но не всё, предложить поскорее возвращаться
