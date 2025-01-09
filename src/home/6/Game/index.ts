export{}

// можешь попробовать сделать игру камень - ножницы - бумага

// По статистике, чаще всего в игре «Камень, ножницы, бумага» бросают «камень» (35,4%).

// Ножницы — это бросок, который используется реже всего, с вероятностью попадания всего 29,6% в обычной игре в «Камень, ножницы, бумагу».

type Type = 'Камень'| 'Ножницы'| 'Бумага'

const generateComputerMove = () => {
  const randoms = random(1, 100);
  
  if (randoms < 29) {
    return 'Камень';
  } else if (randoms >= 29+35) {
    return 'Бумага';
  } else {
    return 'Ножницы';
  }
}

const inputPlayerMove = (message: string): Type | null => {
  const text = input(message);
  const n = Number(text);
  
  if (text !== '' && isFinite(n)) {
    switch (n) {
      case 1:
        return 'Камень'
      case 2:
        return 'Ножницы'
      case 3:
        return 'Бумага'
      default:
        print("Неверный ввод. Выберите 1, 2 или 3.");
        return null;
    }
  }
  return null;
}

const checkWinner = (playerMove: Type, computerMove: Type): string => {
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

const start = input('Вы запустили игру "Камень, ножницы, бумага". Хотите поиграть? (Вводите + или -): ')

if (start === '+') {
  while (true) {
    const playerMove = inputPlayerMove('Чем ты хочешь походить (1 - Камень, 2 - Ножницы, 3 - Бумага): ');
    
    if (playerMove) {
      const computerMove = generateComputerMove();
      print(`Компьютер выбрал: ${computerMove}`);
      const result = checkWinner(playerMove, computerMove);
      print(result);
    }

    const playAgain = input('Хотите сыграть еще раз? (+ или -): ');
    if (playAgain !== '+') {
      print('Спасибо за игру! Удачи!');
      console.clear()
      break;
    }
  }
} 
else{
  print('Жаль. Удачи)')
}
// TODO: играть против компьютера или второго игрока