class Employee {
  constructor(public name: string, public salary: number) {}

  getDetails(): string {
    return `${this.name} earns ₹${this.salary}`;
  }
}

class Manager extends Employee {
  department: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary);
    this.department = department;
  }

  getDepartment(): void {
    console.log(`${this.department}`); }
}
const m1 = new Manager("Rahul", 80000, "IT");

console.log(m1.getDetails());
console.log(m1.getDepartment());