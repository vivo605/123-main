const homework = () => {
  while (true) {
    const randomNum = Math.random() * 100
    const x = randomNum**2 - 10 * randomNum + 29
    if (x > 0) {
      console.log('Положительное число:', x , '\n Отрицательное число:', -x);
      break;
    } else {
      console.error('Не  поудалосьлучить положительное число');
    }
  }
}

homework()