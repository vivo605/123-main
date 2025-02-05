export type Validator<N extends number> = (num: number) => num is N;

function isPositive(num: number): num is number {
  return num > 0;
}

// Функция, которая возвращает положительное число
export const homework = <N extends number>(validator?: Validator<N>) => {
  while (true) {
    const randomNum = Math.random() * 100;

    if (validator && validator(randomNum)) {
      const squaredNum = randomNum * randomNum; 

      if (isPositive(squaredNum)) {
        console.log('Положительное число:', squaredNum);
        break;
      } else {
        console.error('Не удалось получить положительное число');
      }
    } else if (!validator) {
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