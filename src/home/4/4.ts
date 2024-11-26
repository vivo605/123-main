export {}

// 4. inputNumber
// Создать функцию, которая запрашивает число с терминала. Если ввети не число, выводится сообщение об ошибке и нужно повторить ввод. 

function inputNumber(numbers: number) {
  if (numbers == 1 // TODO){
    print("Введи число!!!!")
  }
  else{
    print("О молодец")
  }
}
const numbers = Number(input("Напииши число:"))

inputNumber(numbers)