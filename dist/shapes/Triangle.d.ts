import { BaseShape } from '../core/BaseShape.js';
import { TriangleParams } from '../types/shape.types.js';
/**
 * Класс, представляющий треугольник
 * @example
 * ```typescript
 * const triangle = new Triangle({ sideA: 3, sideB: 4, sideC: 5 });
 * const isRight = triangle.isRightTriangle;
 * ```
 */
export declare class Triangle extends BaseShape {
    private _sideA;
    private _sideB;
    private _sideC;
    constructor(params: TriangleParams);
    /**
     * Получить сторону A
     */
    get sideA(): number;
    /**
     * Получить сторону B
     */
    get sideB(): number;
    /**
     * Получить сторону C
     */
    get sideC(): number;
    /**
     * Проверить, является ли треугольник прямоугольным
     */
    get isRightTriangle(): boolean;
    /**
     * Проверить, является ли треугольник равносторонним
     */
    get isEquilateral(): boolean;
    /**
     * Проверить, является ли треугольник равнобедренным
     */
    get isIsosceles(): boolean;
    /**
     * Вычислить площадь треугольника по формуле Герона
     * @returns Promise с площадью
     */
    getArea(): Promise<number>;
    /**
     * Вычислить периметр треугольника
     * @returns Promise с периметром
     */
    getPerimeter(): Promise<number>;
    /**
     * Проверить валидность треугольника
     * Проверяет неравенство треугольника и положительность сторон
     */
    isValid(): boolean;
    /**
     * Обновить параметры треугольника
     */
    update(params: Partial<TriangleParams>): Promise<void>;
}
