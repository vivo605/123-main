export {}
/*
  Хранитель пароля
  Написать функцию, которая запрашивает и возвращает введённый пароль.
  Если это числовой пин-код, значение должно возвращаться в виде числа.
  Если пароль содержит буквы, нужно оставить его в виде строки.
*/

const inputPassword = (): number | string => {
  const input_password = input('Введи пароль: ')
  const pin = Number(input_password)

  if (isFinite(pin)){
    return pin
  }
  return input_password
}

const password = inputPassword()
print(`password = ${password}`)
print(`type = ${typeof password}`)
