export {}

// 2. Декомпозиция калькулятора
// Написать калькулятору функцию calulate,
//которая возвращает результат выполнения операции. Напоминаю изначальное задание:

// Попросить ввести 2 числа и знак между ними. 
// Выполнить операцию +, -, * или / и вывести результат в формате:
// "2 * 3 = 6"
// При делении на 0 вместо ответа написать сообщение с ошибкой.

// TODO

function calulate(n1: number, operator: string, n2: number): number {
  if (operator === '+') {
    return n1 + n2
  }
  if (operator === '-') {
    return n1 - n2
  }
  if (operator === '*') {
    return n1 * n2
  }
  if (operator === '/') {
    return n1 / n2
  }
  else{
    print("ТЫ ЛОМАЕШЬ МОЮ ПРОГРАММУ Я ТЕБЯ БОЮСЬ!!!!")
    return 0
  }
}

const num1 = Number(input("Введите первое число: "))
const num2 = Number(input("Введите второе число: "))
const operator = input("Введите знак операции (+, -, *, /): ")

const result = calulate(num1, operator, num2)
print(result)

// NaN
// Infinity
// print(result)
