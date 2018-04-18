import { create } from "domain";

var dogs = {
    raining: true,
    noise: 'woof!',
    makeNoise: function(){
        if (this.raining) {
            console.log('it is raining dogs: '+this.noise);
        }
    }
}

var cats = {
    raining: true,
    noise: 'meow!',
    makeNoise: function(){
        if (this.raining) {
            console.log("it's raining cats: "+this.noise);
        }
    }
}   

// dogs.makeNoise();
// cats.makeNoise();

function massHysteria(){
    if (dogs.raining && cats.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA");
    }
}

function createAnimal(raining, noise){
    return {
        raining: raining,
        noise: noise,
        makeNoise: function(raining){
            if (this.raining) {
                console.log(this.noise)
            }
        }
    }
}

var dog = createAnimal(true, 'woof!');
var cat = createAnimal(false, 'meow!');

// massHysteria();

var { dog, cat } = {
    dog: {
        raining:true,
        noise: 'woof!',
        makeNoise: function(raining){
            if (raining) {
                console.log('woof!');
            }
        }
    },
    cat: {
        raining:true,
        noise: 'meow!',
        makeNoise: function (raining) {
            if (raining) {
                console.log('meow!');
            }
        }
    }
};

console.log(dog.makeNoise(true));
console.log(cat.makeNoise(true));