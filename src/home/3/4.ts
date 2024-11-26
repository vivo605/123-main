export {}

// 4. Таблица умножения
// Запрашиваем число от 2 до 10, 
// после чего печатаем на консоль таблицу умножения от 1 до введённого числа. 
// Слева и сверху нужно добавить подсказки, разделяемые символами "|" и "-". 
// Цифры должны быть ровно по сетке, чтобы таблица не съезжала.


// const size = Number(input('size = '))

// for (let row = 1; row <= size; row++) {
//   let line = ''
//   for (let column = 1; column <= row; column++) {
//     line += (row + column - 1)
//   }
//   print(line)
// }

// n = 1
// while (n === 1) {
//   n++ // 1 повторение цикла
// }


// Пример для цифры 2:
/*
     1  2
  -------
1 |  1  2
2 |  2  4
*/

const size = Number(input('size = '))
let table = '   '


for (let i = 1; i <= size; i++) {
  table += `  ${i}`
}

table += "\n  -"

for (let i = 1; i <= size; i++) {
  table += `---`
}

for (let row = 1; row <= size; row++) {
  table += `\n${row} |`
  for (let column = 1; column <= size; column++) {
    const lol = row*column
    if (lol <= 9){
      table += '  '
    }
    else{
      table += ' '
    }
    table += lol
  }
}

print(table)

// TODO: цифры должны быть между проблемами, а не после них
// двузначные числа могут быть так же
