console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// function test(name, age) {
//     return {
//         name, age,
//         someFunc(){},
//     };
// }
//
// let obj = test('Yo', 20);
// let obj2 = test('Bla', 30);
//
// console.log(obj);
// console.log(obj2);


// function Test(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// let obj = Test('Yo', 20);
// //let obj2 = test('Bla', 30);
//
// console.log(obj);
// //console.log(obj2);


// function Test(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// let obj = new Test('Yo', 20);
// //let obj2 = test('Bla', 30);
//
// console.log(obj);
// //console.log(obj2);

// function Test(name, age) {
//     this.name = name;
//     this.age = age;
//     //return 10;
//     return [10];
// }
//
// let obj = new Test('Yo', 20);
// //let obj2 = test('Bla', 30);
//
// console.log(obj);
// //console.log(obj2);

//
// function Test(name, age) {
//     this.name = name;
//     this.age = age;
//     this.someFunc = function () {
//
//     }
// }
//
// let obj = new Test('Yo', 20);
// let obj2 = new Test('Bla', 30);
//
// console.log(obj);
// console.log(obj2);


// function Test(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Test.prototype.someFunction = function() {};
//
// let obj = new Test('Yo', 20);
// let obj2 = new Test('Bla', 30);
//
// console.log(obj);
// console.log(obj2);

// type TestType = {
//     name: string,
//     age: number,
// }
//
// function Test(this: TestType, name: string, age: number) {
//     this.name = name;
//     this.age = age;
// }
// Test.prototype.someFunction = function() {};
//
// //let obj = new Test('Yo', 20);
// let obj = new (Test as any)('Yo', 20);
//
// console.log(obj);


// class Test {
//
// }
//
// let obj = new Test();
// console.log(obj);


// class Test {
//     name?: string;
//     age?: number;
//     //sayYo: Function;
//     //bindedFunc: Function;
//
//     constructor(name?: string, age?: number) {
//         this.name = name;
//         this.age = age;
//         //this.sayYo = function () {};
//         //this.bindedFunc = this.someFunc.bind(this);
//     }
//
//     someFunc(){};
//
//     arrow = () => {
//     }
// }
//
// // let obj = new Test('Yo', 20);
// // console.log(obj);
// //
// // class Test2 extends Test {
// //     city: string;
// //
// //     constructor(name: string, age: number, city: string) {
// //         super(name, age);
// //         this.city = city;
// //     }
// // }
// //
// // let obj2 = new Test2('Bla', 30, 'Minsk');
// // console.log(obj2);
//
// let obj = new Test('Yo', 20);
// console.log(obj);
//
// class Test2 extends Test {
//     city: string;
//
//     // constructor(name: string ='Monkey', age: number = 50, city: string = 'Minsk') {
//     //     super(name, age);
//     //     this.city = city;
//     // }
//     // constructor() {
//     //     super('Yo', 80);
//     //     this.city = 'sjmfgbhdsfj,mgb';
//     // }
// }
//
// let obj2 = new Test2();
// console.log(obj2);


// class Helper {
//     help1(){}
//     help2(){}
// }
//
// class SuperHelp extends Helper {
//     help3(){}
// }
//
// let helpObj = new SuperHelp();
// console.log(helpObj)
//
// class Test extends SuperHelp {
//     name: string;
//     age: number;
//
//     constructor(name: string, age: number) {
//         super();
//         this.name = name;
//         this.age = age;
//     }
//
//     someFunc(){};
//     arrow = () => {
//     }
// }
//
// let objj = new Test('Name', 20);
// console.log(objj)
//
// objj.help1()


// class Test {
//     constructor( public readonly name: string, public age: number ) {
//     }
// }
//
// let obj = new Test('Name', 20);
// console.log(obj)
// obj.name = 'jdfbjsdfjsdf';


// class Test {
//     private count: number = 0;
//
//     constructor( ) {}
//
//     getCurrentCount() {
//         return this.count;
//     }
//
//     incrementCount() {
//         this.count = this.count + 1;
//     }
// }
//
// let obj = new Test();
// let obj2 = new Test();
//
// obj.incrementCount();
// obj.incrementCount();
// obj.incrementCount();
// obj2.incrementCount();
// console.log(obj.getCurrentCount())
// console.log(obj2.getCurrentCount())
// // @ts-ignore
// console.log(obj2.count)

// нативная реализация
// class Test {
//     #count = 0;
//
//     constructor( ) {}
//
//     getCurrentCount() {
//         return this.#count;
//     }
//
//     incrementCount() {
//         this.#count = this.#count + 1;
//     }
// }
//
// let obj = new Test();
//
// obj.incrementCount();
// obj.incrementCount();
// obj.incrementCount();
// console.log(obj.#count)


// class Test {
//     private count: number = 0;
//
//     getCurrentCount() {
//         return this.count;
//     }
//
//     incrementCount() {
//         this.count = this.count + 1;
//     }
// }
//
// class Test2 extends Test {
//     getCount() {
//         console.log(this.count);
//     }
// }
//
// let obj = new Test();


// class Test {
//     protected count: number = 0;
//
//     getCurrentCount() {
//         return this.count;
//     }
//
//     incrementCount() {
//         this.count = this.count + 1;
//     }
// }
// let obj = new Test();
// obj.incrementCount();
// obj.incrementCount();
// obj.incrementCount();
// //console.log(obj.getCurrentCount())
// //console.log(obj.count)
//
// class Test2 extends Test {
//     getCount() {
//         console.log(this.count * 5);
//     }
// }
//
// let obj2 = new Test2();
// obj2.incrementCount();
// obj2.getCount()
// obj2.incrementCount();
// obj2.getCount()
// obj2.incrementCount();
// console.log(obj2.getCurrentCount())
// obj2.getCount()



// class Test {
//     name: string;
//     age: number;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//
//     someFunc(){
//         console.log('Hi from Test')
//     };
//
//     arrow = () => {
//     }
//
//     superFunc() {
//         console.log('111111');
//     }
// }
//
// class Test2 extends Test {
//     constructor(name: string, age: number) {
//         super(name, age);
//     }
//
//     someFunc(){
//         console.log('Test2 is greeting You!!!!')
//         super.someFunc();
//     };
//
//     superFunc() {
//         console.log('0000');
//     }
//
//     // parentSuperFunc() {
//     //     super.superFunc()
//     // }
// }
//
// class Test3 extends Test2 {
//     constructor(name: string, age: number, public city: string) {
//         super(name, age);
//     }
//
//     superFunc() {
//         console.log('22222');
//         super.superFunc();
//     }
// }
//
// let obj = new Test3('Yo', 525, 'dsfd');
// console.log(obj);
// obj.superFunc()


interface IPerson {
    name: string;
    age: number;
    city: string;
    sayYo: Function;
}

interface IPerson2 {
    name: string;
    yyy: Function;
}

interface IPerson3 extends IPerson2 {
    jjj: number;
}

class Test implements IPerson, IPerson3 {

    public jjj = 50
    constructor(public name: string, public age: number, public city: string) {
    }
    someFunc() {}
    sayYo() {}
    yyy(){}
}

let obj = new Test('Name', 10, 'Minsk');


// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};