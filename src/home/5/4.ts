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


// И попробуй вынести все эти расчёты в отдельную функцию, которая будет возвращать слово "овец" в нужном склонении.
// В таймере останется только основная логика, будет удобнее воспринимать код

// 2-4 и 6-9 можно описать диапазоном значений, а не перечислять вручную

// 1. count % 10 === 2 || count % 10 === 3 || count % 10 === 4:
//    - Это первая часть условия. Она проверяет, заканчивается ли число на 2, 3 или 4.
//     Этот фрагмент условий отвечает за склонение слова "овцы" в случае, если количество овец находится в диапазоне, где это склонение корректно.

// 2. count % 100 !== 12 && count % 100 !== 13 && count % 100 !== 14:
//    - Это вторая часть условия. Она проверяет, что последние две цифры числа не равны 12, 13 или 14. 
// Это важно, потому что в русском языке числительные от 12 до 14 требуют специального склонения (вместо "двенадцать овцы" или "тринадцать овцы" будет "двенадцать овец" и так 
// далее).

export{}


let number: number = 0; // Начальное количество овечек
const ovechi: number = Number(input("Сколько овечвек?) ")); // Конечное количество овечек, измените по желанию

function printSheep(count: number): void {
    if (count % 10 === 1 && count % 100 !== 11) {
        print(`${count} овца`);
    } else if ((count % 10 === 2 || count % 10 === 3 || count % 10 === 4) && (count % 100 !== 12 && count % 100 !== 13 && count % 100 !== 14)) {
        print(`${count} овцы`);
    } else {
        print(`${count} овец`);
    }
}

function startTimer(): void {
    const intervalId: NodeJS.Timeout = setInterval(() => {
        if (number < ovechi) {
            number += 1;
            printSheep(number);
        } else {
            print('ZZZZZZZZZZZZ');
            clearInterval(intervalId);
        }
    }, 1); // интервал 1000 мс (1 секунда)
}

// Запустите таймер
startTimer();


//
// const ovechi = Number(input("Сколько овечек считаем?)):"))
//
// function prints(number: number) {
//     if (number < ovechi) {
//         if (number % 10 == 1){
//              print(`${number} овца`)
//         }
//         else if (number % 10 == 2 || number % 10 == 3 || number % 10 == 4){
//              print(`${number} овцы`)
//         }
//         else if (number % 10 == 0|| number % 10 == 5 || number % 10 == 6 || number % 10 == 7 || number % 10 == 8 || number % 10 == 9 || number % 10 == 10){
//              print(`${number} овец`)
//         }
//     }
// }
//
//
// function timer(){
//     const intervalId = setInterval(
//         () => {
//             prints(ovechi)
//             print('ZZZZZZZZZZZZ')
//             clearInterval(intervalId)
//         },
//         1
//     )
// }


// const intervalId = setInterval(
    // () => {
        // if (number < ovechi){
        //     number = number + 1
        //     if (number % 10 == 1){
        //         print(`${number} овца`)
        //     }
        //     else if (number % 10 == 2 || number % 10 == 3 || number % 10 == 4){
        //         print(`${number} овцы`)
        //     }
        //      else if (number % 10 == 0|| number % 10 == 5 || number % 10 == 6 || number % 10 == 7 || number % 10 == 8 || number % 10 == 9 || number % 10 == 10){
        //          print(`${number} овец`)
        //     }
    //     },
    //     else {
    //         print('ZZZZZZZZZZZZ')
    //         clearInterval(intervalId)
    //     }
    //     return 0
    // },
    // 1
// )
// clearInterval(ovechi) // остановить таймер