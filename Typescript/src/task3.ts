class student{
    name:string;
    age:number;
 constructor(name:string,age:number){
    this.name=name;
    this.age=age;
 }
 greet(){
    return `good mrng! this is ${this.name}`;
 }
}
let s1= new student("shubham",22);
console.log(s1.greet());

