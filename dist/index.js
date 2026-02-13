// Основные классы фигур
import { Rectangle } from './shapes/Rectangle.js';
import { Triangle } from './shapes/Triangle.js';
import { Circle } from './shapes/Circle.js';
import { Polygon } from './shapes/Polygon.js';
import { BaseShape } from './core/BaseShape.js';
import { ShapeEventTarget } from './core/ShapeEventTarget.js';
import { ShapeType, ShapeEventType } from './types/shape.types.js';
export { Rectangle, Triangle, Circle, Polygon, BaseShape, ShapeEventTarget, ShapeType, ShapeEventType };
export class ShapeFactory {
    static createRectangle(width, height) {
        return new Rectangle({ width, height });
    }
    static createCircle(radius) {
        return new Circle({ radius });
    }
    static createTriangle(sideA, sideB, sideC) {
        return new Triangle({ sideA, sideB, sideC });
    }
    static createPolygon(vertices) {
        return new Polygon({ vertices });
    }
}
/**
 * Утилиты для работы с фигурами
 */
export class ShapeUtils {
    static async compareArea(shape1, shape2) {
        const area1 = await shape1.getArea();
        const area2 = await shape2.getArea();
        return area1 - area2;
    }
    static async totalArea(shapes) {
        const areas = await Promise.all(shapes.map(shape => shape.getArea()));
        return areas.reduce((sum, area) => sum + area, 0);
    }
    static async totalPerimeter(shapes) {
        const perimeters = await Promise.all(shapes.map(shape => shape.getPerimeter()));
        return perimeters.reduce((sum, perimeter) => sum + perimeter, 0);
    }
}
