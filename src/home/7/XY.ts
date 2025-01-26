export const XY = (point1: [number, number], point2: [number, number]) => {
  const delta_x = point1[0] - point2[0];
  const delta_y = point1[1] - point2[1];

  const distance_point = Math.sqrt(delta_x ** 2 + delta_y ** 2); 
  
  console.log(`Расстояние по оси X: ${delta_x}, Расстояние по оси Y: ${delta_y}, Прямое расстояние: ${distance_point}`);

  return { delta_x, delta_y, distance_point };
}

const result = XY([3, 4], [0, 0]);

console.log(result);