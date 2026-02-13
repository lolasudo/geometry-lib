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
    createEvent(type, detail) {
        return new CustomEvent(type, {
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
    dispatchShapeEvent(type, detail) {
        const eventDetail = {
            shapeId: 'temp',
            timestamp: Date.now(),
            data: detail
        };
        const event = this.createEvent(type, eventDetail);
        this.dispatchEvent(event);
    }
}
