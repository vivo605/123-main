export {}

/*
  1. typeOfNumber
  Написать функцию, которая проверяет число (в том числе в строке). 
  Возвращает одно из вариантов: integer, float, infinity, null.
  Запросить число, вывести тип числа на русском.

  ype Fruit = 'apple' | 'pear' | 'banana' // | 'melone'
let fruit: Fruit = 'banana'

const test = (fruit: Fruit): string => {
  switch (fruit) {
    case 'apple':
      return 'яблоко

*/

const inputNumber = (message: string, validator?: (num: number) => boolean): number => {
  while (true) {
  type Fruit = 'integer' | 'float' | 'infinity'| 'null'
  const test = (fruit: Fruit): string => {
    switch (fruit) {
      case 'integer':
        return 'integer'
      case 'infinity':
        return 'infinity'
      case 'float':
        return 'float'
      case 'null':
        return 'null'
    }
  }
    const text = input(message) // "123"
    const n = Number(text) // 123
    if (text !== '' && isFinite(n) && (validator?.(n) ?? true)) {
      return n
    }
    print("Ошибка!")
  }
}

const n1 = inputNumber('Введите второе число: ', (n) => n > 0)
print(n1)


// const n = Number(input('Введите число: '))
// const type = typeOfNumber(n)
// print(translateType(type))
