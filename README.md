# Geometry Library

Библиотека для работы с геометрическими фигурами на TypeScript. 
Предоставляет удобный API для создания и манипуляции прямоугольниками, треугольниками, кругами и многоугольниками.

## Установка

```bash
npm install geometry-lib

Быстрый старт
typescript
import { Rectangle, Circle, ShapeFactory } from 'geometry-lib';

// Создание фигур
const rect = new Rectangle({ width: 10, height: 5 });
const circle = ShapeFactory.createCircle(7);

// Вычисления
const area = await rect.getArea();
const perimeter = await rect.getPerimeter();

console.log(`Площадь: ${area}`);        // 50
console.log(`Периметр: ${perimeter}`);   // 30

Разработка
bash
# Установка зависимостей
npm install

# Сборка проекта
npm run build

# Режим разработки
npm run dev

# Запуск примера
npm run example

# Очистка папки dist
npm run clean

Лицензия
MIT

text
Это минимальный рабочий вариант. Если нужно больше деталей - можно добавить позже.