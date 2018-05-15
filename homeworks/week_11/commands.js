// command library

let program = require("commander");
const { prompt } = require("inquirer");

const {
	addLetter,
	getWord
} = require("./index");

const {
	letter,
	word
} = require("./Word")

// hangman question

const question = {
	type: "input",
	name: "letter",
	message: "Enter new letter",
	validate: (value) => {
        return !regex.test(value) ? true : false;
    }
};

program
	.version("1.0.0")
	.description("Hangman Game Commander")

// program
// 	.command("add <letter>")
// 	.alias("a")
// 	.description("Add a letter")
// 	.action((letter) => {
// 		startGuessing();
// 	})

program
	.command("add <letter>")
	.alias("a")
	.description("Add a letter")
	.action(() => {
		prompt(question).then(answers => startGuessing(answers));
	});

program
	.command("word <word>")
	.alias("w")
	.description("Get a word")
	.action((word) => {
		startGuessing();
	})

program.parse(process.argv);