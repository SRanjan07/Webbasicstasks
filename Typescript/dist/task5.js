class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `${this.name} earns ₹${this.salary}`;
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    getDepartment() {
        console.log(`${this.department}`);
    }
}
const m1 = new Manager("Rahul", 80000, "IT");
console.log(m1.getDetails());
console.log(m1.getDepartment());
export {};
