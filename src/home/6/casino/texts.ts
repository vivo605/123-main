import { inputStartBalance } from './inputs'
import { RandomColor, translateColor } from './types'

export const printGreeting = () => {
  print('Привет пупсик))) Это казино) Давай нам все деньги или мы сами заберём)))')
}

export const printResultColor = (color: RandomColor) => {
  print(`Выпал ${translateColor(color)} цвет!`)
}

export const printWinnerText = () => {
  print('Ты молодец, ты победил)')
}

export const printLooserText = () => {
  print('Ты проиграл спасибо за ваши деньги)')
}

// TODO:
// если нет денег то вышварнуть из казино))
// если выиграл, попросить не возвращаться
// если проиграл, но не всё, предложить поскорее возвращаться
export const printBye = (balance: number, startBalance: number) =>{
  if (balance <= 0){
    print('Окак, ты бомж)))) Возвращайся с деньгами!')
  }
  else if (balance > startBalance){
    print('Ты выйграл?)) Иди отсюда))')
  }
  else{
    print('Ты проиграл?) Ну тогда давай за деньгами иди и обратно сюда отыграть)))')
  }
}
