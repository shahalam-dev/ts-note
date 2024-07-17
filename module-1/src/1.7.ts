{

    // spread operator
    const bros1: string[] = ['John', 'Jane'];

    const bros2: string[] = ['Mark', 'Mary'];

    bros1.push(...bros2);


    const greetFriends = (...names: string[]): void => {
        names.forEach((name) => {
            console.log(`Hi ${name}!`);
        })
    }

    greetFriends('John', 'Jane', 'Mark', 'Mary');
}