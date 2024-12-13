// 4. Овцы
// Спросить, до скольки овец считаем.
// Каждую секунду выводить сообщение с нужным склонением. В конце "засыпаем"
// 1 овца
// 2-4 овцы
// 5-20 овец
// 21 овца
// 22-24 овцы
// 25-30 овец
//
// .
//Пример для 3:
// 1 овца
// 2 овцы
// 3 овцы
// zzz

export{}

const ovechi = Number(input("Сколько овечек считаем?)):"))
let number = 0

const intervalId = setInterval(
    () => {
        if (number < ovechi){
            number = number + 1
            if (number == 1 || number == 21){
                print(`${number} овца`)
            }
            else if (number <= 2 || number <= 4 || number <= 22 || number <= 24){
                print(`${number} овцы`)
            }
            else if (number <= 5 || number <= 20 || number <= 25 || number <= 30){
                print(`${number} овец`)
            }
        }
        else {
            print('ZZZZZZZZZZZZ')
            clearInterval(intervalId)
        }
        return 0
    },
    1
)
clearInterval(ovechi) // остановить таймер