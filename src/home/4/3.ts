export {}

// 3. Швейцар
// Создать функцию greet, которая опционально принимает имя и время суток. 
// Если время суток не указано, используем "Здравствуйте". 
// Если передано имя, используем его в приветствии.

// Примеры возвращаемых значений:
// Добрый день, администратор!
// Здравствуйте, Виталий!
// Добрый вечер!
// Здравствуйте!

// function calulate(n1: number, operator: string, n2: number): number {
//   if (operator === '+') {
//     return n1 + n2
//   }
//   return NaN
// }

// const num1 = Number(input("Введите первое число: "))
// const num2 = Number(input("Введите второе число: "))
// const operator = input("Введите знак операции (+, -, *, /): ")

// const result = calulate(num1, operator, num2)
function greet(time_day ?:number, name ?:string) {
  if (time_day === undefined) {
    print(`ЗДАРОВА))))`)
  } else {
    if (time_day <= 1){
      print('Здраствуйте')
    }
  }
  if (name == ''){
    if (time_day == 0){
      print(`ЗДАРОВА))))`)
    }
    else if (time_day == 1){
      print('Здраствуйте')
    }
  }
}

const time_day = Number(input("Сколька времени?: "))
const name = input("Как вас зовут?: ")
greet(time_day, name)
