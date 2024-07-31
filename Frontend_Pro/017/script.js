const Animal = {

    constructor: function (name) {
        this.name = name;
        return this;
    },
    sound(sound) {
        return sound;
    },
};

const Dog = Object.create(Animal).constructor("Albert");
Dog.sound = "Wof";

console.log(Dog);

const Cat = Object.create(Animal).constructor("Garfild");
Cat.sound = "May";

console.log(Cat);