export {}

// 4. inputNumber
// Создать функцию, которая запрашивает число с терминала. Если ввети не число, выводится сообщение об ошибке и нужно повторить ввод. 

// нужен цикл
function inputNumber(message: string): number {
  const number = Number(input(message))
  if (!isFinite(number)) { // TODO
    print("Введи число!!!!")
  }
  else{
    print("О молодец")
  }
}

// const number = Number(input("Напииши что-нибудь:"))
// print(number)

// const n = inputNumber("Напииши что-нибудь:")
// print(n)

const n1 = inputNumber("n1 = ")
print(n1)
// const n2 = inputNumber("n2 = ")


