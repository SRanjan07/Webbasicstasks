class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    stop() {
        console.log("Vehicle stopped");
    }
}
class Car extends Vehicle {
    start() {
        console.log(`${this.brand} car started`);
    }
}
const car1 = new Car("Toyota");
car1.start();
car1.stop();
export {};
