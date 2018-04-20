var inquirer = require("inquirer");
let starters = [];
let sub = [];
let team = [];
var players = 0;
var count = 0;

function Player(
    name,
    position,
    offense,
    defense
){
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
};

Player.prototype.goodGame = function(){
    let coinflit = Math.floor(Math.random() * 2 );
    if (coinflit === 0) {
        this.offense++;
    }
    else {
        this.defense++;
    }
}

Player.prototype.badGame = function(){
    let coinflit = Math.floor(Math.random() * 2);
    if (coinflit === 0) {
        this.offense--;
    }
    else {
        this.defense--;
    }
}

Player.prototype.printPlayer = function () {
    console.log('[--------------------- NEW PLAYER ---------------------]')
    console.log('Name: ' + this.name + '\nPosition: ' + this.position + '\nDefense (%s)', this.defense);
    console.log('Offense (%s)' + this.offense);
    console.log('[--------------------- END NEW PLAYER ---------------------]')
}

Player.prototype.getRandom = function(){
    if (this.goodGame) {
        
    }
}
let createPlayer = function () {
    // if statement to ensure that our questions are only asked five times
    if (player < 3) {
        // runs inquirer and asks the user a series of questions whose replies are
        // stored within the variable answers inside of the .then statement
        inquirer.prompt([
            {
                name: "name",
                message: "Enter the player name"
            }, {
                name: "position",
                message: "Enter the player position"
            }, {
                name: "offense",
                message: "Offense assigned to this player"
            }, {
                name: "defense",
                message: "Defense assigned to this player"
            }
        ]).then(function (answers) {
            // initializes the variable newProgrammer to be a programmer object which will take
            // in all of the user's answers to the questions above
            var player = new Player(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense);
            // printInfo method is run to show that the newProgrammer object was successfully created and filled
            player.printPlayer();
            // add one to count to increment our recursive loop by one
            players++;
            if (players < 3) {
                starters.push(player);
            }
            else {
                sub.push(player);
                team.push(player);
            }
            // run the askquestion function again so as to either end the loop or ask the questions again
            createPlayer();
        });
    }
}

createPlayer();

let playGame = function(){
    let first_number = Math.random(Math.floor() * 21);
    let second_number = Math.random(Math.floor() * 21);
    let team_off = 0;
    let team_def = 0;
    if (count < 5) {
        count++;
        // runs inquirer and asks the user a series of questions whose replies are
        // stored within the variable answers inside of the .then statement
        if (first_number > team_off) {
            team_off++;
        }
        else if (second_number > team_def) {
            team_off--;
        }
        for (let i = 0; i < starters.length; i++) {
            team_off = starters[i].offense;
            team_def = starters[i].offense;
        }

        
        playGame()
    }
    
}