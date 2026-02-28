abstract class Shape {
  abstract calculatearea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculatearea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const c1 = new Circle(5);
console.log(c1.calculatearea());