export class Calculator {

    public Add(a: number, b: number): number {
        return a + b;
    }
    
    public Substract(a: number, b: number): number {
        return a - b;
    }

    public Multiplication(a: number, b: number): number {
        return a * b;
    }

    public Divide(a: number, b: number): number {
        if (b==0) throw new Error('Cannot divide by zero.');
        return a / b;
    }

    public SquareRoot(a: number): number {
        if (a<0) throw new Error('Cannot calculate square root of a negative number.');
        return Math.sqrt(a);
    }

    public Power(a: number, b: number): number {
        return Math.pow(a,b);
    }
}