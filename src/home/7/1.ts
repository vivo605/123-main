export {}

const XY = (point1: number, point2:number) => {
  const delta_x =  point2 - point1
  const delt_y = point2 - point2

  const distance_point = Math.cos(delta_x**2 + delt_y**2)
  
  print(`Расстояние по оси X: ${delta_x}, Расстояние по оси Y: ${delt_y}, Прямое расстояние: ${distance_point}`)
  
  return delta_x; delt_y; distance_point;
}

XY(Number(input('Введите первую точку: ')), Number(input('Введите первую точку: ')))  