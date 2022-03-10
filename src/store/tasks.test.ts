import {calculatorReducer, div, mult, sub, sum} from "./tasks";


test("sum", () => {
	// 1. Тестовые данные
	const state = 10;
	const num = 5;
	// 2. Выполняем тестируемый код

	const result = sum(state, num)
	// 3. Проверяем результат

	expect(result).toBe(15);
});

test("sub", () => {
	expect(sub(10, 5)).toBe(5);
})
test("div", () => {
	expect(div(10, 5)).toBe(2);
})
test("mult", () => {
	expect(mult(10, 5)).toBe(50);
})

test('sum of two number CalculatorReducer', () => {
	expect(calculatorReducer(3, {type: "SUM", num: 5})).toBe(8);
})
test('sub of two number CalculatorReducer', () => {
	expect(calculatorReducer(10, {type: "SUB", num: 5})).toBe(5);
})
test('div of two number CalculatorReducer', () => {
	expect(calculatorReducer(10, {type: "DIV", num: 5})).toBe(2);
})
test('mult of two number CalculatorReducer', () => {
	expect(calculatorReducer(10, {type: "MULT", num: 5})).toBe(50);
})