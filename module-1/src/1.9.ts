{
    // type alias
    type Person = {
        name: string;
        age: number;
    }
    const user: Person = {
        name: 'John',
        age: 30
    }

    console.log(user);


    type Add = (a: number, b: number) => number;
    const add: Add = (a, b) => a + b;

    console.log(add(1, 2));
}