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

const size = Number(input("Сколько уровней? "))

for (let str = 1; str <= size; str++) {
  let line = ''
  for (let column = 1; false; column++) { // TODO: количество пробелов
    line += '   '
  }
  for (let column = 1; ; column++) { // TODO: количество звёздочек
    line += '*'
  }
  print(line)
}
