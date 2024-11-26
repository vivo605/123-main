export{}

// 3. Бермудский треугольник
// Ввести цифру, обозначающую высоту треугольника.
// Напечатать симметричный треугольник из звёздочек.

// Пример для цифры 2:
//  *
// ***

// Пример для цифры 3:
//   *
//  ***
// *****

// const size = Number(input('size = '))
// let table = '   '


// for (let row = 1; row <= size; row++) {
//   table += `\n${row} | `
//   for (let column = 1; column >= size ; column++) {
//     TODO
//   }
// }

// print(table)


// const size = Number(input('size = '))

// for (let row = 1; row <= size; row++) {
//   let line = ''
//   for (let column = 1; column <= row; column++) {
//     line += (row + column - 1)
//   }
//   print(line)
// }

// Пример для цифры 3:
//   *  
//  ***  
// *****

/*
  *
 ***
*****

size 3

str 1 ' ' 2
str 2 ' ' 1
str 3 ' ' 0
*/

const size = Number(input("Сколько уровней? "))

for (let str = 1; str <= size; str++) {
  let line = ''
  for (let column = 1; column <= size-str; column++) {
    line += ' '
  }
  for (let column = 1; column <= 1+(2*(str-1)); column++) {
    line += '*'
  }
  print(line)
}
