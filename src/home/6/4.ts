export{}

// можешь попробовать сделать игру камень - ножницы - бумага

type Type = 'Камень' | 'Ножницы' | 'Бумага'
const user_first_move = input('Выбери чем ты будешь ходить Камень, Ножницы или Бумага: ')  
const user_second_move = input('Выбери чем ты будешь ходить Камень, Ножницы или Бумага: ')  

const move_first = (user_first_move: string,user_second_move: string, type: Type): string => {
}