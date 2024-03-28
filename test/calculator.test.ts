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
        //const result = Number((Math.round(calculator.Sub(a,b)*10000)/10000).toFixed(4));
        const result = Number(calculator.Sub(a,b).toFixed(4));

        // Assert
        expect(result).toBe(expected);
    })

    /*************************
     ********** Mul **********
     *************************/
     test('Be: két egész szám, Előállítja a szorzatot, Ki: két szám szorzata', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 15; // a*b

        // Act
        const result = calculator.Mul(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két egész szám - egyik negatív, Előállítja az szorzatot, Ki: két szám szorzata', () => {
        // Arrange
        const a = -5;
        const b = 3;
        const expected = -15; // a*b

        // Act
        const result = calculator.Mul(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy egész szám, Előállítja a 0*szám szorzatot, Ki: 0 és a szám szorzata', () => {
        // Arrange
        const a = 0;
        const b = 3;
        const expected = 0; // a*b

        // Act
        const result = calculator.Mul(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két lebegőpontos szám, Előállítja a két szám szorzatát, Ki: a két szám szorzata', () => {
        // Arrange
        const a = 3.1415;
        const b = 2.7182;
        const expected = 8.5392253; // a*b

        // Act
        const result = calculator.Mul(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két egész szám, Előállítja a két szám szorzatát, Ki: a*b ?= b*a', () => {
        // Arrange
        const a = 5;
        const b = 3;

        // Act
        const result1 = calculator.Mul(a, b);
        const result2 = calculator.Mul(b, a);

        // Assert
        expect(result1).toBe(result2);
    })


    /*************************
     ********** Div **********
     *************************/
     test('Be: két egész szám, Előállítja az osztás eredményét, Ki: két szám osztásának eredménye', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 1.6667; // a/b

        // Act
        let result = calculator.Div(a,b);
        if (typeof(result)!="string")
            result = Number(Number(result).toFixed(4));
        
        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két egész szám - egyik negatív, Előállítja az osztás eredményét, Ki: két szám osztásának eredménye', () => {
        // Arrange
        const a = -5;
        const b = 3;
        const expected = -1.6667; // a/b

        // Act
        let result = calculator.Div(a,b);
        if (typeof(result)!="string")
            result = Number(Number(result).toFixed(4));

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy egész szám, Előállítja a 0/szám eredményét, Ki: 0/szám eredménye', () => {
        // Arrange
        const a = 0;
        const b = 3;
        const expected = 0; // a/b

        // Act
        let result = calculator.Div(a,b);
        if (typeof(result)!="string")
            result = Number(Number(result).toFixed());

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy egész szám, Előállítja a szám/0 eredményét, Ki: szám/0 eredménye', () => {
        // Arrange
        const a = 5;
        const b = 0;
        const expected = "Hiba"; // a/b

        // Act
        let result = calculator.Div(a,b);
        if (typeof(result)!="string")
            result = Number(Number(result).toFixed(4));

        // Assert
        expect(result).toBe(expected);
    })

    

    
    /*************************
     ********* Sqrt **********
     *************************/
     test('Be: egy egész szám, Előállítja a négyzetgyök(szám) értékét, Ki: négyzegyök(szám) eredménye', () => {
        // Arrange
        const a = 5;
        const expected = 2.2361; // sqrt(a)

        // Act
        let result = calculator.Sqrt(a);
        if (typeof(result)!="string")
            result = Number(Number(result).toFixed(4));

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy egész szám (a=0), Előállítja a négyzetgyök(szám) értékét, Ki: négyzegyök(szám) eredménye', () => {
        // Arrange
        const a = 0;
        const expected = 0; // sqrt(a)

        // Act
        let result = calculator.Sqrt(a);
        if (typeof(result)!="string")
            result = Number(Number(result).toFixed(4));

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy egész szám (a<0), Előállítja a négyzetgyök(szám) értékét, Ki: négyzegyök(szám) eredménye - Hiba', () => {
        // Arrange
        const a = -5;
        const expected = "Hiba"; // sqrt(a)

        // Act
        let result = calculator.Sqrt(a);
        if (typeof(result)!="string")
            result = Number(Number(result).toFixed(4));

        // Assert
        expect(result).toBe(expected);
    })


    /*************************
     ********* Pow ***********
     *************************/
     test('Be: két egész szám, Előállítja az a^b hatványt, Ki: a^b', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 125; // a^b

        // Act
        const result = calculator.Pow(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két egész szám (a<0), Előállítja az a^b hatványt, Ki: a^b', () => {
        // Arrange
        const a = -5;
        const b = 3;
        const expected = -125; // a^b

        // Act
        const result = calculator.Pow(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két egész szám (b<0), Előállítja az a^b hatványt, Ki: a^b', () => {
        // Arrange
        const a = 5;
        const b = -3;
        const expected = 0.008; // a^b

        // Act
        const result = Number(calculator.Pow(a, b).toFixed(3));

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két egész szám (a<0 és b<0), Előállítja az a^b hatványt, Ki: a^b', () => {
        // Arrange
        const a = -5;
        const b = -3;
        const expected = -0.008; // a^b

        // Act
        const result = Number(calculator.Pow(a, b).toFixed(3));

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy egész szám (a>0 és b=0), Előállítja az a^0 hatványt, Ki: a^0', () => {
        // Arrange
        const a = 5;
        const b = 0;
        const expected = 1; // a^b

        // Act
        const result = calculator.Pow(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy egész szám (a=0 és b>0), Előállítja az 0^b hatványt, Ki: 0^b', () => {
        // Arrange
        const a = 0;
        const b = 3;
        const expected = 0; // a^b

        // Act
        const result = calculator.Pow(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: két lebegőpontos szám, Előállítja az a^b hatványt, Ki: a^b', () => {
        // Arrange
        const a = 3.1415;
        const b = 2.7182;
        const expected = 22.4553; // a^b

        // Act
        const result = Number(calculator.Pow(a, b).toFixed(4));

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy egész szám (b>0), Előállítja az MAX_VALUE^b hatványt, Ki: MAX_VALUE^b', () => {
        // Arrange
        const a = Number.MAX_VALUE;
        const b = 2;
        const expected = Infinity; // a^b

        // Act
        const result = calculator.Pow(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy egész szám (a>0), Előállítja az a^MAX_VALUE hatványt, Ki: a^MAX_VALUE', () => {
        // Arrange
        const a = 5;
        const b = Number.MAX_VALUE;
        const expected = Infinity; // a^b

        // Act
        const result = calculator.Pow(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy egész szám (b>0), Előállítja az MIN_VALUE^b hatványt, Ki: MIN_VALUE^b', () => {
        // Arrange
        const a = Number.MIN_VALUE;
        const b = 2;
        const expected = 0; // a^b

        // Act
        const result = calculator.Pow(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Be: egy egész szám (a>0), Előállítja az a^MIN_VALUE hatványt, Ki: a^MIN_VALUE', () => {
        // Arrange
        const a = 5;
        const b = Number.MIN_VALUE;
        const expected = 1; // a^b

        // Act
        const result = calculator.Pow(a, b);

        // Assert
        expect(result).toBe(expected);
    })


})