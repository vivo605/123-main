export {}

// 2. Громкоговоритель
// Написать функцию, которая принимает объект со свойством name и добавляет к имени "!". 
// Дальше создать 2 типа: 
// * User
// - string name
// - number age
// * File
// - string name
// - number size
// Вызывать функцию с объектами типов User и File

// 1
type User = {
  name: string
  age: number
}
const user: User = {
  name: 'Sigma',
  age: 123,
}

// 2
type File = {
  name: string
  size: number
}
const file: File = {
  name: 'photo',
  size: 255,
}


// 3
const GROMKO = (obj: { name: string }) => {
  return `Приевет ${obj.name}!`
}

// 4
print(GROMKO(user))
print(GROMKO(file))
print(GROMKO({ name: 'sir' }))
