class Animal {
  constructor(name, diet, noise, location) {
    this.name = name;
    this.diet = diet;
    this.noise = noise;
    this.location = location;
  }
  speciesIntro() {
    return `${this.name} makes the sound ${this.noise}. They eat ${this.diet}`
  }
  Location() {
    return `${this.name} lives in the ${this.location}.`
  }
}


let Animal1 = new Animal("Lion", "Meat", "Rawr", "Jungle");
let Animal2 = new Animal("Snake", "Small Animals", "STTHHH", "Rainforest")
let Animal3 = new Animal("Bird", "Insects", "Cheep", "Everywhere")



console.log(Animal3.speciesIntro())


class Shoe {
  constructor(size,color,type,age) {
    this.size = size;
    this.color = color;
    this.type = type;
    this.age = age;

  }
shoeDescription(){
  return `This ${this.type}, is size ${this.size}`
}
shoeStyle(){
  return `This shoe is ${this.age}, and is the color ${this.color}`
}
}

let Shoe1 = new Shoe("Nike", "Size 10", "2 years old", "blue" )
let Shoe2 = new Shoe("Adidas", "Size 12", "1 year old", "black")
let Shoe3 = new Shoe("Reebok", "Size 8", "3 years old", "red")

console.log(Shoe2.shoeDescription())


