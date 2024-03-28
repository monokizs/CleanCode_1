export class Calculator {

    public Add(a: number, b: number): number {
        return a + b;
    }
    
    public Sub(a: number, b: number): number {
        return a - b;
    }

    public Mul(a: number, b: number): number {
        return a * b;
    }

    public Div(a: number, b: number) {
        if (b==0)
            return "Hiba";
        else
            return a / b;
    }

    public Sqrt(a: number): number {
        return Math.sqrt(a);
    }

    public Pow(a: number, b: number): number {
        return Math.pow(a,b);
    }
}