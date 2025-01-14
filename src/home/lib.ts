export type Validator = (num: number) => boolean

export const inputNumber = (message?: string, validator?: Validator): number => {
  while (true) {
    const text = input(message)
    const n = Number(text)
    if (text !== '' && isFinite(n) && (validator?.(n) ?? true)) {
      return n
    }
    print('Ошибка!')
  }
}
