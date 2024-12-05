export {}

// 1. Сумматор
// Вывести на консоль результат выражения
// (3 + 5) + (2 + 7)
// только с одним оператором +
// (для этого понадобится создать функцию)

const summator = (n1: number, n2 :number) =>{
  return n1+n2
}

print(
  summator(
    summator(3,5),
    summator(2,7)
  )
)
