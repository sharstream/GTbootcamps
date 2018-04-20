var Classroom = require('./classroom.js');
var inquirer = require("inquirer");
let count = 0;

let myClass = new Classroom(56, 'Musa', '222');
let createStudent = function () {
    if (count < 2) {
        count++;
        inquirer.prompt([
            {
                name: "name",
                type: "input",
                message: "Pls enter your student name:"
            },
            {
                name: "subject",
                type: "input",
                message: "Pls enter your subject name:"
            },
            {
                name: "gpa",
                type: "input",
                message: "Pls enter your student GPA:"
            }
        ]).then(function (answer) {
            myClass.addStudent(answer.name, answer.subject, answer.gpa);
            createStudent();
        });
    }
}

createStudent();

console.log("Can you tell me more about the cast?\n");
for (var i = 0; i < myClass.students.length; i++) {
    console.log('------------------------ STUDENT ------------------------');
    console.log('Name: ' + myClass.students[i].name + '\nSubject: ' + myClass.students[i].subject + '\nGPA: (%s)', myClass.students[i].gpa);
    console.log('---------------------- END STUDENT ----------------------');
}

let runStudent = function () {
    myClass.students.forEach(element => {
        console.log('------------------------ STUDENT ------------------------');
        console.log('Name: ' + element.name + '\nSubject: ' + element.subject + '\nGPA: (%s)', element.gpa);
        console.log('---------------------- END STUDENT ----------------------');
    });
}

runStudent();