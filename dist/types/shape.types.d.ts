export declare enum ShapeType {
    RECTANGLE = "rectangle",
    TRIANGLE = "triangle",
    CIRCLE = "circle",
    POLYGON = "polygon"
}
/**
 * Базовый интерфейс для параметров фигур
 */
export interface ShapeParams {
    [key: string]: number | number[];
}
/**
 * Интерфейс для параметров прямоугольника
 */
export interface RectangleParams extends ShapeParams {
    width: number;
    height: number;
}
/**
 * Интерфейс для параметров треугольника
 */
export interface TriangleParams extends ShapeParams {
    sideA: number;
    sideB: number;
    sideC: number;
}
/**
 * Интерфейс для параметров круга
 */
export interface CircleParams extends ShapeParams {
    radius: number;
}
/**
 * Интерфейс для параметров многоугольника
 */
export interface PolygonParams extends ShapeParams {
    vertices: number[];
}
/**
 * События фигур
 */
export declare enum ShapeEventType {
    UPDATE = "update",
    DESTROY = "destroy",
    CALCULATE = "calculate"
}
/**
 * Интерфейс для данных событий
 */
export interface ShapeEventDetail<T = any> {
    shapeId: string;
    timestamp?: number;
    data?: T;
}
