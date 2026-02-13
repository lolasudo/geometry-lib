import { ShapeEventType } from '../types/shape.types.js';
/**
 * Класс для управления событиями фигур
 * Реализует паттерн EventTarget для работы с событиями
 */
export declare class ShapeEventTarget extends EventTarget {
    /**
  
     * @param type - тип события
     * @param detail - данные события
     * @returns CustomEvent
     */
    protected createEvent<T>(type: ShapeEventType, detail?: T): CustomEvent<T>;
    /**
     * Диспатч события
     * @param type - тип события
     * @param detail - данные события
     */
    protected dispatchShapeEvent<T>(type: ShapeEventType, detail?: T): void;
}
