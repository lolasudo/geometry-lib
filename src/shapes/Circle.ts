import { BaseShape } from '../core/BaseShape.js';
import { ShapeType, CircleParams, ShapeEventType } from '../types/shape.types.js';

/**
 * Класс, представляющий круг
 * @example
 * ```typescript
 * const circle = new Circle({ radius: 5 });
 * const diameter = circle.diameter;
 * ```
 */
export class Circle extends BaseShape {
  private _radius: number;

  constructor(params: CircleParams) {
    super(ShapeType.CIRCLE, params);
    this._radius = params.radius;
    
    if (!this.isValid()) {
      throw new Error('Invalid circle parameters');
    }
  }

  /**
   * Получить радиус круга
   */
  public get radius(): number {
    return this._radius;
  }

  /**
   * Получить диаметр круга
   */
  public get diameter(): number {
    return this._radius * 2;
  }

  /**
   * Получить длину окружности
   */
  public get circumference(): number {
    return 2 * Math.PI * this._radius;
  }

  /**
   * Вычислить площадь круга
   * @returns Promise с площадью
   */
  public async getArea(): Promise<number> {
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
  public async getPerimeter(): Promise<number> {
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
  public isValid(): boolean {
    return this.validateNumber(this._radius);
  }

  /**
   * Обновить параметры круга
   */
  public async update(params: Partial<CircleParams>): Promise<void> {
    await super.update(params);
    if (params.radius !== undefined) this._radius = params.radius;
  }
}