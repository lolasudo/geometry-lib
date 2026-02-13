import { BaseShape } from '../core/BaseShape.js';
import { ShapeType, RectangleParams, ShapeEventType } from '../types/shape.types.js';

/**
 * Класс, представляющий прямоугольник
 * @example
 * ```typescript
 * const rectangle = new Rectangle({ width: 10, height: 5 });
 * const area = await rectangle.getArea();
 * ```
 */
export class Rectangle extends BaseShape {
  private _width: number;
  private _height: number;

  constructor(params: RectangleParams) {
    super(ShapeType.RECTANGLE, params);
    this._width = params.width;
    this._height = params.height;
    
    if (!this.isValid()) {
      throw new Error('Invalid rectangle parameters');
    }
  }

  /**
   * Получить ширину прямоугольника
   */
  public get width(): number {
    return this._width;
  }

  /**
   * Получить высоту прямоугольника
   */
  public get height(): number {
    return this._height;
  }

  /**
   * Получить диагональ прямоугольника
   */
  public get diagonal(): number {
    return Math.sqrt(Math.pow(this._width, 2) + Math.pow(this._height, 2));
  }

  /**
   * Проверить, является ли прямоугольник квадратом
   */
  public get isSquare(): boolean {
    return Math.abs(this._width - this._height) < Number.EPSILON;
  }

  /**
   * Вычислить площадь прямоугольника
   * @returns Promise с площадью
   */
  public async getArea(): Promise<number> {
    const area = this._width * this._height;
    this.dispatchShapeEvent(ShapeEventType.CALCULATE, {
      shapeId: this.id,
      calculation: 'area',
      result: area
    });
    return area;
  }

  /**
   * Вычислить периметр прямоугольника
   * @returns Promise с периметром
   */
  public async getPerimeter(): Promise<number> {
    const perimeter = 2 * (this._width + this._height);
    this.dispatchShapeEvent(ShapeEventType.CALCULATE, {
      shapeId: this.id,
      calculation: 'perimeter',
      result: perimeter
    });
    return perimeter;
  }

  /**
   * Проверить валидность прямоугольника
   */
  public isValid(): boolean {
    return this.validateNumber(this._width) && 
           this.validateNumber(this._height);
  }

  /**
   * Обновить параметры прямоугольника
   */
  public async update(params: Partial<RectangleParams>): Promise<void> {
    await super.update(params);
    if (params.width !== undefined) this._width = params.width;
    if (params.height !== undefined) this._height = params.height;
  }
}