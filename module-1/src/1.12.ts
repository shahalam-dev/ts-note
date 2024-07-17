// nullable type |  unknown type
{
    function add(a: number, b: number): number | null {
        return a + b;
    }

    // unknown type
    function printBalance(x: unknown): void {
        if (typeof x === 'number') {
            console.log('Balance is', x);
        } else if (typeof x === 'string') {
            console.log('Error:', x);
        }
    }

    // never type
    function throwError(message: string): never {
        throw new Error(message);
    }


}