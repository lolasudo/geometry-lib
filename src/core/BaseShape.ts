import { v4 as uuidv4 } from 'uuid';
import { IShape } from '../interfaces/IShape.js';
import { ShapeType, ShapeParams, ShapeEventType } from '../types/shape.types.js';
import { ShapeEventTarget } from './ShapeEventTarget.js';


export abstract class BaseShape extends ShapeEventTarget implements IShape {
  public readonly id: string;
  public readonly type: ShapeType;
  public readonly createdAt: Date;
  protected _params: ShapeParams;

  constructor(type: ShapeType, params: ShapeParams) {
    super();
    this.id = uuidv4();
    this.type = type;
    this.createdAt = new Date();
    this._params = { ...params };
  }

  /**
   * Получить параметры фигуры
   */
  public get params(): ShapeParams {
    return { ...this._params };
  }

  /**
   * Абстрактный метод для вычисления площади
   */
  public abstract getArea(): Promise<number>;

  /**
   * Абстрактный метод для вычисления периметра
   */
  public abstract getPerimeter(): Promise<number>;

  /**
   * Проверить валидность фигуры
   * Должен быть переопределен в дочерних классах
   */
  public abstract isValid(): boolean;

  /**
   * Обновить параметры фигуры
   * @param params - новые параметры
   */
  public async update(params: Partial<ShapeParams>): Promise<void> {
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
  public async destroy(): Promise<void> {
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
  protected validateNumber(value: number, positive: boolean = true): boolean {
    return typeof value === 'number' && 
           !isNaN(value) && 
           isFinite(value) && 
           (!positive || value > 0);
  }

  /**
   * Добавить обработчик события
   */
  public addEventListener(event: ShapeEventType, callback: EventListener): void {
    super.addEventListener(event, callback);
  }

  /**
   * Удалить обработчик события
   */
  public removeEventListener(event: ShapeEventType, callback: EventListener): void {
    super.removeEventListener(event, callback);
  }
}