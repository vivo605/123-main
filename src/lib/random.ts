import { randomInt } from 'crypto'

declare global {
  const random: (min: number, max: number) => number
}

(global as any).random = (min: number, max: number): number => {
  if (min !== Math.trunc(min) || max !== Math.trunc(max)) {
    throw new Error('Invalid parameters: random(min: int, max: int): int')
  }
  return randomInt(min, max + 1)
}
