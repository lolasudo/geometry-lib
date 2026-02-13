import { BaseShape } from '../core/BaseShape.js';
import { CircleParams } from '../types/shape.types.js';
/**
 * Класс, представляющий круг
 * @example
 * ```typescript
 * const circle = new Circle({ radius: 5 });
 * const diameter = circle.diameter;
 * ```
 */
export declare class Circle extends BaseShape {
    private _radius;
    constructor(params: CircleParams);
    /**
     * Получить радиус круга
     */
    get radius(): number;
    /**
     * Получить диаметр круга
     */
    get diameter(): number;
    /**
     * Получить длину окружности
     */
    get circumference(): number;
    /**
     * Вычислить площадь круга
     * @returns Promise с площадью
     */
    getArea(): Promise<number>;
    /**
     * Вычислить периметр (длину окружности) круга
     * @returns Promise с периметром
     */
    getPerimeter(): Promise<number>;
    /**
     * Проверить валидность круга
     */
    isValid(): boolean;
    /**
     * Обновить параметры круга
     */
    update(params: Partial<CircleParams>): Promise<void>;
}
