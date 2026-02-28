abstract class Vehicle {
  constructor(public brand: string) {}

  abstract start(): void;

  stop(): void {
    console.log("Vehicle stopped");
  }
}

class Car extends Vehicle {
  start(): void {
    console.log(`${this.brand} car started`);
  }
}

const car1 = new Car("Toyota");
car1.start();
car1.stop();