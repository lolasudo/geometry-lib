// Основные классы фигур
import { Rectangle } from './shapes/Rectangle.js';
import { Triangle } from './shapes/Triangle.js';
import { Circle } from './shapes/Circle.js';
import { Polygon } from './shapes/Polygon.js';


import { BaseShape } from './core/BaseShape.js';
import { ShapeEventTarget } from './core/ShapeEventTarget.js';
import { IShape } from './interfaces/IShape.js';
import { 
  ShapeType, 
  ShapeEventType,
  RectangleParams,
  TriangleParams,
  CircleParams,
  PolygonParams,
  ShapeParams,
  ShapeEventDetail
} from './types/shape.types.js';

export { 
  Rectangle, 
  Triangle, 
  Circle, 
  Polygon,
  BaseShape, 
  ShapeEventTarget, 
  IShape,
  ShapeType, 
  ShapeEventType,
  RectangleParams,
  TriangleParams,
  CircleParams,
  PolygonParams,
  ShapeParams,
  ShapeEventDetail
};


export class ShapeFactory {
  static createRectangle(width: number, height: number): Rectangle {
    return new Rectangle({ width, height });
  }

  static createCircle(radius: number): Circle {
    return new Circle({ radius });
  }

  static createTriangle(sideA: number, sideB: number, sideC: number): Triangle {
    return new Triangle({ sideA, sideB, sideC });
  }

  static createPolygon(vertices: number[]): Polygon {
    return new Polygon({ vertices });
  }
}

/**
 * Утилиты для работы с фигурами
 */
export class ShapeUtils {
  static async compareArea(shape1: IShape, shape2: IShape): Promise<number> {
    const area1 = await shape1.getArea();
    const area2 = await shape2.getArea();
    return area1 - area2;
  }

  static async totalArea(shapes: IShape[]): Promise<number> {
    const areas = await Promise.all(shapes.map(shape => shape.getArea()));
    return areas.reduce((sum: number, area: number) => sum + area, 0);
  }

  static async totalPerimeter(shapes: IShape[]): Promise<number> {
    const perimeters = await Promise.all(shapes.map(shape => shape.getPerimeter()));
    return perimeters.reduce((sum: number, perimeter: number) => sum + perimeter, 0);
  }
}