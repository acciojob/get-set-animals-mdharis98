// //complete this code
// class Animal {}

// class Dog extends Animal {}

// class Cat extends Animal {}

// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;



// Define the Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
  // Method to purr
  purr() {
    console.log("purr");
  }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
  // Method to bark
  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

// Example Usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();      // Output: woof
