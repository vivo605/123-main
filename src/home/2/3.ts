export{}

/*
3. Калькулятор
Попросить ввести 2 числа и знак между ними. Выполнить операцию +, -, * или / и вывести результат в формате:
"2 * 3 = 6"
При делении на 0 вместо ответа написать сообщение с ошибкой.

*/

const n1 = Number(input('Первое число: '))
const n2 = Number(input('Всторое число: '))
const operator = input('Знак между ними: ')

if (operator === '+') {
  print(`${n1} ${operator} ${n2} = ${n1 + n2}`)
}
else if (operator === '-') {
  print(`${n1} ${operator} ${n2} = ${n1 - n2}`)
}
else if (operator === '*') {
  print(`${n1} ${operator} ${n2} = ${n1 * n2}`)
}
else if (operator === '/') {
  if (n2 === 0) {
    print("Ай ай ай")
    print("Делить на ноль нельзя пупсик))")
  }
  else {
    print(`${n1} ${operator} ${n2} = ${n1 / n2}`)
  }
}
else {
  print("Ошибка")
}
