// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {

    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }

    return result;

    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

// export function getTriangleType(a: number,b: number,c: number): string {
//
//     if (a === b && a === c) {
//         return '10'
//     }
//     if (a > b + c) {
//         return '00'
//     }
//     if (a === b || b === c) {
//         return '01'
//     }
//
//     return '11'
//     //...здесь пишем код.
//     // В return стоит "заглушка", чтоб typescript не ругался
//
// }
export function getTriangleType(a: number, b: number, c: number): string {
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            return "10"
        } else if (a === c || a === b || c === b) {
            return "01"
        } else {
            return "11"
        }
    } else {
        return "00"
    }
    // В return стоит "заглушка", чтоб typescript не ругался

}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    let str = number.toString();
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result = result + +str[i];
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return result
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let x = 0;

    for (let i = 0; i < arr.length; i ++) {
        if( i % 2 === 0){
            x += arr[i];
        } else {
            x -= arr[i];
        }

    }
    return x > 0

    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let s = array.filter(el => el > 0 && el % 2 === 0)
    return s.map(num => num**2)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    let result = 0;

    for (let i = 0; i <= N; i++) {
        result += i;
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return result
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1]
}