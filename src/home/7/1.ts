type Point = {
  x: number
  y: number
}

export const XY = (point1: Point, point2: Point) => {
  const delta_x = point1.x - point2.x
  const delta_y = point1.y - point2.y

  const distance_point = Math.sqrt(delta_x ** 2 + delta_y ** 2) 
  
  return { delta_x, delta_y, distance_point }
}

const { delta_x, delta_y, distance_point } = XY({x: 3, y: 4}, {x: 0, y: 0})
print(`Расстояние по оси X: ${delta_x}`)
print(`Расстояние по оси Y: ${delta_y}`)
print(`Прямое расстояние: ${distance_point}`)

// const result = XY({x: 3, y: 4}, {x: 0, y: 0})
// print(`Расстояние по оси X: ${result.delta_x}`)
// print(`Расстояние по оси Y: ${result.delta_y}`)
// print(`Прямое расстояние: ${result.distance_point}`)
