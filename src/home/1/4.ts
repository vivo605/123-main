export {}

/*
4. Дед Мороз
Спросить, сколько детей ждёт подарки и сколько конфет для них у нас имеется.
Затем сказать, сколько конфет достанется каждому и сколько останется в мешке, если поделить подарки поровну.
Каждая информация должна выводиться с новой строки. Попробуй сделать вывод только одним вызовом print.
*/

const children = Number(input("Сколько детей ждёт подрки и конфет: "))
const candies = Number(input("Сколько у нас конфет: "))
const result = candies/children

print(`${children} детей ждут, а у нас ${candies} конфет, следовательно ${result} конфет достантся каждому`)