export {}

/*
5. Часы
Вводим количество отмеренных секунд. Выводим прошедшее время в формате:
hh:mm:ss

61
"00:01:01"
*/

const time = Number(input('Сколько прошло секунд?: '))

const second = time % 60
const minuts = (time % (60 * 60) - second) / 60 
const hours = (time % (24 * 60 * 60) - minuts * 60 - second) / (60 * 60)

print(
  `${(hours < 10) ? '0' : ''}${hours}:`+
  `${(minuts < 10) ? '0' : ''}${minuts}:`+
  `${(second < 10) ? '0' : ''}${second}`
)

