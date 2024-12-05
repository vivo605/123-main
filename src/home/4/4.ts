export {}

// 4. inputNumber
// Создать функцию, которая запрашивает число с терминала. Если ввети не число, выводится сообщение об ошибке и нужно повторить ввод. 

// нужен цикл


function inputNumber(message: string): number {
  while (true) {
    const text = input(message) // "123"
    const n = Number(text) // 123
    if (text === '' || !isFinite(n)) {
      print("Введи число!!!!")
    }
    else {
      return n
    }
  }
}

// const number = Number(input("Напииши что-нибудь:"))
// print(number)

// const n = inputNumber("Напииши что-нибудь:")
// print(n)

const n1 = inputNumber("n1 = ")
print(n1)

const n2 = inputNumber("n2 = ")
print(n2)
// const n2 = inputNumber("n2 = ")


