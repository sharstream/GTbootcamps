var Student = function (name, subject, gpa) {
    // this.cast will hold all of our CastMember objects
    this.name = name;
    this.subject = subject;
    this.gpa = gpa;
};

// Exporting the Movie constructor which we will use in main.js
module.exports = Student;