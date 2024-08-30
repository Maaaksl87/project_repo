function Animal(name) {
    this.name = name;
}

Animal.prototype.sound = function () {
    return 'Звук тваринки';
};

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.sound
    = function () {
        return 'Гав';
    };

function Cat(name) {
    Animal.call(this, name);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.sound
    = function () {
        return 'Мяв!';
    };

const myDog = new Dog('Patron');
console.log(myDog.sound());

const myCat = new Cat('Garfild');
console.log(myCat.sound());

console.log('///////////////////////////////////////////');


class PizzaOrder {
    constructor(orderId, customerEmail, products, status) {
        this.orderId = orderId;
        this.customerEmail = customerEmail;
        this.products = products;
        this.status = status;
    }

    get total() {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }

    checkStatusOfDelivery() {
        console.log(`Checking status of delivery...`);
        console.log(`Current status is ${this.status}`);
    }
}

const pizzaOrder1 = new PizzaOrder(1, "andry.itsdorosh@yahoo.com", [{ productId: 1, name: 'Pepperoni', price: 200, options: '+cheese' }], "Beginning to prep your order");
console.log(pizzaOrder1);
console.log(pizzaOrder1.total);
pizzaOrder1.checkStatusOfDelivery();

console.log("/////////////////////");

const pizzaOrder2 = new PizzaOrder(2, "qqqq@on.com", [{ productId: 2, name: 'Chesse', price: 200, options: 'meat' }], "in proces");
console.log(pizzaOrder2);
console.log(pizzaOrder2.total);
pizzaOrder2.checkStatusOfDelivery();
