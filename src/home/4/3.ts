export {}

// 3. Швейцар
// Создать функцию greet, которая опционально принимает имя и время суток (в часах). 
// Если время суток не указано, используем "Здравствуйте". 
// Если передано имя, используем его в приветствии.

// Примеры возвращаемобрый день, админиых значений:
// Дстратор!
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


  //  if (name == ''){
  //    return"Здраствуйте"
  //  }
  //  else{
  //   return`Здраствуйте, `
  // }
  
  // if (time_day === undefined) {
  //   print(`ЗДАРОВА))))`)
  // } else {
  //   if (time_day <= 1){
  //     print('Здраствуйте')
  //   }
  // }
  // if (name == ''){
  //   if (time_day == 0){
  //     print(`ЗДАРОВА))))`)
  //   }
  //   else if (time_day == 1){
  //     print('Здраствуйте')
  //   }
  // }

function getTimeDay(hours?:number): string {
  if (hours == undefined){
    return "ЗДАРОВА" 
  }
  if (hours >= 0 && hours < 6) {
    return 'Доброй рассвет'
  }
  if (hours >= 6 && hours < 13) {
    return 'Доброй утро'
  }
  if (hours >= 13 && hours < 21) {
    return 'Доброе вечер'
  }
  return 'Доброй ночи'
}

function greet(name ?:string, hours ?:number) {
  const time_day = getTimeDay() //hours // Здрасьте / Добрый вечер
  print(
    time_day
    + (name ? `, ${name}` : '')
    + '!'
  )
}

const name = input("Как вас зовут?: ")
const time_day = Number(input("Сколька времени?: "))
greet(name, time_day)
