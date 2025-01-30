type point1 = {
  x: number;
  y: number
}

export const XY = (point1: point1, point2: point1) => {
  const delta_x = point1.x - point2.x;
  const delta_y = point1.y - point2.y;

  const distance_point = Math.sqrt(delta_x ** 2 + delta_y ** 2); 
  
  return { delta_x, delta_y, distance_point };
}

const result = XY({x: 3, y: 4}, {x: 0, y: 0})

console.log(`Расстояние по оси X: ${result.delta_x}, Расстояние по оси Y: ${result.delta_y}, Прямое расстояние: ${result.distance_point}`)