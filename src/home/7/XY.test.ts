import { XY } from './XY'; // Импортируем функцию XY

describe('XY function', () => {
  test('should calculate correct deltas and distance for points (3, 4) and (0, 0)', () => {
    const point1 = { x: 3, y: 4 };
    const point2 = { x: 0, y: 0 };

    const result = XY(point1, point2);

    expect(result.delta_x).toBe(3); // Проверяем разницу по оси X
    expect(result.delta_y).toBe(4); // Проверяем разницу по оси Y
    expect(result.distance_point).toBe(5); // Проверяем расстояние между точками
  });

  test('should calculate correct deltas and distance for points (5, 5) and (2, 3)', () => {
    const point1 = { x: 5, y: 5 };
    const point2 = { x: 2, y: 3 };

    const result = XY(point1, point2);

    expect(result.delta_x).toBe(3); // Разница по оси X
    expect(result.delta_y).toBe(2); // Разница по оси Y
    expect(result.distance_point).toBeCloseTo(3.605551275463989, 4); // Расстояние с точностью до 4 знаков после запятой
  });

  test('should return zero deltas and distance for the same point', () => {
    const point1 = { x: 10, y: 10 };
    const point2 = { x: 10, y: 10 };

    const result = XY(point1, point2);

    expect(result.delta_x).toBe(0); // Разница по оси X должна быть 0
    expect(result.delta_y).toBe(0); // Разница по оси Y должна быть 0
    expect(result.distance_point).toBe(0); // Расстояние должно быть 0
  });

  test('should handle negative coordinates', () => {
    const point1 = { x: -1, y: -1 };
    const point2 = { x: -4, y: -5 };

    const result = XY(point1, point2);

    expect(result.delta_x).toBe(3); // Разница по оси X
    expect(result.delta_y).toBe(4); // Разница по оси Y
    expect(result.distance_point).toBe(5); // Расстояние между точками
  });
});