// OOP: Lập trình hướng đối tượng (Object Oriented Programming)

// ES6 Classes
// 


// speed, color, brand
// class Car {
//     constructor(speed, color, brand) {  // là một function đặc biệt
//         this.speed = speed;
//         this.color = color;
//         this.brand = brand;
//     }
//     drive() {
//         console.log(`I'am driving at ${this.speed}km/h`);
//     }
//     stop() {
//         // do something
//     }
// }

// const vios = new Car(90, 'red', 'Vios');
// console.log(vios);
// const ford = new Car(100, 'mated black', 'Ford');
// console.log(ford);

// vios.drive();
// ford.drive();

class Mathematic {
    // sum, sub, divide, multi, square, solveEquation
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    sum() {
        console.log(`${this.a} + ${this.b} + ${this.c} = ${this.a + this.b + this.c}`);
    }
    sub() {
        console.log(`${this.a} - ${this.b} - ${this.c} = ${this.a - this.b - this.c}`);
    }
    divide() {
        console.log(`${this.a} / ${this.b} / ${this.c} = ${this.a / this.b / this.c}`);
    }
    multi() {
        console.log(`${this.a} * ${this.b} * ${this.c} = ${this.a * this.b * this.c}`);
    }
    square() {
        console.log(`${this.a}^2 = ${this.a * this.a}`);
        console.log(`${this.b}^2 = ${this.b * this.b}`);
        console.log(`${this.c}^2 = ${this.c * this.c}`);
    }
    solveEquation() {
        console.log(`x = ${((-this.b) + Math.sqrt(this.b * this.b - 4 * this.a * this.c)) / (2 * this.a)}`);
        console.log(`x = ${((-this.b) - Math.sqrt(this.b * this.b - 4 * this.a * this.c)) / (2 * this.a)}`);
    }
}
const tinh = new Mathematic(1, 2, -3);
tinh.solveEquation();

class Studen {
    constructor(name, className) {
        this.name = name;
        this.className = className;
    }
    sayHello() {
        console.log(`I'm ${this.name} from class ${this.className}`);
    }
}
const newS = new Studen('Viet', 'C4E');
newS.sayHello();


class GoodStuden extends Studen {
    static LEVEL = 8; // đồng dạng với const LEVEL = 8; khai báo sẽ dễ hiểu hơn

    constructor(name, className, grade) {
        super(name, className); //  con trỏ trỏ đến lớp cha của class
        this.grade = grade; // this trỏ đến lớp hiện tại của class
    }
    sayHello() {
        console.log(`this is child`);
    }

    sayHelloWithGrade(){
        super.sayHello();
        this.sayHello();
        console.log(`My grade is ${this.grade}`);
    }
}
// const stud = new GoodStuden ('Foo', 'CI46', 9);
// stud.sayHelloWithGrade();
// stud > Studen.LEVEL;
console.log(GoodStuden.LEVEL);

// Mô hình MVC chia tách project ra các phần nhỏ với nhau (Model View Controller)