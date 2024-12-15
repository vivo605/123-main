import {callbackify} from "node:util";

export{}

// 5. Валидатор
// Дописать inputNumber, который вторым параметром принимает функцию, она проверяет введённое число на соответствие заданным услоловиям.
// Пока число не соответствует условию, просим ввести заново.

// const inputNumber = (message: string): number => {
//     while (true) {
//         const text = input(message) // "123"
//         const n = Number(text) // 123
//         if (text === '' || !isFinite(n)) {
//             print("Введи число!!!!")
//         }
//         else {
//             return n
//         }
//     }
// };
//
// const n1 = inputNumber("n1 = ")
// print(n1)
//
// const n2 = inputNumber("n2 = ")
// print(n2)

const inputNumber = (message: string, returns?: () => void)=> {
    while (true) {
        const text = input(message) // "123"
        const n = Number(text) // 123
        if (text === '' || !isFinite(n)) {
            print("Введи число!!!!")
        }
        else {
            return n
        }
    }
}

inputNumber(input('Введи число'))