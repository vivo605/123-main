export{}
// 1. Счётчик
// Написать функцию createCounter, которая возвращает другую функцию. 
// Возвращаемая функция должна при каждом вызове увеличивать счётчик на 1.

function createCounter(startValue = 0) {
  return () => {
    startValue++
    return startValue
  }
}

const next = createCounter(2)
print(next())
print(next())
print(next())
