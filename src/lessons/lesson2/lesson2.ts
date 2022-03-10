console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// condition, switch, loops, functions/class, anonimus code, try/catch/finally

// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     c: 500, // undefined -> 500
//     a: 10,
// };
//
// let a = 10;
//
// function f() {
//     let fScope = {
//         outerScope: globalScope,
//     };
//     console.log(a);
// }
//
// var c = 500;
//
// f();



// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     c: 500, // undefined -> 500
//     a: 510, // 10 -> 510
// };
//
// let a = 10;
//
// function f() {
//     let fScope = {
//         outerScope: globalScope,
//         g: 50, //  undefined -> 50
//     };
//     a = a + c;
//     console.log(a);
//     var g = 50;
//     return g * a;
// }
//
// var c = 500;
// console.log(f());


// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     c: 500, // undefined -> 500
//     a: 1260, // 10 -> 60 -> 660 -> 1260
//     func: 'Function',
// };
//
// let a = 10;
//
// function f(arg: number) {
//     let fScope = {
//         outerScope: globalScope,
//         arg: 100, // undefined -> 100
//         inner: 'Function',
//         g: 50, //undefined->50
//     };
//     function inner() {
//         let innerScope = {
//             outerScope: fScope,
//         }
//         a = a + c + arg;
//     }
//     console.log(a);
//     var g = 50;
//     a += g
//     return inner;
// }
//
// var c = 500;
// let func = f(100);
// console.log(func());
// console.log(a);
// console.log(func());
// console.log(a);


// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     a: 10,
//     func: 'Function',
// };
//
// let a = 10;
//
// function f(arg: number) {
//     let fScope = {
//         outerScope: globalScope,
//         arg: 50, // undefined -> 50
//         inner: 'Function',
//         a: 150, // 0 -> 50 -> 100
//     };
//     let fScope2 = {
//         outerScope: globalScope,
//         arg: 100, // undefined -> 50
//         inner: 'Function',
//         a: 200, //
//     };
//     let a = 0;
//     function inner() {
//         let innerScope = {
//             outerScope: fScope,
//         }
//         let innerScope2 = {
//             outerScope: fScope2,
//         }
//         a = a + arg;
//         return a;
//     }
//     console.log(a);
//     return inner;
// }
//
// let func = f(50);
// console.log(func());
// console.log(a);
// console.log(func());
// console.log(a);
// let func2 = f(100);
// console.log(func2());
// console.log(func2());
// console.log(func());



// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// let globalScope = {
//     outerScope: null,
//     sum: 'Function',
// };
//
// function sum(arg: number) {
//     let sumScope = {
//         outerScope: globalScope,
//         arg: 3,
//     }
//     return function (arg2: number) {
//         let anonimScope = {
//             outerScope: sumScope,
//             arg2: 6,
//         }
//         return arg + arg2;
//     }
// }
//
// console.log(sum(3)(6));

// Recursion

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function sumTo(num: number) {
//     let sum = 0;
//     for (let i = num; i > 0; i--) {
//         sum += i;
//     }
//     return sum;
// }

// function sumTo(num: number): number {
//     if (num === 1) return num;
//     return num + sumTo(num - 1);
// }

// function sumTo(num: number, acc: number): number {
//     if (num === 1) return acc + num;
//     return sumTo(num - 1, acc + num);
// }
//
// console.log(sumTo(3, 0));


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter() {
//     let makeCounterScope = {
//         outerScope: 'globalScope',
//         count: 4,
//     };
//     let makeCounterScope2 = {
//         outerScope: 'globalScope',
//         count: 2,
//     };
//     let count = 1;
//     return function () {
//         let anonimScope = {
//             outerScope: 'makeCounterScope'
//         }
//         let anonimScope2 = {
//             outerScope: 'makeCounterScope2'
//         }
//         return count++;
//     }
// }
//
// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// const counter2 = makeCounter();
// console.log(counter2()); // 1
// console.log(counter()); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore


function superSum(num: number): Function {
    if (num <= 0) return () => 0;
    if (num === 1) return (n: number) => n;

    let _args: number[] = [];

    function helper(...args: number[]) {
        _args = [..._args, ...args];
        if ( _args.length  >= num ) {
            _args.length = num;
            return _args.reduce( (acc, number) => acc + number);
        } else {
            return helper;
        }
    }

    return helper;
}

console.log(superSum(3)(2)(5)(3)) //10
console.log(superSum(3)(2)(5,3)) //10
console.log(superSum(3)(2,5,3)) //10
console.log(superSum(3)(2,5)(3) )//10
console.log(superSum(3)(2,5)(3,9)) //10



// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {};