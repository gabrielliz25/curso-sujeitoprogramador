"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPeople(email, age = 0, name) {
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
//# sourceMappingURL=ValorDefault.js.map