export {}

// TS/ES2020 operator "??"
// не делает преобразование в boolean
// отсекает только: undefined null, пропускает все остальные
// обычно используется для установки значения по умолчанию

// (0 !== undefined && 0 !== null) ? 0 : 'test'
// const test8 = 0 ?? 'test' // 0

// const test9 = 10 ?? 'test' // 10
// const test10 = false ?? 10 // false

// const test11 = undefined ?? 10 // 10
// const test12 = null ?? 10 // 10



// --- ОПАСНОСТИ JS ---

// undefined
{
  let withoutValue // undefined

  print(
    withoutValue === undefined
      ? 'ожидаемо выведется'
      : 'ожидаемо не выведется'
  )
  {
    let undefined = 'surprise'

    print(
      withoutValue === undefined
        ? 'как же так?'
        : 'сюрприз)))'
    )

    print(
      typeof withoutValue === 'undefined'
        ? 'вот теперь правильно'
        : '...'
    )
  }
}

const type = typeof 'string'

// void any unknown
// declare let test: any
// test++ // test is not defined
// test(1,2)

const printCaps = (value: unknown): void => {
  if (typeof value === 'string') {
    print(value.toUpperCase())
  }
}

printCaps('123qwe')



// перечисление литеральных значений
type Variant = 1 | 2 | 3 | 'hi' | ':)'
const v: Variant = ':)'

// комбинация различных типов
type Combination = boolean | Variant
const combination: Combination = 'hi'


type Fruit = 'apple' | 'pear' | 'banana' // | 'melone'
let fruit: Fruit = 'banana'

const test = (fruit: Fruit): string => {
  switch (fruit) {
    case 'apple':
      return 'яблоко'
    case 'banana':
      return 'банан'
    case 'pear':
      return 'груша'
    // case 'melone':
    //     return ''
    // case 'pear2': // ошибка - нет такого типа
    //   return 'груша 2'
  }
}

test(fruit) // 'банан'

const stringToFruit = (message: string): Fruit => {
  switch (message) {
    case 'яблоко':
      return 'apple'
    case 'банан':
      return 'banana'
    case 'груша':
      return 'pear'
  }
  throw new Error(`unknown fruit: ${message}`) // аварийно завершает программу с сообщением об ошибке
}


