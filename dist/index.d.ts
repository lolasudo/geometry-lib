import { Rectangle } from './shapes/Rectangle.js';
import { Triangle } from './shapes/Triangle.js';
import { Circle } from './shapes/Circle.js';
import { Polygon } from './shapes/Polygon.js';
import { BaseShape } from './core/BaseShape.js';
import { ShapeEventTarget } from './core/ShapeEventTarget.js';
import { IShape } from './interfaces/IShape.js';
import { ShapeType, ShapeEventType, RectangleParams, TriangleParams, CircleParams, PolygonParams, ShapeParams, ShapeEventDetail } from './types/shape.types.js';
export { Rectangle, Triangle, Circle, Polygon, BaseShape, ShapeEventTarget, IShape, ShapeType, ShapeEventType, RectangleParams, TriangleParams, CircleParams, PolygonParams, ShapeParams, ShapeEventDetail };
export declare class ShapeFactory {
    static createRectangle(width: number, height: number): Rectangle;
    static createCircle(radius: number): Circle;
    static createTriangle(sideA: number, sideB: number, sideC: number): Triangle;
    static createPolygon(vertices: number[]): Polygon;
}
/**
 * Утилиты для работы с фигурами
 */
export declare class ShapeUtils {
    static compareArea(shape1: IShape, shape2: IShape): Promise<number>;
    static totalArea(shapes: IShape[]): Promise<number>;
    static totalPerimeter(shapes: IShape[]): Promise<number>;
}
