function Bird(name) {
    this.name = name;  //own property
  }
  
  Bird.prototype.numLegs = 2; // prototype property
  
function Dog(name){
    this.name= name
}


let duck = new Bird();
let beagle = new Dog();

// console.log(duck.constructor === Bird); 
// console.log(beagle.constructor === Dog);

function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
      console.log('true')
    } else {
      console.log('false')
    }
  }
  
joinBirdFraternity(beagle)