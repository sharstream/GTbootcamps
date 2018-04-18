
function Character(
    name, 
    profession, 
    gender, 
    age, 
    strengh, 
    hitPoint
){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strengh = strengh;
    this.hitPoint = hitPoint;
    this.printStats = function(){
        console.log('Name: '+ this.name);
        console.log('Profession: ' + this.profession);
        console.log('Gender: ' + this.gender);
        console.log('Age: ' + this.age);
        console.log('Strengh: ' + this.strengh);
        console.log('hit points: ' + this.hitPoint);
    };
    this.isAlive = function(){
        if (this.hitPoint < 0) {
            console.log('it is dead!!');
        }
        else {
            console.log('it is alive!!');
        }
    };
    this.attack = function(
        character
    ){
        character.hitPoint -= this.strengh;
        console.log('attack by:' + (this.strengh));
        console.log('HP: ' + character.hitPoint);
    };
    this.levelUp = function(
        age, 
        strengh, 
        hitPoint
    ){
        this.age += age;
        this.strengh += strengh;
        this.hitPoint += hitPoint;
    };
}

var one = new Character(
    'David', 
    'IT', 
    'Male', 
    31, 
    35, 
    100
);
var second = new Character(
    'John', 
    'CS', 
    'Male', 
    24, 
    20, 
    100
);

one.printStats();
// second.printStats();

// one.isAlive();

// one.attack(second);

one.levelUp(1,5,25);

console.log('age of ' + one.age + ' increased by one');
console.log('strengh of ' + one.strengh + ' increased by 5');
console.log('hit points of ' + one.hitPoint + ' increased by 25');

// console.log(new Character('David', 'IT', 'Male', 31, 500, 500));
// console.log(new Character('John', 'CS', 'Male', 24, 550, 550));

while(one.hitPoint > 0 && second.hitPoint > 0){
    second.attack(one);
    second.levelUp();
}