import { BaseShape } from '../core/BaseShape.js';
import { ShapeType, TriangleParams, ShapeEventType } from '../types/shape.types.js';

/**
 * Класс, представляющий треугольник
 * @example
 * ```typescript
 * const triangle = new Triangle({ sideA: 3, sideB: 4, sideC: 5 });
 * const isRight = triangle.isRightTriangle;
 * ```
 */
export class Triangle extends BaseShape {
  private _sideA: number;
  private _sideB: number;
  private _sideC: number;

  constructor(params: TriangleParams) {
    super(ShapeType.TRIANGLE, params);
    this._sideA = params.sideA;
    this._sideB = params.sideB;
    this._sideC = params.sideC;
    
    if (!this.isValid()) {
      throw new Error('Invalid triangle parameters');
    }
  }

  /**
   * Получить сторону A
   */
  public get sideA(): number {
    return this._sideA;
  }

  /**
   * Получить сторону B
   */
  public get sideB(): number {
    return this._sideB;
  }

  /**
   * Получить сторону C
   */
  public get sideC(): number {
    return this._sideC;
  }

  /**
   * Проверить, является ли треугольник прямоугольным
   */
  public get isRightTriangle(): boolean {
    const sides = [this._sideA, this._sideB, this._sideC].sort((a, b) => a - b);
    return Math.abs(Math.pow(sides[2], 2) - (Math.pow(sides[0], 2) + Math.pow(sides[1], 2))) < Number.EPSILON;
  }

  /**
   * Проверить, является ли треугольник равносторонним
   */
  public get isEquilateral(): boolean {
    return Math.abs(this._sideA - this._sideB) < Number.EPSILON && 
           Math.abs(this._sideB - this._sideC) < Number.EPSILON;
  }

  /**
   * Проверить, является ли треугольник равнобедренным
   */
  public get isIsosceles(): boolean {
    return (Math.abs(this._sideA - this._sideB) < Number.EPSILON) ||
           (Math.abs(this._sideA - this._sideC) < Number.EPSILON) ||
           (Math.abs(this._sideB - this._sideC) < Number.EPSILON);
  }

  /**
   * Вычислить площадь треугольника по формуле Герона
   * @returns Promise с площадью
   */
  public async getArea(): Promise<number> {
    const s = await this.getPerimeter() / 2;
    const area = Math.sqrt(s * (s - this._sideA) * (s - this._sideB) * (s - this._sideC));
    
    this.dispatchShapeEvent(ShapeEventType.CALCULATE, {
      shapeId: this.id,
      calculation: 'area',
      result: area
    });
    
    return area;
  }

  /**
   * Вычислить периметр треугольника
   * @returns Promise с периметром
   */
  public async getPerimeter(): Promise<number> {
    const perimeter = this._sideA + this._sideB + this._sideC;
    
    this.dispatchShapeEvent(ShapeEventType.CALCULATE, {
      shapeId: this.id,
      calculation: 'perimeter',
      result: perimeter
    });
    
    return perimeter;
  }

  /**
   * Проверить валидность треугольника
   * Проверяет неравенство треугольника и положительность сторон
   */
  public isValid(): boolean {
    if (!this.validateNumber(this._sideA) || 
        !this.validateNumber(this._sideB) || 
        !this.validateNumber(this._sideC)) {
      return false;
    }

    return this._sideA + this._sideB > this._sideC &&
           this._sideA + this._sideC > this._sideB &&
           this._sideB + this._sideC > this._sideA;
  }

  /**
   * Обновить параметры треугольника
   */
  public async update(params: Partial<TriangleParams>): Promise<void> {
    await super.update(params);
    if (params.sideA !== undefined) this._sideA = params.sideA;
    if (params.sideB !== undefined) this._sideB = params.sideB;
    if (params.sideC !== undefined) this._sideC = params.sideC;
  }
}