// Requiring our CastMember constructor function we exported from castMember.js

var Student = require("./student");


// Constructor function for creating Movie objects
var Classroom = function (total_students, professor_name, room_number) {
    // this.cast will hold all of our CastMember objects
    this.students = [];
    this.total_students = total_students;
    this.professor_name = professor_name;
    this.room_number = room_number;

    // This method that creates a CastMember object from the constructor function we required and pushes it to the `this.cast` array
    this.addStudent = function (name, subject, gpa) {
        this.students.push(new Student(name, subject, gpa));
    };
};

module.exports = Classroom;


