export{}

// 2. Алкотестер
// Генерируем примеры со сложением двух чисел от 1 до 99. 
// Если ответ правильный, предлагаем ещё по одной. 
// Если неправильный, просим больше не наливать и завершаем программу.
// "3 + 27 = "

while (true) {
  const firstNumber = random(1,99)
  const secondNumber = random(1,99)
  const sum = firstNumber + secondNumber

  const userAnswer = Number(input(`${firstNumber} + ${secondNumber} = `))

  if (userAnswer === sum) {
    print("Давай ещё по одной))")
  } else {
    print("А всё больше незя))))")
    break
  }
}
