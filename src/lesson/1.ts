export {}

/**
 * Коммент для переменной
 */

const name = input('Input name: ')
print(name)

// однострочный комментарий (подсказки и отключать код ctrl+/)
/*
  многострочный
  комментарий
  (только для документации)
  JSDoc
*/

// ПЕРЕМЕННЫЕ: (var) let const
// camelCase
const zeroNumber: number = 0

// ТИПЫ ДАННЫХ

/*
ЧИСЛА number
12 2.2 -0.01 Infinity NaN (not a number - неправильно преобразованное число)
Number(value)
+ - * / 
** (степень, например в квадрате)
% (остаток от деления)
*/

let n = Infinity

const correctNumber = Number('123') // 123
const invalidNumber: number = Number('asd') // NaN

// приоритет операторов
const result = (2 + 3) * 2 + 3**2 // 19

const negativeNumber = -correctNumber // -1 * correctNumber
const shortConvertation = +'123' // так делать не будем

// остаток от деления
1 % 2 // 1
3 % 2 // 1
12 % 5 // 2
20 % 5 // 0

// операторы присваивания
let num = 2

num = num + 1
num += 1
num++

num = num - 1
num -= 1
num--

// число в квадрате
num *= num
num **= 2
// num** // так нельзя


/*
СТРОКИ string
'' "" ``
String(value)
+
*/

const str1 = 'Строка 1\nСтрока 2' // \n - перенос строки
const str2 = `text ${str1}... ${num + 1}`
const str3 = `
multi
line
text
`

let str4 = ''
str4 += str2 + '\n' + str3



// ОТСУТСТВУЮЩИЙ тип undefined
let variable //: number
console.log('variable', variable) // undefined
variable = 1
console.log('variable', variable) // 1

// отбросить дробную часть
Math.trunc(2.5)  // 2
Math.trunc(-2.5) // -2

// Случайные числа
Math.random() // (0..1)
random(1, 10) // [1..10] (учебная библиотека)
