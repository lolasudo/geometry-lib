import { BaseShape } from '../core/BaseShape.js';
import { RectangleParams } from '../types/shape.types.js';
/**
 * Класс, представляющий прямоугольник
 * @example
 * ```typescript
 * const rectangle = new Rectangle({ width: 10, height: 5 });
 * const area = await rectangle.getArea();
 * ```
 */
export declare class Rectangle extends BaseShape {
    private _width;
    private _height;
    constructor(params: RectangleParams);
    /**
     * Получить ширину прямоугольника
     */
    get width(): number;
    /**
     * Получить высоту прямоугольника
     */
    get height(): number;
    /**
     * Получить диагональ прямоугольника
     */
    get diagonal(): number;
    /**
     * Проверить, является ли прямоугольник квадратом
     */
    get isSquare(): boolean;
    /**
     * Вычислить площадь прямоугольника
     * @returns Promise с площадью
     */
    getArea(): Promise<number>;
    /**
     * Вычислить периметр прямоугольника
     * @returns Promise с периметром
     */
    getPerimeter(): Promise<number>;
    /**
     * Проверить валидность прямоугольника
     */
    isValid(): boolean;
    /**
     * Обновить параметры прямоугольника
     */
    update(params: Partial<RectangleParams>): Promise<void>;
}
