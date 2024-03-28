import { Calculator } from "../src/calculator";

describe("Calculator tests", () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    })

    /***********************
     ********* Add *********
     ***********************/

    test('Be: két egész szám, Előállítja az összeget, Ki: két szám összege', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 8; // a+b

        // Act
        const result = calculator.Add(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két egész szám - egyik negatív, Előállítja az összeget, Ki: két szám összege', () => {
        // Arrange
        const a = -5;
        const b = 3;
        const expected = -2; // a+b

        // Act
        const result = calculator.Add(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy egész szám, Előállítja a 0+szám összeget, Ki: 0 és a szám összege', () => {
        // Arrange
        const a = 0;
        const b = 3;
        const expected = 3; // a+b

        // Act
        const result = calculator.Add(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két lebegőpontos szám, Előállítja a két szám összeget, Ki: a két szám összege', () => {
        // Arrange
        const a = 3.1415;
        const b = 2.7182;
        const expected = 5.8597; // a+b

        // Act
        const result = calculator.Add(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két egész szám, Előállítja a két szám összeget, Ki: a+b ?= b+a', () => {
        // Arrange
        const a = 5;
        const b = 3;

        // Act
        const result1 = calculator.Add(a, b);
        const result2 = calculator.Add(b, a);

        // Assert
        expect(result1).toBe(result2);
    })

    /*************************
     ********** Sub **********
     *************************/

     test('Be: két pozitív egész szám (a>b), Előállítja a két szám különbségét, Ki: a-b', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 2; // a-b

        // Act
        const result = calculator.Sub(a,b);
        

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két pozitív egész szám (b>a), Előállítja a két szám különbségét, Ki: a-b', () => {
        // Arrange
        const a = 3;
        const b = 5;
        const expected = -2; // a-b

        // Act
        const result = calculator.Sub(a,b);
        

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két negatív egész szám, Előállítja a két szám különbségét, Ki: a-b', () => {
        // Arrange
        const a = -5;
        const b = -3;
        const expected = -2; // a-b

        // Act
        const result = calculator.Sub(a,b);
        

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy negatív egész szám, Előállítja a 0 és a szám különbségét, Ki: 0-a', () => {
        // Arrange
        const a = -5;
        const expected = 5; // 0-b

        // Act
        const result = calculator.Sub(0,a);
        

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két lebegőpontos szám, Előállítja a két szám különbségét, Ki: a-b', () => {
        // Arrange
        const a = 3.1415;
        const b = 2.7182;
        const expected = 0.4233; // a-b

        // Act
        const result = Number((Math.round(calculator.Sub(a,b)*10000)/10000).toFixed(4));
        

        // Assert
        expect(result).toBe(expected);
    })

    /*************************
     ********** Mul **********
     *************************/
    
    /*************************
     ********** Div **********
     *************************/

    /*************************
     ********* Sqrt **********
     *************************/

    /*************************
     ********* Pow ***********
     *************************/


})