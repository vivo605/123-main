export {}

// МАТЕМАТИКА

// округление по правилам математики
Math.round(2.5)  // 3
Math.round(-2.5) // -2

Math.round(2.4)  // 2
Math.round(-2.4) // -2

// вверх
Math.ceil(2.5)  // 3
Math.ceil(-2.5) // -2

Math.ceil(2.4)  // 3
Math.ceil(-2.4) // -2

// вниз
Math.floor(2.5)  // 2
Math.floor(-2.5) // -3

Math.floor(2.4)  // 2
Math.floor(-2.4) // -3

// отбросить дробную часть
Math.trunc(2.5)  // 2
Math.trunc(-2.5) // -2

Math.trunc(2.4)  // 2
Math.trunc(-2.4) // -2

// модуль (Очень редко надо)
Math.abs(2.5)  // 2.5
Math.abs(-2.5) // 2.5

// Случайные числа
Math.random() // (0..1)
random(1, 10) // [1..10] (учебная библиотека)

const a = Number(input("max random: "))

try {
  const v = random(1,a)
  print(v)
} catch (error) {
  if (error && error instanceof Error) {
    print(error.message)
  }
}



// Преобразование целого числа из строки
const value1 = parseInt('42 is the answer') // 42
const value2 = Number('42 is the answer')   // NaN

// Преобразование строки с десятичными знаками
const decimalValue1 = parseInt('42.56')     // 42 (игнорирует дробную часть)
const decimalValue2 = Number('42.56')      // 42.56



// УСЛОВИЯ

const myNumber = 1

if (myNumber > 0) {
  print('Yes')
  // ...
} else {
  print('No')
}

/*
ЛОГИКА boolean
true false
Boolean(value)

false: 0 NaN '' undefined null
true: всё остальное

&& и
|| или
! не
*/

// автоматическое преобразование
const numberIsTrue: boolean = Boolean(123) // true
const zeroIsFalse = Boolean(0) // false
Boolean(-5) // true
const NaNIsFalse = Boolean(NaN) // false

const stringIsTrue = Boolean('hello') // true
const emptyString = Boolean('') // false

const undefinedIsFalse = Boolean(undefined) // false

if (myNumber) {
  // переменная не пустая
}

/*
СТРОКИ
(== !=)
=== !==
*/

/*
ЧИСЛА

< > <= >= 
(== !=)
=== !==
*/

if (myNumber !== 1) {
  
}

const num = 20

if (num >= 100) {
  print('число слишком большое')
}

const isBigNumber: boolean = (num >= 100)

if (isBigNumber) {
  print('это число большое')
} else {
  print('это число НЕ большое')
}

if (isBigNumber || (num >= 5 && num <= 10)) {
  print('это число большое или в диапазоне от 5 до 10')
} 
else if (!isBigNumber) {
  print('это число небольшое')
}
else {
  console.log('этот код никогда не будет выполнен')
}

// ПРОВЕРКИ
const invalidNumber = Number('asd') // NaN

if (isFinite(invalidNumber)) { // не NaN и не Infinity - нормальное число
  
}
if (!isNaN(invalidNumber) && invalidNumber > -Infinity && invalidNumber < Infinity) {
  
}

// тернарный оператор (возвращает значение в зависимости от условия)
const answer: string = (num < 18) ? 'y' : 'n'

if (num < 0) {
  const absolute = -1 * num
} else {
  const absolute = num
}
const absolute: number = (num < 0) ? -num : num


// --- ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ, БЛОКИ --- 


// так НЕ делаем
// if (false)
//   print('false') // относится к условию
//   print('true') // всегда выполнится

// блок внутри {} скобок, переменные внутри блока доступны только в пределах блока

// console.log('asd', asd) // Error: переменная недоступна
{
  // смещение строк кода внутри блока (tab или shift+tab)
  const asd = 'test' // новая переменная (объявление внутри блока)
  console.log('asd', asd) // "test"
}
// console.log('asd', asd) // Error: переменная недоступна


// переменные за пределами блока доступны и внутри вложенных блоков

const p = 1
{
  // код внутри блока
  // старая переменная (нет объявления внутри блока)
  console.log('p', p) // 1
}
{
  // код внутри другого блока
  const p = 5 // новая переменная (новое объявление внутри блока)
  console.log('p', p) // 5
}
// код вне блока
// старая переменная (всё внутри блока уничтожается после его завершения)
console.log('p', p) // 1


// блоки внутри блоков

{
  const v1 = 1
  const v2 = 2
  {
    const v1 = 10
    const v3 = 3
    console.log('v1', v1) // 10
    console.log('v2', v2) // 2
    console.log('v2', v3) // 3
  }
  console.log('v1', v1) // 1
  // console.log('v3', v3) // Error: переменная недоступна
}
// console.log('v1', v1) // Error: переменная недоступна


// ещё одна проблема с var - непонятно что и где объявлено

age = 20 // переменная используется до её объявления, но ошибки нет :/
// ...
if (true) {
  // ...
  var age = 10
  // ...
}
console.log('age', age) // 10, а не 20
// ...
var age = 50
// ...
console.log('age', age) // 50, а не 10 или 20
