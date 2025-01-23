export type Validator<N extends number> = (
  ((num: number) => boolean)
  | ((num: number) => num is N)
) 

export const inputNumber = <N extends number>(message?: string, validator?: Validator<N>): N => {
  while (true) {
    const text = input(message)
    const n = Number(text)
    if (text !== '' && isFinite(n) && (validator?.(n) ?? true)) {
      return n as N
    }
    print('Ошибка!')
  }
}
