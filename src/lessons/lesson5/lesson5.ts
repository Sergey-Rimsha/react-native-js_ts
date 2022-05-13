console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290

// function/class, block code (anonymous block), conditional, loops, switch, try/catch/finally

//console.log('this ', this);

// function f() {
//     console.log('this in function f ', this);
// }
//
// f();


// let obj = { name: 'Yo' };
//
// function f() {
//     console.log('this in function f ', this);
// }
//
// f();
//
// obj.f = f;
// obj.f();


// let obj = {
//     name: 'Yo',
//     f() {
//         console.log('this in function f ', this);
//     }
// };
//
//
// let globalVariable = obj.f;
// globalVariable();

// let obj = {
//     name: 'Yo',
//     f() {
//         console.log('this in function f ', this);
//     }
// };
//
// let obj2 = { name: 'Hanna'};
//
// obj2.innerObj = { name: 'InnerName'};
// obj2.innerObj.f = obj.f;
// obj2.innerObj.f();


// let obj = {
//     name: 'Yo',
//     f() {
//         console.log('this in function f ', this);
//         function innerF() {
//             console.log('this in function innerF ', this);
//         }
//         innerF();
//     }
// };
//
// let obj2 = { name: 'Hanna'};
//
// obj2.innerObj = { name: 'InnerName'};
// obj2.innerObj.f = obj.f;
// obj2.innerObj.f();


// let obj = {
//     name: 'Yo',
//     f() {
//         console.log('this in function f ', this);
//         function innerF() {
//             console.log('this in function innerF ', this);
//         }
//         return innerF;
//     }
// };
//
// let obj2 = { name: 'Hanna'};
// obj2.f = obj.f;
// obj2.f()();

// let obj = {
//     name: 'Yo',
//     arrow: () => {
//         console.log('this in arrow ', this);
//         return function() {
//             console.log('this in function F ', this);
//         }
//     }
// };
//
// let obj2 = { name: 'Hanna' };
//
// obj2.f = obj.arrow();
// obj2.f();


// let obj = {
//     name: 'Yo',
//     arrow: () => {
//         console.log('this in arrow ', this);
//         return function() {
//             console.log('this in function F ', this);
//         }
//     }
// };
//
// let obj2 = { name: 'Hanna' };
//
// obj2.f = obj.arrow;
// obj2.f()();

// let obj = {
//     name: 'Yo',
//     f() {
//         console.log('this in function F ', this);
//         return () => {
//             console.log('this in arrow ', this);
//         };
//     }
// };
//
// let obj2 = { name: 'Hanna' };
//
// obj2.a = obj.f();
// obj2.a();
// const outerFunc = obj2.a;
// outerFunc();

// let obj = {
//     name: 'Yo',
//     f() {
//         setTimeout(function() {
//             console.log('f', this);
//         }, 500);
//         setTimeout(() => {
//             console.log('a', this);
//         }, 500);
//     }
// };
//
// obj.f();


// function setTimeout(callback, delay, ...args) {
//     if (delay) {
//         callback(...args);
//     }
// }




// const arrow = () => {
//     console.log('this in arrow ', this);
// }
//
// arrow();


// let obj = {
//     name: 'Yo',
// };
//
// const arrow = () => {
//     console.log('this in arrow ', this);
// }
//
// arrow();
//
// obj.a = arrow;
// obj.a();

// let obj = {
//     name: 'Yo',
//     arrow: () => {
//         console.log('this in arrow ', this);
//     }
// };
//
// obj.arrow();


// Bind
// let obj = { name: 'Hanna' };
// function f() {
//     // @ts-ignore
//     console.log(this.name);
// }

 //obj.name = 'Ivan';
// obj = { name: 'Ivan' };

// // @ts-ignore
// obj.f = f;
// // @ts-ignore
// obj.f()

// const bindedFunc = f.bind(obj);
// bindedFunc();
// console.log(obj)

//f.bind({...obj})()

// obj.name = 'Ivan';
// obj = { name: 'Ivan' };




// let obj = { name: 'Hanna' };
// let obj2 = { name: 'Yo' };
// let obj3 = { name: 'Bla' };
// function f(a1: number, a2: number, a3: number) {
//     // @ts-ignore
//     console.log(this.name, a1, a2, a3);
// }
//
// // @ts-ignore
// //f.bind(obj, 50, 111, 100)(1000)
//
// // function multiply( callback: Function, num: number) {
// //     return callback.bind(null, num);
// // }
// //
// // function gf(num: number, num2: number) {
// //     return num * num2;
// // }
// //
// // const multiply50 = multiply(gf, 50);
// //
// // console.log(multiply50(0))
// // console.log(multiply50(1))
// // console.log(multiply50(2))
// // console.log(multiply50(3))
// // console.log(multiply50(4))
//
// //f.bind(obj, 100).bind(obj2, 200).bind(obj3, 500)()
//
// // Call
// f.call(obj3, 50, 30);
// // Apply
// f.apply(obj2, [30, 40, 70]);

function f() {
    // console.log(arguments);
    // @ts-ignore
    //console.log([...arguments].filter(el => el > 60));
    //console.log([].filter.call(arguments, el => el > 80));
    console.log([].filter.apply(arguments, [(el) => el > 80]));
}
// @ts-ignore
f(90, 10,80, 50, 80)



// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
}

let someObj:someObjType = {
    name: 'Eugene',
    age: 32
}

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
let Two = {name: 'Two', sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a:number,b:number):number {return a + b};

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call



// just a plug
export default () => {};