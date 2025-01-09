export{}

// 5. Валидатор
// Дописать inputNumber, который вторым параметром принимает функцию, она проверяет введённое число на соответствие заданным услоловиям.
// Пока число не соответствует условию, просим ввести заново.

type Validator = (num: number) => boolean

const inputNumber = (message: string, validator?: Validator): number => {
  while (true) {
    const text = input(message) // "123"
    const n = Number(text) // 123
    if (text !== '' && isFinite(n) && (validator?.(n) ?? true)) {
      return n
    }
    print("Ошибка!")
  }
}

const n1 = inputNumber('Введите первое число: ')
print(n1)

const n2 = inputNumber('Введите второе число: ', (n) => n > 0)
print(n2)
