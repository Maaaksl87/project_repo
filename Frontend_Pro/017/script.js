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
