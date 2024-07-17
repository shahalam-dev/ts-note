{// learning functions

// normal function
function add(a: number, b: number): number {
    return a + b;
}


// arrow function
const sub = (a: number, b: number): number => {
    return a - b;
}

const poorUser = {
    name: 'John',
    balance: 0,
    addBalance(money: number): void {
        this.balance += money;
    }
}
}