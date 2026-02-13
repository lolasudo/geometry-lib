import { v4 as uuidv4 } from 'uuid';
import { ShapeEventType } from '../types/shape.types.js';
import { ShapeEventTarget } from './ShapeEventTarget.js';
export class BaseShape extends ShapeEventTarget {
    constructor(type, params) {
        super();
        this.id = uuidv4();
        this.type = type;
        this.createdAt = new Date();
        this._params = { ...params };
    }
    /**
     * Получить параметры фигуры
     */
    get params() {
        return { ...this._params };
    }
    /**
     * Обновить параметры фигуры
     * @param params - новые параметры
     */
    async update(params) {
        const oldParams = { ...this._params };
        const newParams = { ...this._params };
        Object.keys(params).forEach(key => {
            const value = params[key];
            if (value !== undefined) {
                newParams[key] = value;
            }
        });
        this._params = newParams;
        if (!this.isValid()) {
            this._params = oldParams;
            throw new Error('Invalid shape parameters after update');
        }
        this.dispatchShapeEvent(ShapeEventType.UPDATE, {
            shapeId: this.id,
            oldParams,
            newParams: this._params
        });
    }
    /**
     * Уничтожить фигуру
     */
    async destroy() {
        this.dispatchShapeEvent(ShapeEventType.DESTROY, {
            shapeId: this.id,
            type: this.type
        });
    }
    /**
     * Валидация числового параметра
     * @param value - значение для проверки
     * @param positive - должно ли быть положительным
     */
    validateNumber(value, positive = true) {
        return typeof value === 'number' &&
            !isNaN(value) &&
            isFinite(value) &&
            (!positive || value > 0);
    }
    /**
     * Добавить обработчик события
     */
    addEventListener(event, callback) {
        super.addEventListener(event, callback);
    }
    /**
     * Удалить обработчик события
     */
    removeEventListener(event, callback) {
        super.removeEventListener(event, callback);
    }
}
