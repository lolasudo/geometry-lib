import { BaseShape } from '../core/BaseShape.js';
import { PolygonParams } from '../types/shape.types.js';
/**
 * Класс для работы с многоугольниками с произвольным количеством вершин
 * @example
 * ```typescript
 * const polygon = new Polygon({
 *   vertices: [0, 0, 10, 0, 10, 10, 0, 10]
 * });
 * ```
 */
export declare class Polygon extends BaseShape {
    private _vertices;
    constructor(params: PolygonParams);
    /**
     * Получить количество вершин
     */
    get vertexCount(): number;
    /**
     * Получить массив вершин
     */
    get vertices(): readonly number[];
    /**
     * Вычислить площадь многоугольника (метод Гаусса)
     * @returns Promise с площадью
     */
    getArea(): Promise<number>;
    /**
     * Вычислить периметр многоугольника
     * @returns Promise с периметром
     */
    getPerimeter(): Promise<number>;
    /**
     * Проверить валидность многоугольника
     */
    isValid(): boolean;
    /**
     * Масштабировать многоугольник
     * @param factor - коэффициент масштабирования
     */
    scale(factor: number): Promise<void>;
    /**
     * Обновить параметры многоугольника
     */
    update(params: Partial<PolygonParams>): Promise<void>;
    /**
     * Получить bounding box многоугольника
     */
    getBoundingBox(): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
}
