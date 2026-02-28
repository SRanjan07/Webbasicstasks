class Shape {
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculatearea() {
        return Math.PI * this.radius * this.radius;
    }
}
const c1 = new Circle(5);
console.log(c1.calculatearea());
export {};
