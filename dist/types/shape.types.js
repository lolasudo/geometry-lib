export var ShapeType;
(function (ShapeType) {
    ShapeType["RECTANGLE"] = "rectangle";
    ShapeType["TRIANGLE"] = "triangle";
    ShapeType["CIRCLE"] = "circle";
    ShapeType["POLYGON"] = "polygon";
})(ShapeType || (ShapeType = {}));
/**
 * События фигур
 */
export var ShapeEventType;
(function (ShapeEventType) {
    ShapeEventType["UPDATE"] = "update";
    ShapeEventType["DESTROY"] = "destroy";
    ShapeEventType["CALCULATE"] = "calculate";
})(ShapeEventType || (ShapeEventType = {}));
