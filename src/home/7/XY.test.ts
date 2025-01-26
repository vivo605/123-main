import { XY } from './XY'; // Импортируем функцию XY

describe('XY Function Tests', () => {
  it('should calculate deltas and distance for points (1, 2) and (4, 6)', () => {
    const result = XY([1, 2], [4, 6]);
    expect(result.delta_x).toBe(-3); // Изменение по оси X
    expect(result.delta_y).toBe(-4); // Изменение по оси Y
    expect(result.distance_point).toBeCloseTo(5, 5); // Ожидаемое расстояние
  });

  it('should calculate deltas and distance for the same points (3, 4) and (3, 4)', () => {
    const result = XY([3, 4], [3, 4]);
    expect(result.delta_x).toBe(0); // Изменение по оси X
    expect(result.delta_y).toBe(0); // Изменение по оси Y
    expect(result.distance_point).toBe(0); // Ожидаемое расстояние
  });

  it('should calculate deltas and distance for points (1, 1) and (1, 5)', () => {
    const result = XY([1, 1], [1, 5]);
    expect(result.delta_x).toBe(0); // Изменение по оси X
    expect(result.delta_y).toBe(-4); // Изменение по оси Y
    expect(result.distance_point).toBe(4); // Ожидаемое расстояние
  });

  it('should calculate deltas and distance for points (0, 0) and (0, 0)', () => {
    const result = XY([0, 0], [0, 0]);
    expect(result.delta_x).toBe(0); // Изменение по оси X
    expect(result.delta_y).toBe(0); // Изменение по оси Y
    expect(result.distance_point).toBe(0); // Ожидаемое расстояние
  });
});
