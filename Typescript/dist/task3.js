class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `good mrng! this is ${this.name}`;
    }
}
let s1 = new student("shubham", 22);
console.log(s1.greet());
export {};
