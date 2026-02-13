import { BaseShape } from '../core/BaseShape.js';
import { ShapeType, ShapeEventType } from '../types/shape.types.js';
/**
 * Класс для работы с многоугольниками с произвольным количеством вершин
 * @example
 * ```typescript
 * const polygon = new Polygon({
 *   vertices: [0, 0, 10, 0, 10, 10, 0, 10]
 * });
 * ```
 */
export class Polygon extends BaseShape {
    constructor(params) {
        super(ShapeType.POLYGON, params);
        this._vertices = [...params.vertices];
        if (!this.isValid()) {
            throw new Error('Invalid polygon parameters');
        }
    }
    /**
     * Получить количество вершин
     */
    get vertexCount() {
        return this._vertices.length / 2;
    }
    /**
     * Получить массив вершин
     */
    get vertices() {
        return [...this._vertices];
    }
    /**
     * Вычислить площадь многоугольника (метод Гаусса)
     * @returns Promise с площадью
     */
    async getArea() {
        let area = 0;
        const n = this.vertexCount;
        for (let i = 0; i < n; i++) {
            const x1 = this._vertices[i * 2];
            const y1 = this._vertices[i * 2 + 1];
            const x2 = this._vertices[((i + 1) % n) * 2];
            const y2 = this._vertices[((i + 1) % n) * 2 + 1];
            area += x1 * y2 - x2 * y1;
        }
        const result = Math.abs(area) / 2;
        this.dispatchShapeEvent(ShapeEventType.CALCULATE, {
            shapeId: this.id,
            calculation: 'area',
            result
        });
        return result;
    }
    /**
     * Вычислить периметр многоугольника
     * @returns Promise с периметром
     */
    async getPerimeter() {
        let perimeter = 0;
        const n = this.vertexCount;
        for (let i = 0; i < n; i++) {
            const x1 = this._vertices[i * 2];
            const y1 = this._vertices[i * 2 + 1];
            const x2 = this._vertices[((i + 1) % n) * 2];
            const y2 = this._vertices[((i + 1) % n) * 2 + 1];
            perimeter += Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }
        this.dispatchShapeEvent(ShapeEventType.CALCULATE, {
            shapeId: this.id,
            calculation: 'perimeter',
            result: perimeter
        });
        return perimeter;
    }
    /**
     * Проверить валидность многоугольника
     */
    isValid() {
        if (this._vertices.length < 6 || this._vertices.length % 2 !== 0) {
            return false;
        }
        return this._vertices.every(coord => this.validateNumber(coord, false));
    }
    /**
     * Масштабировать многоугольник
     * @param factor - коэффициент масштабирования
     */
    async scale(factor) {
        if (!this.validateNumber(factor)) {
            throw new Error('Scale factor must be positive number');
        }
        let sumX = 0, sumY = 0;
        for (let i = 0; i < this._vertices.length; i += 2) {
            sumX += this._vertices[i];
            sumY += this._vertices[i + 1];
        }
        const centerX = sumX / this.vertexCount;
        const centerY = sumY / this.vertexCount;
        const newVertices = this._vertices.map((coord, index) => {
            const center = index % 2 === 0 ? centerX : centerY;
            return center + (coord - center) * factor;
        });
        await this.update({ vertices: newVertices });
    }
    /**
     * Обновить параметры многоугольника
     */
    async update(params) {
        await super.update(params);
        if (params.vertices !== undefined) {
            this._vertices = [...params.vertices];
        }
    }
    /**
     * Получить bounding box многоугольника
     */
    getBoundingBox() {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        for (let i = 0; i < this._vertices.length; i += 2) {
            minX = Math.min(minX, this._vertices[i]);
            minY = Math.min(minY, this._vertices[i + 1]);
            maxX = Math.max(maxX, this._vertices[i]);
            maxY = Math.max(maxY, this._vertices[i + 1]);
        }
        return { minX, minY, maxX, maxY };
    }
}
