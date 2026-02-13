import { ShapeEventType, ShapeEventDetail } from '../types/shape.types.js';

/**
 * Класс для управления событиями фигур
 * Реализует паттерн EventTarget для работы с событиями
 */
export class ShapeEventTarget extends EventTarget {
  /**

   * @param type - тип события
   * @param detail - данные события
   * @returns CustomEvent
   */
  protected createEvent<T>(type: ShapeEventType, detail?: T): CustomEvent<T> {
    return new CustomEvent<T>(type, { 
      detail,
      bubbles: true,
      cancelable: true 
    });
  }

  /**
   * Диспатч события
   * @param type - тип события
   * @param detail - данные события
   */
  protected dispatchShapeEvent<T>(type: ShapeEventType, detail?: T): void {
    const eventDetail: ShapeEventDetail<T> = {
      shapeId: 'temp',
      timestamp: Date.now(),
      data: detail
    };
    const event = this.createEvent(type, eventDetail);
    this.dispatchEvent(event);
  }
}