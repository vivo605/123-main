export{}

// можешь попробовать сделать игру камень - ножницы - бумага

// По статистике, чаще всего в игре «Камень, ножницы, бумага» бросают «камень» (35,4%).

// Ножницы — это бросок, который используется реже всего, с вероятностью попадания всего 29,6% в обычной игре в «Камень, ножницы, бумагу».

type Validator = (move: number) => boolean;

const start = input('Вы запустили игру "Камень, ножницы, бумага". Хотите поиграть? (Вводите + или -): ')

const computer_moves = ():string => {
  const randoms = random(29,35)

  if (randoms <= 32){
    const computer_move = 'Ножницы'
    print(computer_move)
    return 'Ножницы'
  }
  else if (randoms >= 35){
    const computer_move = 'Камень'
    print(computer_move) 
    return 'Камень'
  }
  else{
    const computer_move = 'Бумага'
    print(computer_move)
    return 'Бумага'
  }
}

const valid = (message: string, validator?: Validator):boolean => {
  const text = input(message)
  const n = Number(text)
  if (text !== '' && isFinite(n) && (validator?.(n) ?? true)) {
    return true
  }
  return false
}

// Todo - Доделать ход игрока
const user_move = (message:string):string => {
  print("Первый игрок выбирает чем ходить")
}

const fight = () => {

}

// Todo - Доделать ход игры
if (start == '+'){
  while (true){
  }
}
else{
  print('Жаль. Удачи)')
}

// Todo - Доделать вызовы функций
const n1 = user_move('Чем ты хочешь походить (1.Камень, 2.ножницы или 3.бумага): ')

print(valid(n1))