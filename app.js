function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

let favoriteNumber = 42;
let instructor = {
    [favoriteNumber]: "That is my favorite!"
}

let ObjMethod = {
    firstName: "luis",
    sayhi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " Says bye!";
    }
}


function createAnimals(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        },
    }
}

