// Reference Type --> Object

const user: {
    readonly country: 'USA' | 'UK'; // type literal
    name: string;
    age: number;
    address?: string
} = {
    country: 'USA',
    name: "John",
    age: 30,
};