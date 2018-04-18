
function DigitalPal(
    hungry, 
    sleepy, 
    bored, 
    age
) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function(){
        if (this.hungry) {
            console.log('That was yummy!');
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks! I'm full.");
        }
    };
    this.sleep = function(){
        if (this.sleepy) {
            console.log('ZZZzzzzzz');
            this.sleepy = true;
            this.bored = true;
            this.increaseAge();
        }
        else {
            console.log("No way! I'm not tired");
        }
    };
    this.increaseAge = function(){
        console.log("Happy Birthday to me! I am "+this.age+" old!");
        this.age += 1;
    };
    this.play = function(){
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = true;
            this.hungry = true;
        }
        else {
            console.log("Not right now. Later?");
        }
    };
};

var Dog = new DigitalPal();

Dog.outside = false;

Dog.bark = function(){
    console.log("Woof! Woof!");
}; 

Dog.goOutside = function(){
   if (!this.outside) {
       console.log("Yay! I love the outdoors!");
       this.outside = true;
       this.bark();
   }
   else {
       console.log("We're already outside though...");
   }
};

Dog.goInside = function(){
    if (this.outside) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    }
    else {
        console.log("I'm already inside...lol! bro");
    }
};

console.log("-------------DOG-------------")
console.log(Dog.outside);
console.log(Dog.hungry);
Dog.goOutside();
console.log(Dog.outside);

var Cat = new DigitalPal();

Cat.houseCondition = 100;

Cat.meow = function () {
    console.log("Meow! Meow!");
};

Cat.destroyFurniture = function () {
    while (this.houseCondition > 0){
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
};

Cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log("Are you sure about that?");
};

console.log("-------------CAT-------------")
console.log(Cat.hungry);
console.log(Cat.houseCondition);
Cat.destroyFurniture();
console.log(Cat.bored);