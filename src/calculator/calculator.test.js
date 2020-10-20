import {sum, substract, multiply, divide} from './calculator';

it('Sum two numbers', () => {
    expect(sum(1,3)).toEqual(4);
    expect(sum(0.1,0.2)).toBeCloseTo(0.3);
})

it('Substract two numbers', () => {
    expect(substract(4,2)).toEqual(2);
    expect(substract(0.2,0.1)).toBeCloseTo(0.1);
})

it('Multiply two numbers', () => {
    expect(multiply(2,5)).toEqual(10);
    expect(multiply(0.2,0.5)).toBeCloseTo(0.1);
})

it('Divide two numbers', () => {
    expect(divide(10,5)).toEqual(2);
    expect(divide(0.5,0.5)).toBeCloseTo(1);
})