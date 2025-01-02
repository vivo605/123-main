export{}

// можешь попробовать сделать игру камень - ножницы - бумага

// По статистике, чаще всего в игре «Камень, ножницы, бумага» бросают «камень» (35,4%).

// Ножницы — это бросок, который используется реже всего, с вероятностью попадания всего 29,6% в обычной игре в «Камень, ножницы, бумагу».

type Validator = (move: number) => boolean;

const start = input('Вы запустили игру "Камень, ножницы, бумага". Хотите поиграть? (Вводите + или -): ')

if (start == '+'){
  while (true){
    print("Первый игрок выбирает чем ходить")
    const inputNumber = (message: string, validator?: Validator): number => {
      while (true) {
        const text = input(message)
        const n = Number(text)
        if (text !== '' && isFinite(n) && (validator?.(n) ?? true)) {
          const randoms = random(29,35)
          print(randoms)
          if (randoms <= 32){
            const computer_move = 'Ножницы'
            print(computer_move)
          }
          else if (randoms >= 35){
            const computer_move = 'Камень'
            print(computer_move) 
          }
          else{
            const computer_move = 'Бумага'
            print(computer_move)
          }
        }
      }
    }
    const n1 = inputNumber('Чем ты хочешь походить (1.Камень, 2.ножницы или 3.бумага): ')
    print(n1)
  }
}
else{
  print('Жаль. Удачи)')
}