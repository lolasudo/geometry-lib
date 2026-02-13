import { BaseShape } from '../core/BaseShape.js';
import { ShapeType, ShapeEventType } from '../types/shape.types.js';
/**
 * Класс, представляющий треугольник
 * @example
 * ```typescript
 * const triangle = new Triangle({ sideA: 3, sideB: 4, sideC: 5 });
 * const isRight = triangle.isRightTriangle;
 * ```
 */
export class Triangle extends BaseShape {
    constructor(params) {
        super(ShapeType.TRIANGLE, params);
        this._sideA = params.sideA;
        this._sideB = params.sideB;
        this._sideC = params.sideC;
        if (!this.isValid()) {
            throw new Error('Invalid triangle parameters');
        }
    }
    /**
     * Получить сторону A
     */
    get sideA() {
        return this._sideA;
    }
    /**
     * Получить сторону B
     */
    get sideB() {
        return this._sideB;
    }
    /**
     * Получить сторону C
     */
    get sideC() {
        return this._sideC;
    }
    /**
     * Проверить, является ли треугольник прямоугольным
     */
    get isRightTriangle() {
        const sides = [this._sideA, this._sideB, this._sideC].sort((a, b) => a - b);
        return Math.abs(Math.pow(sides[2], 2) - (Math.pow(sides[0], 2) + Math.pow(sides[1], 2))) < Number.EPSILON;
    }
    /**
     * Проверить, является ли треугольник равносторонним
     */
    get isEquilateral() {
        return Math.abs(this._sideA - this._sideB) < Number.EPSILON &&
            Math.abs(this._sideB - this._sideC) < Number.EPSILON;
    }
    /**
     * Проверить, является ли треугольник равнобедренным
     */
    get isIsosceles() {
        return (Math.abs(this._sideA - this._sideB) < Number.EPSILON) ||
            (Math.abs(this._sideA - this._sideC) < Number.EPSILON) ||
            (Math.abs(this._sideB - this._sideC) < Number.EPSILON);
    }
    /**
     * Вычислить площадь треугольника по формуле Герона
     * @returns Promise с площадью
     */
    async getArea() {
        const s = await this.getPerimeter() / 2;
        const area = Math.sqrt(s * (s - this._sideA) * (s - this._sideB) * (s - this._sideC));
        this.dispatchShapeEvent(ShapeEventType.CALCULATE, {
            shapeId: this.id,
            calculation: 'area',
            result: area
        });
        return area;
    }
    /**
     * Вычислить периметр треугольника
     * @returns Promise с периметром
     */
    async getPerimeter() {
        const perimeter = this._sideA + this._sideB + this._sideC;
        this.dispatchShapeEvent(ShapeEventType.CALCULATE, {
            shapeId: this.id,
            calculation: 'perimeter',
            result: perimeter
        });
        return perimeter;
    }
    /**
     * Проверить валидность треугольника
     * Проверяет неравенство треугольника и положительность сторон
     */
    isValid() {
        if (!this.validateNumber(this._sideA) ||
            !this.validateNumber(this._sideB) ||
            !this.validateNumber(this._sideC)) {
            return false;
        }
        return this._sideA + this._sideB > this._sideC &&
            this._sideA + this._sideC > this._sideB &&
            this._sideB + this._sideC > this._sideA;
    }
    /**
     * Обновить параметры треугольника
     */
    async update(params) {
        await super.update(params);
        if (params.sideA !== undefined)
            this._sideA = params.sideA;
        if (params.sideB !== undefined)
            this._sideB = params.sideB;
        if (params.sideC !== undefined)
            this._sideC = params.sideC;
    }
}
