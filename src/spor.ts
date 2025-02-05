export type Validator<N extends number> = (num: number) => num is N;

// Функция для проверки, является ли число положительным
function isPositive(num: number): num is number {
  return num > 0;
}

// Функция, которая возвращает положительное число
export const homework = <N extends number>(validator?: Validator<N>) => {
  while (true) {
    // Генерируем случайное число для проверки
    const randomNum = Math.random() * 100; // Пример случайного числа

    // Если validator предоставлен, используем его для проверки числа
    if (validator && validator(randomNum)) {
      const squaredNum = randomNum * randomNum; // Возводим число в квадрат

      // Проверяем, является ли squaredNum положительным числом
      if (isPositive(squaredNum)) {
        console.log('Положительное число:', squaredNum);
        break;
      } else {
        console.error('Не удалось получить положительное число');
      }
    } else if (!validator) {
      // Если validator не предоставлен, просто проверяем случайное число
      if (isPositive(randomNum)) {
        console.log('Положительное число:', randomNum);
        break;
      } else {
        console.error('Не удалось получить положительное число');
      }
    }
  }
};

homework()