class Product {
    malik = "saiful islam"

    constructor(name, brand, price, owner) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.owner = owner;
    }

    details() {
        console.log("inside from details")
    }
}

const iphone = new Product('iphone-16', 'apple', 1200, 'janina');

// console.log(iphone)
// console.log(typeof iphone)
// console.log(typeof Product)

// iphone.details()
// console.log(typeof iphone.details())

class Vehicle {
    // #serialNumber //make it private 
    constructor(name, price, brand, wheel) {
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.wheel = wheel;
        // this.#serialNumber = serialNumber;
    }

    move() {
        console.log("Vehicle is moving")
    }
}

const motoBike = new Vehicle("BMW", "6lac", "bmw", 2,50)

// console.log(motoBike.name)

// Vehicle.move()

class Bus extends Vehicle {
    constructor(name, price, brand, wheel, seat){
        super(name, price, brand, wheel);
        this.seat = seat;
    }
    route (){
        console.log('dhaka to chittagong')
    }
}

const greenLine = new Bus('Green Line', "12 lac", "Marcedes", 10,40)

// console.log(greenLine)
// // console.log(Bus.price)
// greenLine.route()
// greenLine.move()

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(x,y,z)

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));