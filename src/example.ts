import { 
  Rectangle, 
  Circle, 
  Triangle, 
  Polygon, 
  ShapeFactory, 
  ShapeUtils,
  ShapeEventType 
} from './index.js';

async function example() {
  // Создание фигур через конструктор
  const rectangle = new Rectangle({ width: 10, height: 5 });
  const circle = new Circle({ radius: 7 });
  const triangle = new Triangle({ sideA: 3, sideB: 4, sideC: 5 });
  const polygon = new Polygon({ vertices: [0, 0, 10, 0, 10, 10, 0, 10] });

  // Создание через фабрику
  const rect2 = ShapeFactory.createRectangle(8, 6);
  const circle2 = ShapeFactory.createCircle(5);

  // Подписка на события
  rectangle.addEventListener(ShapeEventType.CALCULATE, (event: any) => {
    console.log('Rectangle calculation:', event.detail);
  });

  // Работа с фигурами
  console.log('Rectangle area:', await rectangle.getArea());
  console.log('Rectangle perimeter:', await rectangle.getPerimeter());
  console.log('Rectangle diagonal:', rectangle.diagonal);
  console.log('Is square:', rectangle.isSquare);

  console.log('Circle area:', await circle.getArea());
  console.log('Circle diameter:', circle.diameter);
  console.log('Circle circumference:', circle.circumference);

  console.log('Triangle area:', await triangle.getArea());
  console.log('Triangle is right:', triangle.isRightTriangle);
  console.log('Triangle is equilateral:', triangle.isEquilateral);

  console.log('Polygon area:', await polygon.getArea());
  console.log('Polygon perimeter:', await polygon.getPerimeter());
  console.log('Polygon vertices:', polygon.vertexCount);
  console.log('Polygon bounding box:', polygon.getBoundingBox());

  // Масштабирование многоугольника
  await polygon.scale(2);
  console.log('Polygon area after scale:', await polygon.getArea());

  // Утилиты
  const shapes = [rectangle, circle, triangle];
  console.log('Total area:', await ShapeUtils.totalArea(shapes));
  console.log('Total perimeter:', await ShapeUtils.totalPerimeter(shapes));

  // Сравнение площадей
  const comparison = await ShapeUtils.compareArea(rectangle, circle);
  console.log('Area comparison (rectangle - circle):', comparison);
}

example().catch(console.error);