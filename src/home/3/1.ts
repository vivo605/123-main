export{}

// 1. Игра "угадай число"
// Загадать случайное число.
// Предложить пользователю угадать.
// Если неправильно, предложить ещё раз.
// Если правильно, поздравить и завершить программу



// const number = random(1, 100);
// let otvet;
// do {
//   otvet = Number(input("Попробуй угадать число: "));
//   if (number === otvet) {
//     print("You win");
//   } else {
//     print("It's not true");
//   }
// } while (number !== otvet);

const number = random(1, 100)

while (true) {
  const otvet = Number(input('Попробуй угадать число: '))
  if (number === otvet) {
    print('You win')
    break
  } else {
    print(`It's not true`)
  }
}