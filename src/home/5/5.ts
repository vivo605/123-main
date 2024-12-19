export{}

// 5. Валидатор
// Дописать inputNumber, который вторым параметром принимает функцию, она проверяет введённое число на соответствие заданным услоловиям.
// Пока число не соответствует условию, просим ввести заново.

const inputNumber = (message: string, validator: (num: number) => boolean): number => {
  while (true) {
    const text = input(message) // "123"
    const n = Number(text) // 123
    if (text !== '' && isFinite(n) && validator(n)) {
      return n
    }
    print("Введи число!!!!")
  }
}

// inputNumber(input('Введи число'))

// const n1 = Number(input('Введите число: ')) // asd
// print(n1) // NaN

const n2 = inputNumber(
  'Введите число: ',
  (n) => n > 0
) // asd "Введи число!!!!" 123

print(n2) // 123
