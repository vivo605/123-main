export {}

/*
  1. typeOfNumber
   ? Написать функцию, которая проверяет число (в том числе в строке). 
  Возвращает одно из вариантов: integer, float, infinity, null.
  Запросить число, вывести тип числа на русском.
*/

type NumberType = 'integer' | 'float' | 'infinity' | 'null'

const typeOfNumber = (n: number): NumberType  => {
  if (isNaN(n)){
    return 'null'
  }
  if (!isFinite(n)){
    return 'infinity'
  }
  if (Number.isInteger(n)){
    return 'integer'
  }
  return 'float'
}

const translateNumberType = (type: NumberType): string => {
  switch (type) {
    case 'integer':
      return 'Целое'
    case 'float':
      return 'дробное'
    case 'infinity':
      return 'Как ты напиал бесконечность?)))'
    case 'null':
      return 'Не чесло'
  }
}

const n = input('Введите число: ')
const type = typeOfNumber(Number(n))
print(translateNumberType(type))
