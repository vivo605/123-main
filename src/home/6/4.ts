export{}

// можешь попробовать сделать игру камень - ножницы - бумага

// По статистике, чаще всего в игре «Камень, ножницы, бумага» бросают «камень» (35,4%).

// Ножницы — это бросок, который используется реже всего, с вероятностью попадания всего 29,6% в обычной игре в «Камень, ножницы, бумагу».

type Validator = (move: number) => boolean;
type Types = 'Камень'| 'Ножницы'| 'Бумага'

const start = input('Вы запустили игру "Камень, ножницы, бумага". Хотите поиграть? (Вводите + или -): ')

const computer_moves = () => {
  const randoms = random(29, 35);
  
  if (randoms < 32) {
      return 'Ножницы';
  } else if (randoms >= 35) {
      return 'Камень';
  } else {
      return 'Бумага';
  }
}

const valid = (message: string): Types | null => {
  const text = input(message);
  const n = Number(text);
  
  if (text !== '' && isFinite(n)) {
    switch (n) {
      case 1:
        return 'Камень';
      case 2:
        return 'Ножницы';
      case 3:
        return 'Бумага';
      default:
        print("Неверный ввод. Выберите 1, 2 или 3.");
        return null;
    }
  }
  return null;
}

const winner = (playerMove: Types, computerMove: Types): string => {
  if (playerMove === computerMove) {
    return "Ничья!";
  } 
  else if (
    (playerMove === 'Камень' && computerMove === 'Ножницы') ||
    (playerMove === 'Ножницы' && computerMove === 'Бумага') ||
    (playerMove === 'Бумага' && computerMove === 'Камень')
  ) {
    return "Вы выиграли!";
  } 
  else {
    return "Компьютер выиграл!";
  }
}


// Todo - Доделать ход игры
if (start === '+') {
    while (true) {
        const playerMove = valid('Чем ты хочешь походить (1 - Камень, 2 - Ножницы, 3 - Бумага): ');
        
        if (playerMove) {
            const computerMove = computer_moves();
            print(`Компьютер выбрал: ${computerMove}`);
            const result = winner(playerMove, computerMove);
            print(result);
        }

        const playAgain = input('Хотите сыграть еще раз? (да или нет): ');
        if (playAgain.toLowerCase() !== 'yes') {
            print('Спасибо за игру! Удачи!');
            break;
        }
    }
} 
else{
  print('Жаль. Удачи)')
}
