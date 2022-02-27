import './script';

describe('Calculator', () => {
    const prev = { innerText: 0 };
    const curr = { value: 0 };
    const calculator = new Calculator(prev, curr);

    test('testing the class', () => {
        expect(typeof calculator.convertNegativePositive).toBe("function");
        expect(typeof calculator.updateScreen).toBe("function");
        expect(typeof calculator.appendNum).toBe("function");
        expect(typeof calculator.clear).toBe("function");
        expect(typeof calculator.curr).toBe("0");
        expect(typeof calculator.prev).toBe(undefined);
    });

    // add tests for calculations
});