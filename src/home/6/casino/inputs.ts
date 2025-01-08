// TODO
// число > 0
export const inputStartBalance = (): number => {
  return 100 // inputNumber()
}

// TODO
export type PlayerColor = 'red' | 'black'
export const inputPlayerColor = (): PlayerColor => {
  return 'red' // input + проверки
}

export type RandomColor = PlayerColor | 'green'
export const generateRandomColor = (): RandomColor => {
  return 'red' // random + проверки
}
