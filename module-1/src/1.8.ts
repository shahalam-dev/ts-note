// destructuring
{

    const user = {
        name: 'John',
        parents: {
            mother: 'Jane',
            father: 'Mark'
        },
        age: 30
    };
    
    const { name, parents: { mother, father}, age } = user;

    console.log(name, mother, father, age);


    // array destructuring
    const numbers = [1, 2, 3, 4, 5];
    const [, , numThree] = numbers;
    console.log(numThree);
}