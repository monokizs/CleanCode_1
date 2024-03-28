import { Calculator } from "../src/calculator";

describe("Calculator tests", () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    })

    //** Add **

    test('Given I have 2 integers, When a=5 and b=3, Then the result of add a and b', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 8; 

        // Act
        const result = calculator.Add(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=-5 and b=3, Then the result of add a and b', () => {
        // Arrange
        const a = -5;
        const b = 3;
        const expected = -2; 

        // Act
        const result = calculator.Add(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=0 and b=3, Then the result of add a and b', () => {
        // Arrange
        const a = 0;
        const b = 3;
        const expected = 3; 

        // Act
        const result = calculator.Add(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 floating-point numbers, When a=3.1415 and b=2.7182, Then the result of add a and b', () => {
        // Arrange
        const a = 3.1415;
        const b = 2.7182;
        const expected = 5.8597; // a+b

        // Act
        const result = calculator.Add(a, b);

        // Assert
        expect(result).toBeCloseTo(expected,4);
    })

    test('Given I have 2 integers, When a=5 and b=3, Then the result is the addition commutative', () => {
        // Arrange
        const a = 5;
        const b = 3;

        // Act
        const result1 = calculator.Add(a, b);
        const result2 = calculator.Add(b, a);

        // Assert
        expect(result1).toBe(result2);
    })

    //** Substract **

     test('Given I have 2 integers, When a=5 and b=3, Then the result of minus b out of a', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 2; 

        // Act
        const result = calculator.Substract(a,b);
        

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=3 and b=5, Then the result of minus b out of a', () => {
        // Arrange
        const a = 3;
        const b = 5;
        const expected = -2; 

        // Act
        const result = calculator.Substract(a,b);
        

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=-5 and b=-3, Then the result of minus b out of a', () => {
        // Arrange
        const a = -5;
        const b = -3;
        const expected = -2; 

        // Act
        const result = calculator.Substract(a,b);
        

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=0 and b=-3, Then the result of minus b out of a', () => {
        // Arrange
        const a = 0;
        const b = -3;
        const expected = 3; 

        // Act
        const result = calculator.Substract(a,b);
        

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 floating-point numbers, When a=3.1415 and b=2.718, Then the result of minus b out of a', () => {
        // Arrange
        const a = 3.1415;
        const b = 2.7182;
        const expected = 0.4233; 

        // Act
        const result = calculator.Substract(a,b);

        // Assert
        expect(result).toBeCloseTo(expected,4);
    })

    //** Multiplication **

    test('Given I have 2 integers, When a=5 and b=3, Then the result of product of two numbers', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 15; 

        // Act
        const result = calculator.Multiplication(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=-5 and b=3, Then the result of product of two numbers', () => {
        // Arrange
        const a = -5;
        const b = 3;
        const expected = -15; 

        // Act
        const result = calculator.Multiplication(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=0 and b=3, Then the result of product of two numbers', () => {
        // Arrange
        const a = 0;
        const b = 3;
        const expected = 0; 

        // Act
        const result = calculator.Multiplication(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 floating-point numbers, When a=0 and b=3, Then the result of product of two numbers', () => {
        // Arrange
        const a = 3.1415;
        const b = 2.7182;
        const expected = 8.5392253; // a*b

        // Act
        const result = calculator.Multiplication(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=5 and b=3, Then the result is the multiplication commutative', () => {
        // Arrange
        const a = 5;
        const b = 3;

        // Act
        const result1 = calculator.Multiplication(a, b);
        const result2 = calculator.Multiplication(b, a);

        // Assert
        expect(result1).toBe(result2);
    })

    //** Divide **

    test('Given I have 2 integers, When a=5 and b=3, Then the result of a divided by b', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 1.6667; 

        // Act
        const result = calculator.Divide(a,b);
        
        // Assert
        expect(result).toBeCloseTo(expected,4);
    })

    test('Given I have 2 integers, When a=-5 and b=3, Then the result of a divided by b', () => {
        // Arrange
        const a = -5;
        const b = 3;
        const expected = -1.6667; 

        // Act
        const result = calculator.Divide(a,b);
        
        // Assert
        expect(result).toBeCloseTo(expected,4);
    })

    test('Given I have 2 integers, When a=0 and b=3, Then the result of a divided by b', () => {
        // Arrange
        const a = 0;
        const b = 3;
        const expected = 0;

        // Act
        const result = calculator.Divide(a,b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=5 and b=0, Then the result of a divided by b is an error', () => {
        // Arrange
        const a = 5;
        const b = 0;
        
        // Act
        //const result = calculator.Divide(a,b);
        
        // Assert
        expect(() => calculator.Divide(a,b)).toThrow();
    })

    
    //** SquareRoot **
    
    test('Given I have 1 integer, When a=5, Then the result of the square root of the number', () => {
        // Arrange
        const a = 5;
        const expected = 2.2361; 

        // Act
        const result = calculator.SquareRoot(a);
        
        // Assert
        expect(result).toBeCloseTo(expected,4);
    })

    test('Given I have 1 integer, When a=0, Then the result of the square root of the number', () => {
        // Arrange
        const a = 0;
        const expected = 0; 

        // Act
        const result = calculator.SquareRoot(a);
        
        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 1 integer, When a=-5, Then the result of the square root is an error', () => {
        // Arrange
        const a = -5;
        
        // Act
        //const result=calculator.SquareRoot(a);

        // Assert
        expect(() => calculator.SquareRoot(a)).toThrow();
    })

    //** Power **

    test('Given I have 2 integers, When a=5 and b=3, Then the result of b power of a', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 125; 

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=-5 and b=3, Then the result of b power of a', () => {
        // Arrange
        const a = -5;
        const b = 3;
        const expected = -125; // a^b

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=5 and b=-3, Then the result of b power of a', () => {
        // Arrange
        const a = 5;
        const b = -3;
        const expected = 0.008;

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBeCloseTo(expected,3);
    })

    test('Given I have 2 integers, When a=-5 and b=-3, Then the result of b power of a', () => {
        // Arrange
        const a = -5;
        const b = -3;
        const expected = -0.008; 

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBeCloseTo(expected,3);
    })

    test('Given I have 2 integers, When a=5 and b=0, Then the result of b power of a', () => {
        // Arrange
        const a = 5;
        const b = 0;
        const expected = 1; 

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=0 and b=3, Then the result of b power of a', () => {
        // Arrange
        const a = 0;
        const b = 3;
        const expected = 0; 

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 floating-point numbers, When a=3.1415 and b=2.7182, Then the result of b power of a', () => {
        // Arrange
        const a = 3.1415;
        const b = 2.7182;
        const expected = 22.4553; // a^b

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBeCloseTo(expected,4);
    })

    test('Given I have 2 integers, When a=MAX_VALUE and b=3, Then the result of b power of a', () => {
        // Arrange
        const a = Number.MAX_VALUE;
        const b = 3;
        const expected = Infinity; 

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=5 and b=MAX_VALUE, Then the result of b power of a', () => {
        // Arrange
        const a = 5;
        const b = Number.MAX_VALUE;
        const expected = Infinity; 

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=MIN_VALUE and b=3, Then the result of b power of a', () => {
        // Arrange
        const a = Number.MIN_VALUE;
        const b = 3;
        const expected = 0; 

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 integers, When a=5 and b=MIN_VALUE, Then the result of b power of a', () => {
        // Arrange
        const a = 5;
        const b = Number.MIN_VALUE;
        const expected = 1; 

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBe(expected);
    })


})