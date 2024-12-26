export {}

/*
  3. Настраиваемые часы
  Написать функцию, которая принимает количество секунд и заданную точность (s, m, h, d), с которой выводит прошедшее время. 
  Например:
  61, m: 01:01
  61, h: 00:01:01

  s, m, h, d
*/

type PM = 's' | 'm' | 'h' | 'd'

const printTime = (time: number, pm: PM): string  => {
  const second = time % 60
  const s = `${(second < 10) ? '0' : ''}${second}`

  if (pm === 's'){
    return s
  }
  
  const minuts = (time % (60 * 60) - second) / 60
  const m = `${(minuts < 10) ? '0' : ''}${minuts}:`

  if (pm === 'm'){
    return `${m}:${s}`
  }

  const hours = (time % (24 * 60 * 60) - minuts * 60 - second) / (60 * 60)
  const h = `${(hours < 10) ? '0' : ''}${hours}:`

  if (pm === 'h'){
    return `${h}:${m}:${s}`
  }

  const days = 0 // !!!

  print(
  )
}


// const time = Number(input('Сколько прошло секунд?: '))  

printTime(61, 'm') // '01:01'
// printTime(61, 'h') // '00:01:01'
