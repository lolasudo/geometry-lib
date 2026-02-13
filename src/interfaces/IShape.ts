import { ShapeType, ShapeParams, ShapeEventType } from '../types/shape.types.js';

/**
 * Интерфейс для всех геометрических фигур
 */
export interface IShape {
  /** Уникальный идентификатор фигуры */
  readonly id: string;
  /** Тип фигуры */
  readonly type: ShapeType;
  /** Параметры фигуры */
  readonly params: ShapeParams;
  /** Время создания фигуры */
  readonly createdAt: Date;

  /**
   * Получить площадь фигуры
   * @returns Promise с площадью фигуры
   */
  getArea(): Promise<number>;

  /**
   * Получить периметр фигуры
   * @returns Promise с периметром фигуры
   */
  getPerimeter(): Promise<number>;

  /**
   * Обновить параметры фигуры
   * @param params - новые параметры
   * @throws {Error} если параметры невалидны
   */
  update(params: Partial<ShapeParams>): Promise<void>;

  /**
   * Уничтожить фигуру
   */
  destroy(): Promise<void>;

  /**
   * Проверить валидность фигуры
   * @returns true если фигура валидна
   */
  isValid(): boolean;

  /**
   * Добавить обработчик события
   * @param event - тип события
   * @param callback - функция-обработчик
   */
  addEventListener(event: ShapeEventType, callback: EventListener): void;

  /**
   * Удалить обработчик события
   * @param event - тип события
   * @param callback - функция-обработчик
   */
  removeEventListener(event: ShapeEventType, callback: EventListener): void;
}