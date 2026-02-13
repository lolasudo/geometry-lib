import { BaseShape } from '../core/BaseShape.js';
import { ShapeType, ShapeEventType } from '../types/shape.types.js';
/**
 * Класс, представляющий круг
 * @example
 * ```typescript
 * const circle = new Circle({ radius: 5 });
 * const diameter = circle.diameter;
 * ```
 */
export class Circle extends BaseShape {
    constructor(params) {
        super(ShapeType.CIRCLE, params);
        this._radius = params.radius;
        if (!this.isValid()) {
            throw new Error('Invalid circle parameters');
        }
    }
    /**
     * Получить радиус круга
     */
    get radius() {
        return this._radius;
    }
    /**
     * Получить диаметр круга
     */
    get diameter() {
        return this._radius * 2;
    }
    /**
     * Получить длину окружности
     */
    get circumference() {
        return 2 * Math.PI * this._radius;
    }
    /**
     * Вычислить площадь круга
     * @returns Promise с площадью
     */
    async getArea() {
        const area = Math.PI * Math.pow(this._radius, 2);
        this.dispatchShapeEvent(ShapeEventType.CALCULATE, {
            shapeId: this.id,
            calculation: 'area',
            result: area
        });
        return area;
    }
    /**
     * Вычислить периметр (длину окружности) круга
     * @returns Promise с периметром
     */
    async getPerimeter() {
        const perimeter = this.circumference;
        this.dispatchShapeEvent(ShapeEventType.CALCULATE, {
            shapeId: this.id,
            calculation: 'perimeter',
            result: perimeter
        });
        return perimeter;
    }
    /**
     * Проверить валидность круга
     */
    isValid() {
        return this.validateNumber(this._radius);
    }
    /**
     * Обновить параметры круга
     */
    async update(params) {
        await super.update(params);
        if (params.radius !== undefined)
            this._radius = params.radius;
    }
}
