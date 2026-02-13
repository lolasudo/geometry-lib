import { IShape } from '../interfaces/IShape.js';
import { ShapeType, ShapeParams, ShapeEventType } from '../types/shape.types.js';
import { ShapeEventTarget } from './ShapeEventTarget.js';
export declare abstract class BaseShape extends ShapeEventTarget implements IShape {
    readonly id: string;
    readonly type: ShapeType;
    readonly createdAt: Date;
    protected _params: ShapeParams;
    constructor(type: ShapeType, params: ShapeParams);
    /**
     * Получить параметры фигуры
     */
    get params(): ShapeParams;
    /**
     * Абстрактный метод для вычисления площади
     */
    abstract getArea(): Promise<number>;
    /**
     * Абстрактный метод для вычисления периметра
     */
    abstract getPerimeter(): Promise<number>;
    /**
     * Проверить валидность фигуры
     * Должен быть переопределен в дочерних классах
     */
    abstract isValid(): boolean;
    /**
     * Обновить параметры фигуры
     * @param params - новые параметры
     */
    update(params: Partial<ShapeParams>): Promise<void>;
    /**
     * Уничтожить фигуру
     */
    destroy(): Promise<void>;
    /**
     * Валидация числового параметра
     * @param value - значение для проверки
     * @param positive - должно ли быть положительным
     */
    protected validateNumber(value: number, positive?: boolean): boolean;
    /**
     * Добавить обработчик события
     */
    addEventListener(event: ShapeEventType, callback: EventListener): void;
    /**
     * Удалить обработчик события
     */
    removeEventListener(event: ShapeEventType, callback: EventListener): void;
}
