// 4. Овцы
// Спросить, до скольки овец считаем.
// Каждую секунду выводить сообщение с нужным склонением. В конце "засыпаем"
// 1 овца
// 2-4 овцы
// 5-20 овец
// 21 овца
// 22-24 овцы
// 25-30 овец
// zzz

export{}

const ovechi = Number(input("Сколько овечек считаем?)):"))
let number = 0

const intervalId = setInterval(
    () => {
        if (number < ovechi){
            number = number + 1
            if (number % 10 == 1){
                print(`${number} овца`)
            }
            else if (number % 10 == 2 || number % 10 == 3 || number % 10 == 4){
                print(`${number} овцы`)
            }
             else if (number % 10 == 0|| number % 10 == 5 || number % 10 == 6 || number % 10 == 7 || number % 10 == 8 || number % 10 == 9 || number % 10 == 10){
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