export {}

// 2. Декомпозиция калькулятора
// Написать калькулятору функцию calulate,
//которая возвращает результат выполнения операции. Напоминаю изначальное задание:

// Попросить ввести 2 числа и знак между ними. 
// Выполнить операцию +, -, * или / и вывести результат в формате:
// "2 * 3 = 6"
// При делении на 0 вместо ответа написать сообщение с ошибкой.

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
  else {
    return NaN
  }
}

const num1 = Number(input("Введите первое число: "))
const num2 = Number(input("Введите второе число: "))
const operator = input("Введите знак операции (+, -, *, /): ")

const result = calulate(num1, operator, num2)

if (isNaN(result)) {
  print("ТЫ ЛОМАЕШЬ МОЮ ПРОГРАММУ Я ТЕБЯ БОЮСЬ!!!!")
}
else if (!isFinite(result)) {
  print("Ай ай ай так незя))))")
}
else {
  print(`${num1} ${operator} ${num2} = ${result}`)
}



// NaN
// Infinity
// print(result)