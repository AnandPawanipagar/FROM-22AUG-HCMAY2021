class Animal {
  constructor(legs) {
    console.log(this.legs);
    console.log(legs);
    this.legs = legs;
  }

  walk() {
    console.log("walking on " + this.legs + " legs" + this.hands);
  }
}

class Bird extends Animal {
  fly() {
    console.log("Flying");
  }
}

let animal = new Animal(4);
let animal2 = new Animal(8);
animal.walk();
animal2.walk();
// animal.fly();

let bird = new Bird(2, 3);
let bird2 = new Bird(4, 5);
bird2.fly();
bird2.walk();
bird.fly();
bird.walk();
