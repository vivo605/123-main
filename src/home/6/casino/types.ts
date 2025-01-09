export type PlayerColor = 'red' | 'black'
export type RandomColor = PlayerColor | 'green'

export const translateColor = (color: RandomColor): string => {
  switch (color) {
    case 'red': return 'красный'
    case 'black': return 'чёрный'
    case 'green': return 'зелённый'
  }
}
