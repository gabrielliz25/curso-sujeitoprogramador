function createPeople(email: string, age = 0, name?: string): void {
    let people = {
        name,
        email,
        age,
    };

    console.log(people);
}
createPeople("gabe@gmail.com", 19, "Gabriel");
createPeople("anajulia@gmail.com", 25);
createPeople("anajulia@gmail.com");
