// function Test(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Test.prototype.getName = function () {};
//
// function SuperTest(name, age, city) {
//     Test.call(this, name, age)
//     // this.name = name;
//     // this.age = age;
//     this.city = city;
// }
//
// SuperTest.prototype = Object.create(Test.prototype, {
//     constructor: {
//         value: SuperTest,
//     },
//     getName: {
//         value: function () {}
//     }
// })

// let obj = new Test('jsdfksjdgbnk', 230, 'sjmghdskjfgbdkfhg');
// console.log(obj);
// let obj2 = new obj.constructor('Yo', 30, 'Minsk');
// console.log(obj2);
// console.log(obj.constructor.name);
// console.log( obj2 instanceof SuperTest );
// console.log( obj2 instanceof Test );

// let obj = new Test('jsdfksjdgbnk', 230);
// let obj2 = new SuperTest('Yo', 30, 'Minsk');
// console.log(obj2);
// console.log(obj.constructor.name);
// console.log( obj instanceof SuperTest );
// console.log( obj instanceof Test );


////////////////////////////////////////////////////////////////
// let obj = { a: 1}
// if ( obj.a === 1 && obj.a === 2 && obj.a === 3) {
//     console.log('Bingo');
// }

// Task 05
// Используя метод Apply реализовать свой собственный метод bind

// Function.prototype.customBind = function (ctx, ...args) {
//     const _self = this;
//     return function (...arg2) {
//         return _self.call(ctx, ...args, ...arg2);
//     }
// }

// Function.prototype._bind = function (ctx, ...args) {
//     ctx.___klxshgnsgnfg___ = this;
//     return function (...arg2) {
//         return ctx.___klxshgnsgnfg___(...args, ...arg2);
//     }
// }
//
// let obj = { name: 'Hanna'};
// let obj2 = {name: 'Yo', sayName: function () { console.log(this.name, ...arguments) } };
// let obj3 = { name: 'Bla'};
//
// //obj2.sayName.customBind(obj)();
// // obj2.sayName._bind(obj)();
//
// obj2.sayName._bind(obj3, 50)._bind(obj, 100)();




const qq = () => {
   const a = {
       a: 5
    };

    // a.valueOf = function () {
    //     return this.a++;
    // }

    a.toString = function () {
        return this.a++;
    }

    if (a == 5 && a == 6 && a == 7) {
        console.log('It works')
    }
}

console.log(qq())
